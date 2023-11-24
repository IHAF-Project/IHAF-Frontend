// Video.js

import React, { useState, useEffect } from 'react';
import image2 from "../Assets/Polygon 11.png";
import image1 from "../Assets/Frame 258.png";
import close from "../Assets/+.png"

function Video({ favorites, toggleFavorite }) {
  const [popupOpen, setPopupOpen] = useState(false);
  
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    'https://res.cloudinary.com/ddanljbwx/video/upload/v1676715944/samples/cld-sample-video.mp4',
    'https://res.cloudinary.com/ddanljbwx/video/upload/v1688620948/y90ecyx5b4fjilfvnela.mp4',
    'https://res.cloudinary.com/ddanljbwx/video/upload/v1676715944/samples/cld-sample-video.mp4',
  ];

  const openPopup = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedVideo(null);
    setPopupOpen(false);
  };

  return (
    <div className='gallery-images-container'>
      <div className='videos-container'>
        {videos.map((video, index) => (
          <div key={index} className='video-item'>
            <div>
            <div className='favorite-icon' onClick={() => toggleFavorite(index, 'video')} style={{ fontSize: '24px', cursor: 'pointer' }}>
  {favorites[index] ? '❤️' : '🤍'}
</div>

              <img
                src={image1}
                alt={`video ${index + 1}`}
                className='video-image'
                onClick={() => openPopup(video)}
              />
           
            </div>
            <div>
              <button className='play-btn' onClick={() => openPopup(video)}>
                PLAY <img src={image2} width={20} height={20} alt="Play button" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {popupOpen && selectedVideo && (
        <div className='popup'>
          <div className='popup-content'>
         
            <video controls className='video-control'>
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
             
            </video>
            <img src={close} className='close-btn' onClick={closePopup} ></img>
          </div>
        </div>
      )}
    </div>
  );
}

export default Video;
