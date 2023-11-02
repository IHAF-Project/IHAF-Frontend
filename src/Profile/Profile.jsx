import { East } from "@mui/icons-material"
import "./Profile.css"
import close from "../Assets/+.png"
import { useState } from "react"
import MembershipCard from "./MembershipCard";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LeadershipCard from "./LeadershipCard";


function Profile() {

  const [isOpen, setIsOpen] = useState(false)
  const [membershipCardOpen, setMembershipCardOpen]=useState(false)
  const [leadershipCardOpen, setLeadershipCardOpen]=useState(false)
  const { memberId } = useParams();
  const [memberDetails, setMemberDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://ihaf-backend.vercel.app/get-member-profile/${memberId}`);
        if (response.ok) {
          const getData = await response.json();
          setMemberDetails(getData.data);
          console.log(getData.data.memberProfile, "member profile");
        } else {
          console.error('Error fetching member profile');
        }
      } catch (error) {
        console.error('Error fetching member profile:', error);
      }
    };
    fetchData();
  }, [memberId]);

  const handleClick = () =>{
   setIsOpen(!isOpen)
  }

  const memberShipClick =()=>{
    setMembershipCardOpen(!membershipCardOpen)
  }
  const leadershipClick = ()=>{
    setLeadershipCardOpen(!leadershipCardOpen)
  }
  const paymentData = [
    { id: 1, method: 'Credit Card', transactionId: '12345', amount: 100 },
    { id: 2, method: 'PayPal', transactionId: '67890', amount: 50 },
    { id: 3, method: 'Bank Transfer', transactionId: '54321', amount: 75 },
    { id: 4, method: 'Credit Card', transactionId: '12345', amount: 100 },
    { id: 5, method: 'PayPal', transactionId: '67890', amount: 50 },
    { id: 6, method: 'Bank Transfer', transactionId: '54321', amount: 75 },
    { id: 7, method: 'Credit Card', transactionId: '12345', amount: 100 },
    { id: 8, method: 'PayPal', transactionId: '67890', amount: 50 },
    { id: 9, method: 'Bank Transfer', transactionId: '54321', amount: 75 },
    { id: 10, method: 'Credit Card', transactionId: '12345', amount: 100 },
    { id: 11, method: 'PayPal', transactionId: '67890', amount: 50 },
    { id: 12, method: 'Bank Transfer', transactionId: '54321', amount: 75 },
    { id: 13, method: 'Credit Card', transactionId: '12345', amount: 100 },
    { id: 14, method: 'PayPal', transactionId: '67890', amount: 50 },
    { id: 15, method: 'Bank Transfer', transactionId: '54321', amount: 75 }
     ];

     const handleDownload = () => {
      const cardContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              /* Inline styles */
              .membar-card{
                width: 30.5625rem;
                height:50vh;
                border-radius: 1.6875rem;
                background: #04419D;
                color:#ffffff;
                display: flex;
                flex-direction: column;
            }
              
            .member-card-top{
   
              height: 8.25rem;
              display: flex;
              padding-block: 0.5em;
             align-items: center;
             justify-content: center;
         }
         .member-card-border{
             border: 1px solid #FFF;
             display: flex;
             align-items: center;
             justify-content:space-around;
             width: 28.5625rem;
             height: 6.25rem;
         }
         .member-card-border img{
             width: 50px;
             height: 50px;
         }
         .member-card-top-details{
             display: flex;
             flex-direction: column;
             align-items: center;
            
         }
         :is(.member-card-top-details p ,.member-card-top-details span){
         color: #FFF;
         text-align: center;
         font-family: 'Poppins';
         font-size:1rem;
         font-style: normal;
         font-weight: 600;
         line-height: normal;
         text-transform: uppercase;
         }
         .member-card-top-details span{
         border: 1px solid #FFF;
         padding:0.5em 2em;
         }
         .member-card-bt{
             display: flex;
             padding-inline: 1em;
             align-items: center;
             justify-content: space-around;
             
         }
         :is(.member-card-bt p,.member-card-bt span){
             color: #FFF;
             font-family: Poppins;
             font-style: normal;
             font-weight: 400;
             line-height: normal;
         }
         .member-card-bt p{
             font-size: 1rem;
         }
         .member-card-bt span{
             font-size: 1.25rem;
         }
         .member-card-bt img{
             width: 115px;
             height: 115px;
             background: #D9D9D9;
         }
         .member-card-bt-details-name{
             display: flex;
             align-items: center;
             gap:0.5em;
         }
            </style>
          </head>
          <body>
            ${document.querySelector('.membar-card').outerHTML}
          </body>
        </html>
      `;
    
      const data = new Blob([cardContent], { type: 'text/html' });
      const url = URL.createObjectURL(data);
    
      const a = document.createElement('a');
      a.href = url;
      a.download = 'MembershipCard.html';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
    
      // Clean up
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    };
const originalDate =memberDetails?.memberProfile?.createdAt
const formatedate =new Date(originalDate)
const getDate =formatedate.toLocaleDateString()
console.log(originalDate,"originalDate");

const refferal=localStorage.setItem('refferalCode',memberDetails?.memberProfile?.referralCode)

  return (
    <>
    <div className="profile-contain">
     <div className="profile-contain-tp">
     <p>Profile</p>
     </div>
    {memberDetails  && (
 <div className="profile-contain-bt">
 <div className="profile-bt-left">
  <img src={memberDetails?.memberProfile?.profileURL || 'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png'} alt='user-profile' />
 </div>
 <div className="profile-bt-right">
 <div className="user-profile-details">
   <h3>{memberDetails?.memberProfile?.name}</h3>
   <h4>{memberDetails?.memberProfile?.district}</h4>
   <p>Date of joining : {getDate}</p>
   <span>Total number of referral: {memberDetails?.refferalCount > 0 ? memberDetails.refferalCount : 0}</span>
 </div>
 <div className="user-profile-cards">
 <div className="membership-card-1">
  <p onClick={memberShipClick}>Membership card</p>
  <East sx={{color:'#04419D'}}/>
  {membershipCardOpen && 
  <div className="membership-card">
   <div className="membership-card-container">
   <div className="membership-card-tp">
  <div className="membership-card-title">
   <h1>Membership card</h1>
   <img src={close} alt='Close' width='50px' height='50px' onClick={memberShipClick}/>
  </div>
   </div>

<MembershipCard
name={memberDetails?.memberProfile?.name}
DateOfJoining ={getDate}
MemberID={memberDetails?.memberProfile?.memberID}
Profile={memberDetails?.memberProfile?.profileURL || 'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png'}
/>
   <div className="member-card-button">
   <p onClick={handleDownload}>Download</p>
   </div>
   </div>
  </div>
  }
 </div>
 <div className="leadership-card">
 <p onClick={leadershipClick}>Leadership card</p>
 <East sx={{color:'#04419D'}}/>
 {leadershipCardOpen && 
  <div className="membership-card">
   <div className="membership-card-container">
   <div className="membership-card-tp">
  <div className="membership-card-title">
   <h1>Membership card</h1>
   <img src={close} alt='Close' width='50px' height='50px' onClick={leadershipClick}/>
  </div>
   </div>

<LeadershipCard
name={memberDetails?.memberProfile?.name}
DateOfJoining ={getDate}
MemberID={memberDetails?.memberProfile?.memberID}
Profile={memberDetails?.memberProfile?.profileURL || 'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png'}
/>
   <div className="member-card-button">
   <p onClick={handleDownload}>Download</p>
   </div>
   </div>
  </div>
  }
 </div>
 <div className="donation-history">
 <p onClick={handleClick}>Donation history</p>
 <East sx={{color:'#04419D'}}/>
   {isOpen &&
     <div className="donion-history">
  <div className="donion-history-popup">
   <div className="donion-history-tp">
  <div className="donion-history-title">
  <h1>Donation History</h1>
   <img src={close} alt='Close' onClick={handleClick}/>
  </div>
   </div>
   <div className="donation-history-table">
  <table>
 <thead>
   <tr>
     <th>S.No</th>
     <th>Method of Payment</th>
     <th>Transaction ID</th>
     <th>Amount</th>
   </tr>
 </thead>
 <tbody className="tbody">
   {paymentData.map((payment, index) => (
     <tr key={payment.id}>
       <td className="serial-Num">{index + 1}</td>
       <td className="serial-Id-1">{payment.method}</td>
       <td className="serial-Id-2">{payment.transactionId}</td>
       <td className="serial-Num">{payment.amount}</td>
     </tr>
   ))}
 </tbody>
  </table>
   </div>
  </div>
    </div>
 }
 </div>
 <div className="ref-code">
 <p>Your referral code</p>
 <span>{memberDetails?.memberProfile?.referralCode}</span>
 </div>
 </div>
 </div>
</div>
     )}
    
    </div>
    </>
  )
}

export default Profile



