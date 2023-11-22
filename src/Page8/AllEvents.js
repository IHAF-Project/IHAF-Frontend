import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Meeting.css';

function AllEvents() {
  const { t } = useTranslation();
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    fetch('https://ihaf-backend.vercel.app/get-selected-events')
      .then((response) => response.json())
      .then((data) => {
        const eventsWithDetails = data.data.map((event) => ({
          _id: event._id,
          imageUrl: event.eventPhoto[0] ? event.eventPhoto[0].url : null,
        }));
        setEventData(eventsWithDetails);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="events-main">
      {eventData.map((event, index) => (
        <div key={index} className="meeting-tab2-cont">
          <Link to={`/events/${event._id}`}>
            <div className="event-photos">
              {event.imageUrl && <img key={event._id} src={event.imageUrl} alt={t('eventPhoto')} />}
            </div>
          </Link>
       
        </div>
      ))}
    </div>
  );
}

export default AllEvents;
