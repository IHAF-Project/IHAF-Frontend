import PropTypes from 'prop-types';

function Card3({isVisible}) {
  
    return (
      <div className={`intro-slide-3 ${isVisible ? 'actived' : ''}`}>
      <div className="intro-slide-content">
        <div className="intro-slide-content-right"></div>
        <div className="intro-slide-content-left"></div>
      </div>
    </div>
    )
  }
  
   Card3.propTypes = {
    isVisible: PropTypes.node,
};
  export default Card3