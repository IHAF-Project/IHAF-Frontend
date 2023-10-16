import { useState, useEffect } from 'react';
import Card1 from '../SliderCard/Card1';
import Card2 from '../SliderCard/Card2';
import Card3 from '../SliderCard/Card3';
import Navbar from "../NavBar/Navbar"
import './Page1.css';

const Page1 = () => {

  const [currentCardIndex, setCurrentCardIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % 3);
      }
    }, 4000); 

    return () => clearInterval(interval); 
  }, [isHovered]);


  

  return (
    <div className="Page-1">
       <Navbar/>
       <div className="card-container" >
        <Card2 isVisible={currentCardIndex === 1} />
        <Card3 isVisible={currentCardIndex === 2} />
        <Card1 isVisible={currentCardIndex === 0} />
      </div>
    </div>
  );
};

export default Page1;
