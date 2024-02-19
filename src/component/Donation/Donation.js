import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import Navbar from "../../component/NavBar/Navbar.jsx"
const Donation = () => {

  const storedData = JSON.parse(localStorage.getItem('userData'));
  const initialUserID = storedData?.data?.memberID || storedData?.memberID;
  const [showload1, setshowload1] = useState(false);
  const [formData, setFormData] = useState({
    amount: '',
    attachment: '',
    memberID: initialUserID,
    transactionId:''
  });
  
  // Additional check for userID after the component has rendered
  useEffect(() => {
    if (!initialUserID) {
      console.error('Error: Unable to retrieve memberID from local storage.');
      // Handle this error case appropriately, e.g., redirect the user, show an error message, etc.
    }
  }, [initialUserID]);
  let file;
  const handleImageUpload = async (e) => {
    setshowload1(true);
    file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ivs6otkx');
  
    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/ddanljbwx/auto/upload', formData);
      const secureUrl = response.data.secure_url;
  
      setFormData((prevData) => ({
        ...prevData,
        attachment: secureUrl,
      }));
      setshowload1(false); // Set showload to false on successful upload
    } catch (error) {
      console.log('Error uploading file:', error);
      setshowload1(true); // Set showload to true if there's an error
    }
  };
  

  const handleButtonClick = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      amount: value === true ? '' : parseInt(value), 
      
    }));
  };

  const handleInputChange = (e) => {
    const enteredValue = e.target.value;
  
    // Check if entered value already includes '$'
    if (!enteredValue.includes('₹')) {
      setFormData({
        ...formData,
        amount: enteredValue,
      });
      
    } else {
      // If '$' is present, update formData.amount without '$'
      setFormData({
        ...formData,
        amount: enteredValue.slice(1),
      });
    }
  };

  const handleTransaction = (value) =>{
    setFormData({
      ...formData,
      transactionId:value
    })
  }
  
  const {t , i18n} =useTranslation()

  const tamilLanguage =i18n.language === 'ta'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form Data:', formData);
  
      const responseData = await fetch('https://ihaf-backend.vercel.app/donation-record', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
      
      const data = await responseData.json();
      console.log('API Response:', data);
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  
  return (
 <div>
  <Navbar/>
  <div className='bg-black-500 w-screen h-auto flex text-xs items-center justify-center  max-2xl:w-screen overflow-y-auto scro'>
        <div className=' w-4/5 max-sm:w-full ph:w-full h-full flex flex-col items-center m-7  max-sm:p-0  gap-3 pe-3 ps-3  '>
          <div className=' flex items-center justify-center flex-col w-10/12 h-auto text-lg my-2  max-sm:p-0 '>
            <h1 className={`font-Poppins  font-medium py-4 ph:text-base ph:font-semibold ${tamilLanguage ? 'text-xl' : 'text-2xl'}`}>
              {t("Donation.1")}
              </h1>
            <p className='font-Poppins text-base text-center font-medium ph:text-sm'>
            {t("Donation.2")}
             </p>
          </div>
            <div className='flex gap-5 max-sm:gap-1 max-sm:py-2 text-base border-2 border-blue-950 my-3'>
              <div className='h-auto w-full text-sm p-2 flex flex-col gap-4'>
                  <div className=' text-black mx-1 font-Poppins text-base font-medium'>{t("Donation.3")}<span  className=' text-indigo-900 mx-1 font-Poppins text-base font-medium'> : <span/>{t("Donation.6")}</span>  </div>
                  <div className=' text-black mx-1 font-Poppins text-base font-medium'>{t("Donation.4")}<span className=' text-indigo-900 mx-1 font-Poppins text-base font-medium'>: 60443083577 </span></div>
                  <div className=' text-black mx-1 font-Poppins text-base font-medium'>{t("Donation.5")}<span className=' text-indigo-900 mx-1 font-Poppins text-base font-medium'>: MAHB0000450</span></div>
              </div>
             
            </div>
              <div className=' w-full flex items-center justify-center flex-col border-2 bg-slate-100 p-4 rounded-lg'>
                <div className=' h-auto p-4 flex flex-col items-center justify-center gap-3 w-full  bg-blue-400 rounded-lg max-sm:px-1'>
                <input className='w-22 text-lg flex text-center justify-center max-sm:w-22 max-sm:p-3 border-2 border-slate-950 p-3 '
                  type="text"
                  value={formData.amount !== '' ? `₹${formData.amount}` : formData.amount}
                  onChange={handleInputChange}
                  placeholder={t("Donation.7")}
                  inputMode='numeric'
                  pattern='[0-9]*'
                  readOnly={!formData.amount && formData.amount !== ''}
                    />
                     <input className='w-22 text-lg flex text-center justify-center max-sm:w-22 max-sm:p-3 border-2 border-slate-950 p-3 '
        type="text"
        value={formData.transactionId}
        placeholder={t("Donation.11")}
        onChange={(e) => handleTransaction(e.target.value)}
      />
                     <div className='flex flex-col gap-2 items-center justify-center '>
                      <p className=' text-white max-sm:w-9/12 font-Poppins text-base font-medium text-center'>*{t("Donation.8")}*</p>
                      <div className='flex flex-col max-sm:w-4/5 '>
                        {/* <label htmlFor="imageUpload">Choose an image:</label> */}
                        <input
                          type="file"
                          id="imageUpload"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                        {showload1 &&<div className='loads'>File uploading Please wait...</div>}
                        </div>

                        {/* Display the selected image (optional) */}
                        {/* {selectedImage && (
                          <div className='w-12 h-auto'>
                          
                            <img
                              src={URL.createObjectURL(selectedImage)}
                              alt="Selected"
                              style={{ maxWidth: '100%', maxHeight: '200px' }}
                            />
                          </div>
                        )} */}
                    </div>

                </div>
                <div className='flex items-center justify-center py-6 w-11/12'>
                  <div className='grid grid-cols-2 w-auto items-center justify-center max-sm:grid-cols-2 max-sm:gap-4 ph:gap-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    <button className='border-2 rounded-lg  w-full max-sm:w-40 max-sm:p-6 ph:w-24 ph:p-4 bg-blue-400 p-8 hover:border-blue-900 hover:bg-white text-white hover:text-black  font-Poppins text-base font-medium' onClick={() => handleButtonClick('10')}>₹10</button>
                    <button className='border-2 rounded-lg  w-full max-sm:w-40 max-sm:p-6 ph:w-24 ph:p-4 bg-blue-400 p-8 hover:border-blue-900 hover:bg-white text-white hover:text-black  font-Poppins text-base font-medium' onClick={() => handleButtonClick('20')}>₹20</button>
                    <button className='border-2 rounded-lg  w-full max-sm:w-40 max-sm:p-6 ph:w-24 ph:p-4 bg-blue-400 p-8 hover:border-blue-900 hover:bg-white text-white hover:text-black  font-Poppins text-base font-medium' onClick={() => handleButtonClick('50')}>₹50</button>
                    <button className='border-2 rounded-lg  w-full max-sm:w-40 max-sm:p-6 ph:w-24 ph:p-4 bg-blue-400 p-8 hover:border-blue-900 hover:bg-white text-white  hover:text-black font-Poppins text-base font-medium' onClick={() => handleButtonClick('100')}>₹100</button>
                    <button className='border-2 rounded-lg  w-full max-sm:w-40 max-sm:p-6 ph:w-24 ph:p-4 bg-blue-400 p-8 hover:border-blue-900 hover:bg-white text-white hover:text-black  font-Poppins text-base font-medium' onClick={() => handleButtonClick('200')}>₹200</button>
                    <button className={`border-2 rounded-lg  w-full max-sm:w-40 max-sm:p-4 ph:w-24  bg-blue-400 hover:border-blue-900   hover:bg-white text-white hover:text-black  font-Poppins  font-medium ${tamilLanguage ? 'text-sm p-6 ph:p-2' :'text-base p-8 ph:p-4'}`} onClick={() => handleButtonClick(true)}>{t("Donation.10")}</button>

                  </div>
                </div>

            </div>
            <div className='w-full flex items-center justify-center h-auto p-4'>
              <button className='b-5 bg-btnColor w-36 p-3 font-Poppins text-base font-medium text-white rounded-lg active:translate-y-1.5' onClick={handleSubmit}>{t("Donation.9")}</button>
            </div>
        </div>
        {/* Right side */}
        {/* <div className=' bg-blue-200 w-1/2 bg-cover bg-center h-full items-center flex flex-col gap-6 overflow-y-auto max-2xl:w-1/2 ps-3 pe-3'>
            <div className='text-xl p-3'>
              <p>Lorem Ipsum Dolor Sit Amet</p>
            </div>
            <div className='px-6'>
              <p>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.</p>
            </div>
            <ul className='px-3 text-sm'>
              <li>1.<span/>Etiam risus purus, pharetra id imperdiet vel, lobortis vitae sem. Sed nec .</li>
              <li>2.<span/>Etiam risus purus, pharetra id imperdiet vel, lobortis vitae sem. Sed nec .</li>
              <li>3.<span/>Etiam risus purus, pharetra id imperdiet vel, lobortis vitae sem. Sed nec .</li>
            </ul>
            <div className='px-2 text-sm'>
            <p>Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.</p>
            </div>
        </div> */}
    </div>
 </div>

  )
}

export default Donation