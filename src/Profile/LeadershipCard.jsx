import {useRef } from 'react';
import logo from '../images/logo.png'
import { PropTypes } from 'prop-types';


function LeadershipCard({ name,LeaderID,DateOfJoining,Profile,LocalityOfPosition,NameOfPosting}) {

  const cardRef = useRef(null);

  return (
   
    <div className="membar-card" ref={cardRef}>
    <div className="member-card-top">
    <div className="member-card-border">
    <img src={logo} alt='logo' />
     <div className="member-card-top-details">
      <p>Integral Humanism Ambedkar Federation</p>
      <span>Leadership card</span>
     </div>
    </div>
    </div>
     <div className="member-card-bt">
     <img src={Profile || 'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png'} alt='logo' />
     <div className="member-card-bt-details">
      <div className="member-card-bt-details-name">
       <p>Name </p>
       <>:</>
       <span>{name}</span>
      </div>
      <div className="member-card-bt-details-name"> <p>Leader ID </p>
      <>:</>
      <span>{LeaderID}</span>
      </div>
      <div className="member-card-bt-details-name"> <p>Date of joining </p>
      <>:</>
      <span>{DateOfJoining}</span>
      </div>
      <div className="member-card-bt-details-name"> <p>Locality of position</p>
      <>:</>
      <span>{LocalityOfPosition}</span>
      </div>
      <div className="member-card-bt-details-name"> <p>Name of posting</p>
      <>:</>
      <span>{NameOfPosting}</span>
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