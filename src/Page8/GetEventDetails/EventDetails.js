import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import './EventDetails.css';
import logo009 from "../../Assets/MicrosoftTeams-image 1.png"
import Navbar from '../../COMPONENTS/NAVBAR/Navbar';

function EventDetails() {
  const { t } = useTranslation();
  const { _id } = useParams();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://ihaf-backend.vercel.app/get-event-by-id/${_id}`);
        if (response.ok) {
          const data = await response.json();
          setEventData(data.data); // Set the fetched data in state
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [_id]);

  if (!eventData) {
    // Render a loading state or handle when event data is not available
    return <div>Loading...</div>;
  }
  console.log(eventData.eventPhoto.url,"data====")
  return (
    <div className='eventdetails-main'>

     <Navbar/>
        <div className='wraps'>
        <div className='topic-event-details'>
          <div className='event-details-logo'>
            <img src={logo009} alt='logo'/>
          </div>
          <div className='event-details-list'>
            <h3>Name of Event : <span>{eventData.eventTitle}</span></h3>
            <h3>Description : <span>{eventData.eventDescription}</span></h3>
            <h3>Date : <span>{eventData.Date}</span></h3>
            <h3>Location : <span>{eventData.eventLocation}</span></h3>
          </div>
        </div>
        <div className='images-wrap '>
          {eventData.eventPhoto.map((photo, index) => (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              key={index}
              src={photo.url}
              alt={`Uploaded Event Photo ${index + 1}`}
              width={235}
              height={160}
             
            />
          ))}
        </div>

       </div>
   
    </div>
  );
}

export default EventDetails;
