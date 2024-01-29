import {useRef } from 'react';
import logo from '../../images/logo.png'
import { PropTypes } from 'prop-types';
import back from '../../images/back2.png'
import { useTranslation } from 'react-i18next';

function LeadershipCard({ name,LeaderID,DateOfJoining,Profile,Location,PostingName}) {
  const { t, i18n } = useTranslation();
  const cardRef = useRef(null);

  return (
   
    
   <div className='leader-card'>
   {/* card frontside */}
   <div className="h-[188px] w-[340px] text-white flex flex-col items-center text-[12px]" style={{background: 'linear-gradient(74deg, rgba(39,39,39,1) 36%, rgba(49,49,49,1) 53%, rgba(80,79,79,1) 77%, rgba(116,113,113,1) 93%, rgba(131,129,129,1) 98%)'}} ref={cardRef}>
   <div className=" flex items-center w-full h-[20%] text-[12px] my-1">
    
   <div className='h-[90%] w-[18%] flex justify-center items-center p-2'>
      <img className=' object-cover w-auto h-[50px] py-1' src={logo} alt='logo' />
      </div>
     
     <div className=" w-[80%] text-[9px] text-white flex flex-col items-center justify-evenly">
       <p className='text-white text-[9px] items-center text-center my-2'>{t('pageOne.1')}</p>
       <span className=' text-[10px]'>{t('JionMemberShip.24')}</span>
     </div>
     
     </div>
    <div className="flex items-center justify-around p-2 gap-3 border-2 rounded-lg m-2 h-[72%] ">
    <div className='w-[20%] h-[90%] flex items-center justify-center'>
    <img className=' object-cover' src={Profile || 'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png'} alt='logo' />       
    </div>
    <div className="w-[80%] h-[100%]">
     <div className=" w-[90%] h-5 flex flex-row gap-2 font-Poppins">
      <p>{t('JionMemberShip.3')} </p>
      <>:</>
      <span>{name}</span>
     </div>
     <div className="w-[90%] h-5 flex flex-row gap-2 font-Poppins"> <p>{t('JionMemberShip.23')}</p>
     <>:</>
     <span>{LeaderID}</span>
     </div>
     <div className="w-[90%] h-5 flex flex-row gap-2 font-Poppins"> <p>{t('JionMemberShip.19')} </p>
     <>:</>
     <span>{DateOfJoining}</span>
     </div>
     <div className="w-[90%] h-5 flex flex-row gap-2 font-Poppins"> <p>{t('JionMemberShip.21')} </p>
     <>:</>
     <span>{PostingName}</span>
     </div>
     <div className="w-[90%] h-5 flex flex-row gap-2 font-Poppins"> <p>{t('JionMemberShip.22')} </p>
     <>:</>
     <span>{Location}</span>
     </div>
           </div>
           </div>
           </div>
            {/* card backside */}
            
           <div className=" w-[340px] h-[188px]" ref={cardRef}>
             <img className=' object-cover' src={back} alt='card'></img>
           {/* <div>
            
           <div className="member-card-bt-back">
           <div className="member-card-back-terms">
             <div className="member-card-back-title">Tearms and condition</div>
             <div className='member-card-back-list'>
             <li>Terms condition based on rules and regulations in the website</li>
             <li>Terms condition based on rules </li>
             <li>Terms condition based on rules </li>
             <li>Terms condition based on rules </li>
             </div>
             </div>
             <div className='member-card-back-address'>
               
               <div className='member-card-back-address-title'>Address</div>
               <p className='member-card-back-address-details'>INTEGRAL HUMANISAM AMBEDKAR FEDERATION,No.139/3,Gandhi Nagar,Nedugunram,Chenglepet-600048</p>
               </div>
               

             </div>
   
           </div>
           <div className='member-card-back-div-img' >
           <img className='member-card-back-img' src={surya} alt='surya'></img>
           </div> */}
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