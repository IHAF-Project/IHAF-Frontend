import React, { useEffect, useState } from 'react';
import './Popup.css';

const Popup = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, [onClose]);
  return isVisible ? (
    <div className={`custom-notification ${type}`}>
      <p>{message}</p>
    </div>
  ) : null;
};

export default Popup;
