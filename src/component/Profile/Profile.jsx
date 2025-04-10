import { East } from "@mui/icons-material";
import "./Profile.css";
import close from "../../Assets/+.png";
import { useState } from "react";
import MembershipCard from "./MembershipCard";
import LeadershipCard from "./LeadershipCard";
import html2canvas from "html2canvas";
import { useEffect } from "react";
 
// import { Background } from "@cloudinary/url-gen/qualifiers";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link, useParams,useNavigate } from "react-router-dom";
import React,{Fragment} from "react";
//mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

 
function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [membershipCardOpen, setMembershipCardOpen] = useState(false);
  const [leadershipCardOpen, setLeadershipCardOpen] = useState(false);
  const { memberId } = useParams();
  const [memberDetails, setMemberDetails] = useState(null);
  const navigate =useNavigate()
  const [open, setOpen] = useState(false);
  const storedData = JSON.parse(localStorage.getItem('userData'));
 const _id = storedData?.data?._id || storedData?._id
 const refferal = storedData?.data?.referralCode || storedData?.referralCode
 const [copyMessage, setCopyMessage] = useState("");
 const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedReferralCode, setSelectedReferralCode] = useState('');
  const [popupUserData, setPopupUserData] = useState([]);
 
  const handleClickOpen = () => {
     setOpen(true);
   };
   const logoutUser = () =>{
   
    localStorage.clear();
    window.location.href ="/";
  }
 
  const handleClose = () => {
     setOpen(false);
   };
 
  useEffect(() => {
    if(!(_id)){
      logoutUser()
    }
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
  const openPopup = (referralCode) => {
    setSelectedReferralCode(referralCode);
    setPopupOpen(true);
 
    // Fetch user data using the referral code and set it in the state
    fetchUserData(referralCode);
  };
 
 
  const memberShipClick = () => {
    setMembershipCardOpen(!membershipCardOpen);
  };
  const leadershipClick = () => {
    setLeadershipCardOpen(!leadershipCardOpen);
  };
 

 
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
    const textArea = document.createElement("textarea");
    textArea.value = refferal;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    setCopyMessage("Copied");
    setTimeout(() => {
      setCopyMessage("");
    }, 2000);
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
        localStorage.clear();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUserData = (referralCode) => {
    fetch(`https://ihaf-backend.vercel.app/get-referral-details/${referralCode}`)
      .then((response) => response.json())
      .then((data) => {
        setPopupUserData(data?.data);
       
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setPopupUserData([]);
       
      });
  };
  const closePopup = () => {
    setPopupOpen(false);
    setSelectedReferralCode('');
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
              <button  onClick={handleClickOpen} style={{backgroundColor:'red',cursor:'pointer',border:'none',borderRadius:'4px',paddingBlock:'4px',paddingInline:'8px'}}>
               <h3 style={{color:'white',padding:'0',margin:'0',fontFamily:'Poppins',fontWeight:'500'}}> Deactivate User</h3>
              </button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Attention !"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                   <p style={{color:'red'}}> Deactivating this account will erase all datas related to this account permanently!</p>
                    <p >Are you sure want to deactivate this account ?</p>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <div onClick={handleClose} style={{backgroundColor:'green',cursor:'pointer',color:'white',borderRadius:'4px',paddingBlock:'6px',paddingInline:'1em',fontWeight:'500'}}>
                   Cancel
                  </div>
                  <Button onClick={handleClose} autoFocus>
                  <div onClick={handleDeactivateClick} style={{backgroundColor:'red',color:'white',borderRadius:'4px',paddingBlock:'4px',paddingInline:'8px',fontWeight:'600'}}>Deactivate User</div>
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
                <span>Total number of referral: {memberDetails?.referralCount > 0 ? memberDetails.referralCount : 0}</span>
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
                          Bloodgroup={memberDetails?.memberProfile?.bloodGroup}
                          district={memberDetails?.memberProfile?.district}
                          constituency={memberDetails?.memberProfile?.constituency || ''}
                        />
                        <div className="member-card-button">
                          <p onClick={() => exportToPNG('.card-section-main', 'MembershipCard')}>Download</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {memberDetails?.memberProfile?.leaderID?
                <div className="leadership-card" style={{ cursor: 'pointer' }}>
                  <p onClick={leadershipClick}>Leadership card</p>
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
                          constituency={memberDetails?.memberProfile?.constituency || ''}
                        />
                        <div className="member-card-button">
                          <p onClick={LeaderhandleDownload}>Download</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>:<div className="leadership-card" style={{Background:'grey'}}> <p >No leadership</p></div>}
                <button className='view' onClick={() => openPopup(memberDetails?.memberProfile?.referralCode)}>Refferal history</button>
 
                <div className="ref-code">
                  <p className="referral">Your referral code</p>
 
                  <span className="ref-span"
        onClick={() => copyToClipboard()}
      >
        {memberDetails?.memberProfile?.referralCode}
      </span>
      <div className="copy" style={{backgroundColor:'#04419d',color:'white' ,margin:'0.5rem',fontSize:'16px',padding:'10px'}}>{copyMessage}</div>
                </div>
              </div>
            </div>
          </div>
        )}
        {isPopupOpen && (
        <div className="popup-profile">
          <div className="popup-profile-refferal">
            <div className="pop-profile-close">
            <h2>Refferal History</h2>
            <div className="close1" onClick={closePopup}><img src={close} alt="X"></img></div>
           
            </div>
            {popupUserData.length > 0 ? (
             
              <TableContainer sx={{ width:"90%"}} component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead sx={{ background:"#cfe1fc" }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">MemberID</TableCell>
            <TableCell align="right">Refferal code</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {popupUserData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.memberID}</TableCell>
              <TableCell align="right">{row.referralCode}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            ) : (
              <p>You reffered no one !</p>
            )}
          </div>
        </div>
      )}
      </div>
    </>
  );
}
 
export default Profile;