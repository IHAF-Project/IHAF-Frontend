// Video.js

import React, { useState ,useEffect} from 'react';
import image2 from "../Assets/Polygon 11.png";
import close from "../Assets/+.png";
 
function Video({ favorites, toggleFavorite }) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
 
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://ihaf-backend.vercel.app/get-all-images-videos');
        const data = await response.json();
        setVideos(data.data.getVideos.map(video => video.videoUrl));
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
 
    fetchVideos();
  }, []);
 
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
              <div className='favorite-icon' onClick={() => toggleFavorite(index, 'video')} style={{ fontSize: '24px', cursor: 'pointer' ,zIndex:3}}>
                {favorites[index] ? '❤️' : '🤍'}
              </div>
              <video controls className='video-image'  onClick={() => openPopup(video)}  poster='https://th.bing.com/th/id/OIP.UydJkzJIHUXPqXpYl0IU-gAAAA?rs=1&pid=ImgDetMain' >
              <source src={video.videoUrl} type="video/mp4"  />
              Your browser does not support the video tag.
            </video>
           
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
          <div className='popup-content-C'>
            <video controls className='video-control'>
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <img src={close} className='close-btn' onClick={closePopup} alt="Close button" />
          </div>
        </div>
      )}
    </div>
  );
}
 
export default Video;