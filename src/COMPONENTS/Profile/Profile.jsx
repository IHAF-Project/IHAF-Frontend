import { East } from "@mui/icons-material";
import "./Profile.css";
import close from "../../Assets/+.png";
import { useState } from "react";
import MembershipCard from "./MembershipCard";
import LeadershipCard from "./LeadershipCard";
import html2canvas from "html2canvas"; 
import { useEffect } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link, useParams,useNavigate } from "react-router-dom";
import React,{Fragment} from "react";

function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [membershipCardOpen, setMembershipCardOpen] = useState(false);
  const [leadershipCardOpen, setLeadershipCardOpen] = useState(false);
  const { memberId } = useParams();
  const [memberDetails, setMemberDetails] = useState(null);
  const navigate =useNavigate()
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
     setOpen(true);
   };
 
  const handleClose = () => {
     setOpen(false);
   };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://ihaf-backend.vercel.app/get-member-profile/${memberId}`);
        if (response.ok) {
          const getData = await response.json();
          setMemberDetails(getData?.data);
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

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const memberShipClick = () => {
    setMembershipCardOpen(!membershipCardOpen);
  };
  const leadershipClick = () => {
    setLeadershipCardOpen(!leadershipCardOpen);
  };

  const paymentData = [
    { id: 1, method: 'Credit Card', transactionId: '12345', amount: 100 },
    { id: 2, method: 'PayPal', transactionId: '67890', amount: 50 },
    { id: 3, method: 'Credit Card', transactionId: '12345', amount: 100 },
    { id: 4, method: 'PayPal', transactionId: '67890', amount: 50 }, 
    { id: 5, method: 'PayPal', transactionId: '67890', amount: 50 },
  ];

  const exportToPNG = (elementSelector, fileName) => {
    const elementToCapture = document.querySelector(elementSelector);
  
    if (!elementToCapture) {
      console.error('Element not found for capture');
      return;
    }
  
    html2canvas(elementToCapture, { useCORS: true }).then((canvas) => {
      const url = canvas.toDataURL();
      const a = document.createElement('a');
      a.href = url;
      a.download = `${fileName}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };
  
  const LeaderhandleDownload = () => {
    exportToPNG('.leader-card', 'LeadershipCard');
  };

  const originalDate = memberDetails?.memberProfile?.createdAt ;
  const formatedate = new Date(originalDate);
  const getDate = formatedate.toLocaleDateString();
  console.log(originalDate, "originalDate");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Referral code copied to clipboard!');
      })
      .catch((err) => {
        console.error('Unable to copy to clipboard', err);
      });
  };


  const getId = JSON.parse(localStorage.getItem('userData'));
  const id = getId?._id || getId?.data?._id

  const [isAccountDeactivated, setIsAccountDeactivated] = useState(false);

  const deactivateUser = async () => {
    try {
      const response = await fetch(`https://ihaf-backend.vercel.app/deactivate-account/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ isDeleted: true }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setIsAccountDeactivated(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeactivateClick = () => {
    deactivateUser();
    localStorage.clear();
    navigate('/')
  };
  return (
    <>
      <div className="profile-contain">
        <div className="profile-contain-tp">
          <Link to='/' style={{ cursor: 'pointer' }}>
            <img src='https://cdn-icons-png.flaticon.com/512/4682/4682711.png' alt='back' width='35px' height='35px' style={{ rotate: '180deg', paddingInlineEnd: '2em' }} />
          </Link>
          <p>Profile</p>
        </div>
        {memberDetails && (
          <div className="profile-contain-bt">
            <div className="profile-bt-left">
              <img src={memberDetails?.memberProfile?.profileURL || 'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png'} alt='user-profile' />
            <div>
            {isAccountDeactivated ? (
            <p>User is deactivated.</p>
            ) : (
              <Fragment>
              <Button variant="outlined" onClick={handleClickOpen}>
               <h3 style={{color:'white',zIndex:'3' ,padding:'0',margin:'0'}}> Deactivate User</h3>
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>
                   Cancel
                  </Button>
                  <Button onClick={handleClose} autoFocus>
                  <div onClick={handleDeactivateClick}>Deactivate User</div>
                  </Button>
                </DialogActions>
              </Dialog>
            </Fragment>
               )}
            </div>
            </div>
            <div className="profile-bt-right">
              <div className="user-profile-details">
                <h3>{memberDetails?.memberProfile?.name}</h3>
                <h4>{memberDetails?.memberProfile?.district}</h4>
                <p>Date of joining : {getDate}</p>
                <span>Total number of referral: {memberDetails?.refferalCount > 0 ? memberDetails.refferalCount : 0}</span>
              </div>
              <div className="user-profile-cards">
                <div className="membership-card-1" style={{ cursor: 'pointer' }} onClick={memberShipClick}>
                  <p>Membership card</p>
                  <East sx={{ color: '#04419D' }} />
                  {membershipCardOpen && (
                    <div className="membership-card">
                      <div className="membership-card-container">
                        <div className="membership-card-tp">
                          <div className="membership-card-title">
                            <h1>Membership card</h1>
                            <img src={close} alt='Close' width='50px' height='50px' onClick={memberShipClick} />
                          </div>
                        </div>
                        <MembershipCard
                          name={memberDetails?.memberProfile?.name}
                          DateOfJoining={getDate}
                          MemberID={memberDetails?.memberProfile?.memberID}
                          Profile={memberDetails?.memberProfile?.profileURL || 'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png'}
                        />
                        <div className="member-card-button">
                          <p onClick={() => exportToPNG('.membar-card', 'MembershipCard')}>Download</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="leadership-card" style={{ cursor: 'pointer' }} onClick={leadershipClick}>
                  <p >Leadership card</p>
                  <East sx={{ color: '#04419D' }} />
                  {leadershipCardOpen && (
                    <div className="membership-card">
                      <div className="membership-card-container">
                        <div className="membership-card-tp">
                          <div className="membership-card-title">
                            <h1>Leadership card</h1>
                            <img src={close} alt='Close' width='50px' height='50px' onClick={leadershipClick} />
                          </div>
                        </div>
                        <LeadershipCard
                          name={memberDetails?.memberProfile?.name}
                          DateOfJoining={getDate}
                          MemberID={memberDetails?.memberProfile?.memberID}
                          Profile={memberDetails?.memberProfile?.profileURL || 'https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png'}
                          LeaderID={memberDetails?.memberProfile?.leaderID}
                          Location={memberDetails?.memberProfile?.postingLocation}
                          PostingName={memberDetails?.memberProfile?.postingName}
                        />
                        <div className="member-card-button">
                          <p onClick={LeaderhandleDownload}>Download</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="donation-history" style={{ cursor: 'pointer' }} onClick={handleClick}>
                  <p >Donation history</p>
                  <East sx={{ color: '#04419D' }} />
                  {isOpen && (
                    <div className="donion-history">
                      <div className="donion-history-popup">
                        <div className="donion-history-tp">
                          <div className="donion-history-title">
                            <h1>Donation History</h1>
                            <img src={close} alt='Close' onClick={handleClick} />
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
                  )}
                </div>
                <div className="ref-code">
                  <p className="referral">Your referral code</p>
                  <span className="ref-span"
        onClick={() => copyToClipboard(memberDetails?.memberProfile?.referralCode)}
      >
        {memberDetails?.memberProfile?.referralCode}
      </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
