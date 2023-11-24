// Gallery.js

import React, { useState, useEffect } from 'react';
import './Gallery.css';
import image1 from '../Assets/Rectangle 22.png';
import image2 from '../Assets/Rectangle 23.png';
import Video from './Video';
import Navbar from '../COMPONENTS/NAVBAR/Navbar';

function Gallery() {
  const images = [
    { url: image1 },
    { url: image2 },
    { url: image1 },
    { url: image2 },
    { url: image1 },
    { url: image2 },
    { url: image2 },
    { url: image2 },
  ];

  const [favorites, setFavorites] = useState(loadFavorites('fav'));
  const [videoFavorites, setVideoFavorites] = useState(loadFavorites('videoFav'));
  const [open, setOpen] = useState(0);

  useEffect(() => {
    saveFavorites('fav', favorites);
  }, [favorites]);

  useEffect(() => {
    saveFavorites('videoFav', videoFavorites);
  }, [videoFavorites]);

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

  function loadFavorites(key) {
    return JSON.parse(localStorage.getItem(key)) || Array(images.length).fill(false);
  }

  function saveFavorites(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const [fav , setfav] = useState(0)

  const handleClick1 = (index) => {
    setfav(index)
  }

  return (
    <div >
      <Navbar/>
    
      {open === 0 && (
        <div className='gallery-container'>
           <div className='gallery-head'>
        <p className='gallery-heading'>Gallery</p>
      </div>
      <div className='gallery-body'>
        <p className={` ${open === 0 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(0)}>
          Image
        </p>
        <p className={` ${open === 1 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(1)}>
          Video
        </p>
        <p className={`${open === 2 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(2)}>
          Favorites
        </p>
      </div>
        <div className='gallery-images-container'>
          {images.map((image, index) => (
            <div key={index} className='image-container'>
               <div className='favorite-icon' onClick={() => toggleFavorite(index, 'image')} style={{ fontSize: '24px',cursor: 'pointer' }}>
                {favorites[index] ? '❤️' : '🤍'}
              </div>
              <img src={image.url} alt={`image ${index + 1}`} className='images-gal' />
             
            </div>
          ))}
        </div>
        </div>
      )}
      {open === 1 && 
      <div className='gallery-container'> 
        <div className='gallery-head'>
        <p className='gallery-heading'>Gallery</p>
      </div>
      <div className='gallery-body'>
        <p className={` ${open === 0 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(0)}>
          Image
        </p>
        <p className={` ${open === 1 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(1)}>
          Video
        </p>
        <p className={`${open === 2 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(2)}>
          Favorites
        </p>
      </div>
        <Video favorites={videoFavorites} toggleFavorite={toggleFavorite} />
      </div>
      }
      {open === 2 && (
        <div className='favorate-image-container'>
        
         <div className='gallery-video'>
          <div className='gallery-fav-cont' >
          <div className='gallery-head'>
        <p className='gallery-heading'>Gallery</p>
         </div>
         <div className='gallery-body'>
        <p className={` ${open === 0 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(0)}>
          Image
        </p>
        <p className={` ${open === 1 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(1)}>
          Video
        </p>
        <p className={`${open === 2 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(2)}>
          Favorites
        </p>
         </div>
          </div>
          <div className='fav-main'>
          <div className='favorate-image-C'>
         <div className='sdfghjkk'>
         <button className={`${fav === 0 ? 'fav-text' : 'fav-text-C'}`} onClick={ () => handleClick1 (0)}> IMAGES</button>
         </div>
          <div>
            <button className={`${fav === 1 ? 'fav-text' : 'fav-text-C'}`} onClick={() => handleClick1 (1)} >VIDEOS</button>
          </div>
         </div>
         </div>
         
         {fav === 0 && 
         <div className='gallery-images-container'>
           {images
            .filter((_, index) => favorites[index])
            .map((image, index) => (
              <img src={image.url} key={index} alt={`image ${index + 1}`} className='images-gal' />
            ))}
         </div>
         }
         {
          fav === 1 && 
          <div className='gallery-images-container'>
             {images
            .filter((_, index) => videoFavorites[index])
            .map((video, index) => (
              <video controls  className='video-galry' key={index}>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
         }
        </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
