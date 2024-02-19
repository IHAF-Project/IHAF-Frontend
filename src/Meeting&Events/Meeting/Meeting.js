import React, { useState,useEffect } from 'react';
import "../Meeting.css"
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import AllEvents from '../Events/AllEvents';
import ZoomMeeting from './ZoomMeeting';

function Meeting() {
  const { t } = useTranslation()


  const [memberOpen,setMemberOpen] =useState(0)

  const handleClick = (index) =>{
    setMemberOpen(index)
  }

  
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
