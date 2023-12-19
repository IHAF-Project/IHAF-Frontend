import {useRef } from 'react';
import logo from '../../images/logo.png'
import { PropTypes } from 'prop-types';


function LeadershipCard({ name,LeaderID,DateOfJoining,Profile,Location,PostingName}) {

  const cardRef = useRef(null);

  return (
   
    <div className="leader-card" ref={cardRef}>
    <div className="leader-card-top">
    <div className="leader-card-border">
    <img src={logo} alt='logo' />
     <div className="leader-card-top-details">
      <p>Integral Humanism Ambedkar Federation</p>
      <span>Leadership card</span>
     </div>
    </div>
    </div>
     <div className="leader-card-bt">
     <img src={Profile || 'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png'} alt='logo' />
     <div className="leader-card-bt-details">
      <div className="leader-card-bt-details-name">
       <p>Name </p>
       <>:</>
       <span>{name}</span>
      </div>
      <div className="leader-card-bt-details-name"> <p>Leader ID </p>
      <>:</>
      <span>{LeaderID}</span>
      </div>
      <div className="leader-card-bt-details-name"> <p> Joining </p>
      <>:</>
      <span>{DateOfJoining}</span>
      </div>
      <div className="leader-card-bt-details-name"> <p>Area</p>
      <>:</>
      <span>{Location}</span>
      </div>
      <div className="leader-card-bt-details-name"> <p> position</p>
      <>:</>
      <span>{PostingName}</span>
      </div>
     </div>
     </div>
     </div>
     
  )
}
LeadershipCard.propTypes = {
  name: PropTypes.node,
  MemberID: PropTypes.node,
  DateOfJoining: PropTypes.node,
};

export default LeadershipCard