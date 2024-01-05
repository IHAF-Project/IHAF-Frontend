import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Feedback.css';
import axios from 'axios';
import useScrollToTop from '../component/Hooks/useScrollToTop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/NavBar/Navbar.jsx';

function Feedback() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === "ta";
  const [userData, setUserData] = useState(null);

  const storedData = JSON.parse(localStorage.getItem('userData'));
 const _id = storedData?.data?._id || storedData?._id

useEffect (() =>{
  const fetchData = async () =>{
    const response =await fetch(`https://ihaf-backend.vercel.app/get-new-memberById/658164ad7b45eb149d241651`)
    const data = await response.json();
  if(data?.data?.isAdminApproved || data?.isAdminApproved=== true){
    setUserData(data?.data)
    console.log(userData,'api-successfully')
  }else{
    console.log(storedData?.data?.isAdminApproved || storedData?.isAdminApproved,'local-successfully')
  }
  }
  fetchData()
},[])


  const memberID=userData?.memberID || storedData?.memberID || storedData?.data?.memberID 
  const profileURL = storedData?.data?.profileURL || userData?.profileURL  || storedData?.memberID
  const name = storedData?.data?.name || userData?.name || storedData?.memberID

  console.log(profileURL,'profileURL')

  const [feeditems, setFeedItems] = useState({
    memberID: memberID || "",
    content: "",
    name: name ||"",       
    profileURL: profileURL || ""  
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFeedItems(prevState => ({ ...prevState, content: "" }));
    }, 1000);
    try {
      const response = await axios.post('https://ihaf-backend.vercel.app/new-feedback', feeditems, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data = response.data;
        console.log(data, "feedback items received");
        setFeedItems(data);
      } else {
        toast.success('User feedback received successfully',{
          position:'top-right'
         
        })
        console.error(response.data, "feedback error message");
        setTimeout(()=>{
         
          navigate('/')
        
        },3000)
       

      }
    } catch (error) {
      console.error(error.message, "error message");
      toast.error('Feedback validation failed',{
        position:'top-right'
      })
    }
  }
  useEffect(() => {
    
    setFeedItems((prevFeedItems) => ({
      ...prevFeedItems,
      memberID: userData?.memberID || '',
      profileURL: userData?.profileURL || '',
      name: userData?.name || '',
  
    }));
  }, [userData]);
useScrollToTop();
  return (
    <div className='feedback-container abc'>
      <Navbar></Navbar>
      <div className='feedback-container-main'>
        <p className={`${isTamilLanguage ? 'Feedback-heading-tamil' : 'Feedback-heading'}`}>{t('hello.10')}</p>
        <p className={`${isTamilLanguage ? 'Feedback-text-tamil' : 'Feedback-text'}`}>{t('hello.11')}</p>
        <div className='feedback-input-data'>
          <div className='feedback-input-conta'>
            <div className='feedbackname'><div className={`${isTamilLanguage ? 'feed-name-tamil' : 'feed-name'}`}>{t("hello.12")}</div> <div className='equal1'>:</div></div>
            <input
              type='text'
              className='feedback-input-name'
              value={feeditems.memberID ||"Not a member"}
              disabled
              onChange={(e) => setFeedItems({ ...feeditems, memberID: e.target.value })}
            />
          </div>
          <div className='feedback-input-conta'>
            <div className='feedbackname'><div className={`${isTamilLanguage ? 'feed-name-tamil' : 'feed-name'}`}>{t("hello.13")}</div> <div className='equal1'>:</div></div>
            <div className='feed-sub'>
            <textarea
              className='feedback-textarea'
              value={feeditems.content}
              onChange={(e) => setFeedItems({ ...feeditems, content: e.target.value })}
              maxLength={100}
            />
            <p className='count'>{feeditems.content.length}/100</p>
            </div>
          </div>
        </div>
        <div className='feed-btn-con'>
          <button
            className={`${isTamilLanguage ? 'feedback-btn-tamil' : 'feedback-btn'}`}
            onClick={handleSubmit}
          >
            {t("hello.14")}
          </button>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Feedback;
