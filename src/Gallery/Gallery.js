import React, { useState } from 'react';
import "./Gallery.css";
import image1 from "../Assets/Rectangle 22.png"
import image2 from "../Assets/Rectangle 23.png"
import Video from './Video';

function Gallery() {
  const [open, setOpen] = useState(0);

  const handleClick = (index) => {
    setOpen(index);
  };

  const images = [
    { url: image1 },
    { url: image2 },
    { url: image1 },
    { url: image2 },
    { url: image1 },
    { url: image2 },
    { url: image2 },
    { url: image2 }
  ];

  return (
    <div className='gallery-container'>
      <div className='gallery-head'>
        <p className='gallery-heading'>Gallery</p>
      </div>
      <div className='gallery-body'>
        <p className={` ${open === 0 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(0)}>Image</p>
        <p className={` ${open === 1 ? 'image-text' : 'image-text-cont'}`} onClick={() => handleClick(1)}>Video</p>
      </div>
      {open === 0 && 
        <div className='gallery-images-container'>
          {images.map((image, index) => (
            <img src={image.url} key={index} alt={`image ${index + 1}`} className='images-gal' />
          ))}
        </div>
      }
      {open === 1 && 
         <Video/>
      }
    </div>
  );
}

export default Gallery;
