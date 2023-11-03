import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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
console.log (eventData, "photo===")
  return (
    <div>
      {eventData.map((event, index) => (
        <div key={event._id} className='metting-tab2-cont'>
          <img src={event.eventPhoto} alt={event.eventTitle} />
        </div>
      ))}
    </div>
  );
}

export default AllEvents;
