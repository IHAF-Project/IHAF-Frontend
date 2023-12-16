import React, { useState, useEffect } from 'react';
import './Gallery.css';
import Video from './Video';
import Navbar from '../component/NavBar/Navbar';
import { useTranslation } from 'react-i18next';
// import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
 
 
function Gallery() {
  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === 'ta';
  const [images, setImages] = useState([]);
  const [favorites, setFavorites] = useState(loadFavorites('fav'));
  const [videoFavorites, setVideoFavorites] = useState(loadFavorites('videoFav'));
  const [open, setOpen] = useState(0);
  const [popupContent, setPopupContent] = useState('');
 
  const [videos, setVideos] = useState([]);
 
  useEffect(() => {
    // Fetch videos from the API when the component mounts
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://ihaf-backend.vercel.app/get-all-images-videos');
        const data = await response.json();
        setVideos(data.data.getVideos);
        console.log(videos,'videos')
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
 
    fetchVideos();
  }, []); // Empty dependency array ensures the effect runs only once
 
 
 
 
  useEffect(() => {
    fetchImages();
  }, []);
 
  function saveFavorites(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
 
  function loadFavorites(key) {
    return JSON.parse(localStorage.getItem(key)) || Array(images.length).fill(false);
  }
  useEffect(() => {
    saveFavorites('fav', favorites); 
  }, [favorites]);
 
  useEffect(() => {
    saveFavorites('videoFav', videoFavorites);
  }, [videoFavorites]);
 
  async function fetchImages() {
    try {
      const response = await fetch('https://ihaf-backend.vercel.app/get-all-images-videos');
      const data = await response.json();
      setImages(data.data.getImage);
   
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }
 
  const handleClick = (index) => {
    setOpen(index);
 
  };
 
  const toggleFavorite = (index, type) => {
    if (type === 'video') {
      const newVideoFavorites = [...videoFavorites];
      newVideoFavorites[index] = !newVideoFavorites[index];
      setVideoFavorites(newVideoFavorites);
    } else {
      const newFavorites = [...favorites];
      newFavorites[index] = !newFavorites[index];
      setFavorites(newFavorites);
    }
  };
 
 
  const [fav, setFav] = useState(0);
 
  const handleClick1 = (index) => {
    setFav(index);
  };
 
 
 
  return (
    <div>
      <Navbar />
 
      {open === 0 && (
        <div className='gallery-container'>
          <div className='sub-main' >'
          <div className='gallery-head'>
            <p className='gallery-heading'> {t('Gallery.1')}</p>
          </div>
          <div className='gallery-body'>
            <p className={` ${open === 0 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(0)}>
            {t('Gallery.2')}
            </p>
            <p className={` ${open === 1 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(1)}>
            {t('Gallery.3')}
            </p>
            <p className={`${open === 2 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(2)}>
            {t('Gallery.4')}
            </p>
          </div>
          </div>
          <div className='gallery-images-container'>
  {images.length > 0 ? (
    images.map((image, index) => (
      <div key={index} className='image-container'>
        <div
          className='favorite-icon'
          onClick={() => toggleFavorite(index, 'image')}
          style={{ fontSize: '24px', cursor: 'pointer' }}
        >
          {favorites[index] ? '❤️' : '🤍'}
        </div>
        <img
          src={image.imageUrl}
          alt={`${index + 1}`}
          className='images-gal'
          onClick={() => setPopupContent(<img src={image.imageUrl} alt={`${index + 1}`} />)}
        />
      </div>
    ))
  ) : (
    <div  className='no-data-message'>No images available</div>
  )}
</div>

        </div>
      )}
 
      {open === 1 && (
        <div className='gallery-container'>
          <div className='sub-main' >'
          <div className='gallery-head'>
            <p className='gallery-heading'> {t('Gallery.1')}</p>
          </div>
          <div className='gallery-body'>
            <p className={` ${open === 0 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(0)}>
            {t('Gallery.2')}
            </p>
            <p className={` ${open === 1 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(1)}>
            {t('Gallery.3')}
            </p>
            <p className={`${open === 2 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(2)}>
            {t('Gallery.4')}
            </p>
          </div>
          </div>
          <Video
            favorites={videoFavorites}
            toggleFavorite={toggleFavorite}
            onClick={(index) =>
              setPopupContent(
                <video controls className='video-galry' key={index}>
                  <source src={images[index].videoUrl} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              )
            }
          />
        </div>
      )}
 
      {open === 2 && (
        <div className='favorate-image-container'>
          <div className='gallery-container'>
          <div className='sub-main' >'
          <div className='gallery-head'>
            <p className='gallery-heading'> {t('Gallery.1')}</p>
          </div>
          <div className='gallery-body'>
            <p className={` ${open === 0 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(0)}>
            {t('Gallery.2')}
            </p>
            <p className={` ${open === 1 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(1)}>
            {t('Gallery.3')}
            </p>
            <p className={`${open === 2 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(2)}>
            {t('Gallery.4')}
            </p>
          </div>
          </div>
            <div className='fav-main'>
              <div className='favorate-image-C'>
                <div className='sdfghjkk'>
                  <button className={`${fav === 0 ? 'fav-text' : 'fav-text-C'}`} onClick={() => handleClick1(0)}>
                  {t('Gallery.2')}
                  </button>
                </div>
                <div>
                  <button className={`${fav === 1 ? 'fav-text' : 'fav-text-C'}`} onClick={() => handleClick1(1)}>
                  {t('Gallery.3')}
                  </button>
                </div>
              </div>
            </div>
 
            {fav === 0 && (
              <div className='gallery-images-container'>
                {images
                  .filter((_, index) => favorites[index])
                  .map((image, index) => (
                    <img
                      src={image.imageUrl}
                      key={index}
                      alt={`image ${index + 1}`}
                      className='images-gal'
                      onClick={() => setPopupContent(<img src={image.imageUrl} alt={`image ${index + 1}`} />)}
                    />
                  ))}
              </div>
            )}
            {fav === 1 &&
         
            <div className='gallery-images-container'>
             {videos
            .filter((_, index) => videoFavorites[index])
            .map((video, index) => (
              <video controls  className='video-galry' key={index}>
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
           
          }
          </div>
        </div>
      )}
 
      {/* Popup */}
     
    </div>
  );
}
 
export default Gallery;