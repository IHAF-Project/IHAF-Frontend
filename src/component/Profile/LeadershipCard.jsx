import { Fragment } from 'react';
import logo from '../../images/logo.png'
import { PropTypes } from 'prop-types';
import back from '../../images/MicrosoftTeams-image (25).png'
import { useTranslation } from 'react-i18next';
import signature from '../../images/MicrosoftTeams-image (27).png'

const DEFAULT_AVATAR = 'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png';

// CSS dot instead of a hot-linked image: the external image host blocks/hangs requests,
// which made the html2canvas download wait forever or drop the dots.
const Dot = () => <span className='inline-block w-[6px] h-[6px] rounded-full bg-black' />;

function LeadershipCard({ name,LeaderID,DateOfJoining,Profile,Location,PostingName,constituency}) {
  const { t } = useTranslation();

  // Label / value pairs rendered in a grid so every row grows with its content
  // (long names, positions or Tamil labels wrap instead of overlapping the next row).
  const details = [
    { label: t('JionMemberShip.3'), value: name },
    { label: t('JionMemberShip.23'), value: LeaderID },
    { label: t('JionMemberShip.19'), value: DateOfJoining },
    { label: t('JionMemberShip.22'), value: PostingName },
    { label: t('JionMemberShip.30'), value: constituency },
    { label: t('JionMemberShip.25'), value: Location },
  ];

  return (
   <div className='leader-card'>
   {/* card frontside */}
   <div
     className="min-h-[270px] w-[450px] ph:w-[400px] text-white flex flex-col items-stretch text-[12px]"
     style={{background: 'linear-gradient(74deg, rgba(39,39,39,1) 36%, rgba(49,49,49,1) 53%, rgba(80,79,79,1) 77%, rgba(116,113,113,1) 93%, rgba(131,129,129,1) 98%)'}}
   >
     <p className='text-xs pt-2 tracking-widest flex flex-wrap justify-center items-center gap-2'>
       {t('JionMemberShip.26')} <Dot />
       {t('JionMemberShip.28')} <Dot />
       {t('JionMemberShip.27')} <Dot />
       {t('JionMemberShip.29')}
     </p>

     {/* header: logo + federation name */}
     <div className="flex items-center w-full px-3 py-1 gap-2">
       <img className='h-[46px] w-[46px] object-contain shrink-0' src={logo} alt='logo' />
       <div className="flex-1 min-w-0 flex flex-col items-center text-center">
         <p className='text-[11px] leading-tight'>{t('pageOne.1')}</p>
         <span className='text-[10px] leading-tight mt-1'>{t('JionMemberShip.24')}</span>
       </div>
       {/* spacer same width as logo keeps the title centred */}
       <div className='w-[46px] shrink-0' />
     </div>

     {/* details box */}
     <div className="flex-1 flex items-stretch gap-3 border-2 rounded-lg mx-3 mb-3 mt-1 p-2 font-Poppins">
       {/* no object-fit here: html2canvas (download) ignores it, so keep the natural aspect ratio */}
       <div className='w-[80px] shrink-0 flex items-center justify-center'>
         <img
           className='w-auto h-auto max-w-[80px] max-h-[100px] rounded'
           src={Profile || DEFAULT_AVATAR}
           onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = DEFAULT_AVATAR; }}
           alt='profile'
         />
       </div>

       <div className="flex-1 min-w-0 flex flex-col justify-between gap-1">
         <div className="grid grid-cols-[auto_auto_minmax(0,1fr)] gap-x-2 gap-y-[2px] text-[11px] leading-snug">
           {details.map(({ label, value }) => (
             <Fragment key={label}>
               <span>{label}</span>
               <span>:</span>
               <span className='break-words'>{value}</span>
             </Fragment>
           ))}
         </div>

         {/* signature image is square with whitespace around it: crop it with overflow instead of object-fit */}
         <div className='self-end flex flex-col items-center leading-none'>
           <div className='w-[90px] h-[34px] overflow-hidden flex items-center justify-center'>
             <img className='w-[90px] h-[90px] max-w-none shrink-0' src={signature} alt='sign' />
           </div>
           <p className='text-black text-[11px]'>(President Sign)</p>
         </div>
       </div>
     </div>
   </div>

   {/* card backside */}
   {/* explicit box sizes (no object-fit) so the downloaded PNG matches the screen; mobile keeps the image's 1563x875 ratio */}
   <div className="w-[450px] h-[270px] ph:w-[400px] ph:h-[224px]">
     <img className='w-full h-full' src={back} alt='card'></img>
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