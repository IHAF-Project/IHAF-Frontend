import React, { useState,useEffect } from 'react';
import "./Meeting.css"
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import AllEvents from './AllEvents';
import ZoomMeeting from './ZoomMeeting';

function Meeting() {
  const { t } = useTranslation()

  // const [meeting, setMeeting] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.post('https://ihaf-backend.vercel.app/new-meet');
  //       setMeeting(response.data); 
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []); 

 

  const [memberOpen,setMemberOpen] =useState(0)

  const handleClick = (index) =>{
    setMemberOpen(index)
  }

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setMemberOpen((memberOpen + 1) % 2);
  //   }, 4000);
  //   return () => clearTimeout(timeoutId);
  // }, [memberOpen]);
  
 
  return (
    <div className='Meeting-container'>

        <div className='Meeting-con-M'>
        <div className= {`${memberOpen === 0 ? 'meeting-events' : 'meeting-eve'}`} onClick={()=>handleClick(0)}>
          <p >Zoom meeting</p>
           </div>
        <div className={`${memberOpen === 1 ? 'meeting-events' : 'meeting-eve'}`} onClick={()=>handleClick(1)}>
          <p  className=''>Events</p>
          </div>
        </div>
        {memberOpen === 0 &&
         <div>
          <ZoomMeeting/>
          </div>
}   
{memberOpen === 1 &&
           <div className='mmeting-tab-2'>
              <AllEvents/>
           </div>
}
 
    </div>
  )
}

export default Meeting;
