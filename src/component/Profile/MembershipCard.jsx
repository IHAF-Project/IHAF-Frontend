import {useRef } from 'react';
import logo from '../../images/logo.png'
import { PropTypes } from 'prop-types';
import surya from '../../images/bg-modi 1 (2).png'
import { useTranslation } from 'react-i18next';
import back from '../../images/back.png'




function MembershipCard({ name,MemberID,DateOfJoining,Profile,Bloodgroup}) {
  const { t, i18n } = useTranslation();

  const cardRef = useRef(null);

  return (

   <div className='card-section-main'>
    {/* card frontside */}
    <div className="h-[188px] w-[340px] text-white flex flex-col justify-evenly items-center " style={{background: 'radial-gradient(circle, rgb(110 150 179) 0%, rgb(63 76 136) 82%) '}} ref={cardRef}>
    <div className="mb-1 flex items-center w-full h-2/6 text-[12px] justify-evenly">
     
      <div className='h-full w-[20%] flex justify-center items-center p-2'>
      <img className=' object-cover' src={logo} alt='logo' />
      </div>
      
      <div className=" w-[80%] text-[12px] text-white flex flex-col items-center justify-evenly">
        <p className='text-white text-[12px] items-center text-center my-2'>{t('pageOne.1')}</p>
        <span className=' text-[10px]'>{t('JionMemberShip.20')}</span>
      </div>
      
      </div>
     <div className="flex items-center justify-around p-3 gap-3 border-2 rounded-lg m-2 text-[12px] font-Poppins ">
     <div className='w-[20%] h-[90%] flex items-center justify-center'>
     <img className=' object-cover' src={Profile || 'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png'} alt='logo' />       
     </div>
     <div className="w-[80%] h-[100%]">
      <div className=" w-[97%] h-6 flex flex-row gap-2 font-Poppins">
       <p>{t('JionMemberShip.3')} </p>
       <>:</>
       <span>{name}</span>
      </div>
      <div className="w-[97%] h-5 flex flex-row gap-2 font-Poppins"> <p>{t('hello.5')} </p>
      <>:</>
      <span>{MemberID}</span>
      </div>
      <div className="w-[97%] h-5 flex flex-row gap-2 font-Poppins"> <p>{t('JionMemberShip.19')} </p>
      <>:</>
      <span>{DateOfJoining}</span>
      </div>
      <div className="w-[97%] h-5 flex flex-row gap-2 font-Poppins"> <p>{t('JionMemberShip.9')} </p>
      <>:</>
      <span>{Bloodgroup}</span>
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
MembershipCard.propTypes = {
  name: PropTypes.node,
  MemberID: PropTypes.node,
  DateOfJoining: PropTypes.node,
};

export default MembershipCard