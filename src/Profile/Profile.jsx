import { East } from "@mui/icons-material"
import "./Profile.css"
import close from "../../assets/+.svg"
import { useState } from "react"
import { useNavigate, useParams } from 'react-router-dom';
import { CloudinaryContext } from 'cloudinary-react';
import MembershipCard from "./MembershipCard";

const BASE_URL = 'https://elearning-sand.vercel.app/';


function Profile() {

  const [isOpen, setIsOpen] = useState(false)
  const [imageOpen, setImageOpen] = useState(false)
  const [membershipCardOpen, setMembershipCardOpen]=useState(false)

  const { _id } = useParams();
  const [user, setUser] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    profileURL: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       // Fetch user data
  //       const checkToken = localStorage.getItem('token');

  //       if (checkToken) {
  //         const url = 'https://elearning-sand.vercel.app/dashboard-profile';
  //         const bearer = 'Bearer ' + checkToken;
  //         const emailFromLocal = localStorage.getItem('email');

  //         if (emailFromLocal) {
  //           const response = await fetch(url, {
  //             method: 'POST',
  //             body: JSON.stringify({ email: emailFromLocal }),
  //             headers: {
  //               'Content-Type': 'application/json',
  //               Authorization: bearer,
  //             },
  //           });

  //           if (response.ok) {
  //             const data = await response.json();
  //             setUser(data?.data);
  //             setFormData((prevFormData) => ({
  //               ...prevFormData,
  //               profileURL: data?.data.profileURL || '',
  //             }));
  //           } else {
  //             throw new Error('Failed to fetch user profile data');
  //           }
  //         }
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  const handleFormChange = (event) => {
    const { name, files } = event.target;

    if (name === 'profileURL') {
      // Update image preview
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          profileURL: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleProfileSubmit = async (event) => {
    event.preventDefault();

    try {
      // Update the user profile
      const checkToken = localStorage.getItem('token');

      if (checkToken) {
        setIsSubmitting(true);
        const url = BASE_URL + _id;
        const bearer = 'Bearer ' + checkToken;

        // Upload profile picture to Cloudinary
        if (formData.profileURL instanceof File) {
          const formDataCloudinary = new FormData();
          formDataCloudinary.append('file', formData.profileURL);
          formDataCloudinary.append('upload_preset', uploadPreset);

          const uploadResponse = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            {
              method: 'POST',
              body: formDataCloudinary,
            }
          );

          if (uploadResponse.ok) {
            const uploadData = await uploadResponse.json();
            const profileURL = uploadData.secure_url;

            setFormData((prevFormData) => ({
              ...prevFormData,
              profileURL,
            }));
          } else {
            throw new Error('Failed to upload profile picture to Cloudinary');
          }
        }

        const requestBody = {
          profileURL: formData.profileURL, // Only send the profileURL
        };

        const response = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(requestBody),
          headers: {
            'Content-Type': 'application/json',
            Authorization: bearer,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data?.data);
          alert('Profile updated successfully');
          navigate('/Profile');
        } else {
          throw new Error('Failed to update profile');
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageClick = () => {
    // Trigger file selection dialog when the image is clicked
    document.getElementById('profileImageInput').click();
  };
  // const handleImageDeletion = () => {
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     profileURL: '', // Clear the profileURL field to remove the image
  //   }));
  // };

  const uploadPreset = import.meta.env.UPLOAD_PRESET;
  const cloudName =import.meta.env.CLOUD_NAME;
  const handleClick = () =>{
   setIsOpen(!isOpen)
  }
  const imageClick = () =>{
    setImageOpen(!imageOpen)
  }

  const memberShipClick =()=>{
    setMembershipCardOpen(!membershipCardOpen)
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
    
  return (
    <div className="profile-contain">
     <div className="profile-contain-tp">
     <p>Profile</p>
     </div>
     <div className="profile-contain-bt">
      <div className="profile-bt-left">
       <img src='https://static01.nyt.com/images/2021/03/12/arts/12nft-buyer-1/12nft-notebook-1-videoSixteenByNineJumbo1600.jpg' alt='' />
       <span>
        <button onClick={imageClick}>Edit Photo</button>
        <East sx={{color:'white'}}/>
        </span>
        {imageOpen && 
         <div className="image-open">
         <div className="edit-image-container">
         <div className="edit-image-title">
         <h1>Change profile photo</h1>
         <img src={close} alt='Close' onClick={imageClick}/>
       </div>
       <div>
      {user && (
        <div className='edit-name-photo'>
          <div className="edit-name-photo-container">
          <CloudinaryContext cloudName={import.meta.env.CLOUD_NAME} className="edit-form">
            <img
              src={formData.profileURL || user.profileURL || 'https://th.bing.com/th/id/OIP.Qd1_7kwl044NuxF6ufoL0wHaHa?pid=ImgDet&rs=1'}
              alt="Profile"
              width="150"
              height="150"
              style={{ borderRadius: '50%', cursor: 'pointer' }}
              onClick={handleImageClick}
            />
          </CloudinaryContext>
          <div className='edit-name-photo-left'>
            <div className='profile-selected'>
              <input
                id="profileImageInput"
                type="file"
                name="profileURL"
                onChange={handleFormChange}
                style={{ display: 'none' }}
              />
            </div>
            <div className='select-delet'>
              <button onClick={handleImageClick} className='select-btn'> <p>Upload</p> <span>+</span></button>
              {/* <button onClick={handleImageDeletion} className='delete-btn'>Delete Image <DeleteIcon sx={{ color: '#622E27' }} /></button> */}
            </div>
          </div>
          </div>
        </div>
      )}
      <div className="edit-photo-submit">
        <form onSubmit={handleProfileSubmit}>
          <button type="submit" disabled={isSubmitting}  style={{cursor:'pointer'}}>
            {isSubmitting ? 'Saving...' : 'Save changes'}
          </button>
        </form>
      </div>
    </div>
         </div>
          </div>
        }
      </div>
      <div className="profile-bt-right">
      <div className="user-profile-details">
        <h3>Jevanantham</h3>
        <h4>ananth.789@gmail.com</h4>
        <p>Date of joining : 29/08/1998</p>
        <span>Total number of referral : 8</span>
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
        <img src={close} alt='Close' onClick={memberShipClick}/>
       </div>
        </div>

<MembershipCard
name='Jevanantham'
DateOfJoining ='09/08/2023'
MemberID='IHAF001'
/>
        <div className="member-card-button">
        <p onClick={handleDownload}>Download</p>
        </div>
        </div>
       </div>
       }
      </div>
      <div className="leadership-card">
      <p>Leadership card</p>
      <East sx={{color:'#04419D'}}/>
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
      <span>SRT12345</span>
      </div>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Profile



