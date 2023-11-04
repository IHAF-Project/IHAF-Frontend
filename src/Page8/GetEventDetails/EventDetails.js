import React from 'react'
import "./EventDetails.css"
import logo0009 from "../../Assets/MicrosoftTeams-image 1.png"
import Navbar from '../../NavBar/Navbar'

function EventDetails() {
  return (
    <div className='eventdetails-main'>
        <Navbar/>
        <div className='topic-event-details'>
            <div className='event-details-logo'>
                <img src={logo0009} alt='logo'/>
            </div>
            <div className='event-details-list'>
                <h3>Name of Event : <span>santhanam</span></h3>
                <h3>Description : <span>santhanam</span></h3>
                <h3>Date : <span>santhanam</span></h3>
                <h3>Location : <span>santhanam</span></h3>
            </div>
        </div>
        <div className='images-wrap'>
          <img alt='card' src='https://th.bing.com/th/id/OIP.5wJMDxYny8bvNsETfqCGOwHaE7?pid=ImgDet&rs=1'/>
          <img alt='card' src='https://th.bing.com/th/id/OIP.5wJMDxYny8bvNsETfqCGOwHaE7?pid=ImgDet&rs=1'/>
          <img alt='card' src='https://th.bing.com/th/id/OIP.5wJMDxYny8bvNsETfqCGOwHaE7?pid=ImgDet&rs=1'/>
          <img alt='card' src='https://th.bing.com/th/id/OIP.5wJMDxYny8bvNsETfqCGOwHaE7?pid=ImgDet&rs=1'/>

        </div>
    </div>
  )
}

export default EventDetails