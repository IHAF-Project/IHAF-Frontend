import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './Meeting.css';

function AllEvents() {
  const { t } = useTranslation();
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://ihaf-backend.vercel.app/get-selected-events')
      .then((response) => response.json())
      .then((data) => {
        // Extract only the first image URL and event ID from each event
        const eventsWithFirstImage = data.data.map((event) => ({
          _id: event._id,
          imageUrl: event.eventPhoto[0].url,
        }));
        setEventData(eventsWithFirstImage);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="events-main">
      {eventData.map((event, index) => (
        <div key={index} className="meeting-tab2-cont">
          {/* Create a Link to the EventDetail component with the event's main ID */}
          <Link to={`/events/${event._id}`}>
            <div className="event-photos">
              <img key={event._id} src={event.imageUrl} alt={t('eventPhoto')} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllEvents;
