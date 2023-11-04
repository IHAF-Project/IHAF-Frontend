import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "./Meeting.css"

function AllEvents() {
  const { t } = useTranslation();
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://ihaf-backend.vercel.app/get-all-events')
      .then((response) => response.json())
      .then((data) => setEventData(data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {eventData.map((event) => (
        <div key={event._id} className='meeting-tab2-cont'>
         
          <div className="event-photos">
            {event.eventPhoto.map((photo) => (
              <img key={photo._id} src={photo.url} alt={event.eventTitle} />
            ))}
                      

          </div>

        </div>
      ))}
    </div>
  );
}

export default AllEvents;
