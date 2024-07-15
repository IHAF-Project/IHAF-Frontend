import React, { Fragment, useState } from "react";
import Ambeth from "../../Assets/MicrosoftTeams-image (19).png";
import Navbar from "../NavBar/Navbar";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";
import Check from "../../Assets/Check (2).svg";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./JoinMember.css";
import useScrollToTop from "../Hooks/useScrollToTop";
// import { color } from "@cloudinary/url-gen/qualifiers/background";
import profile from "../../Assets/profile.jpg";
import aadhar from "../../Assets/aadhar card.JPG";
import { useEffect } from "react";

function JionMember() {
  const { _id } = useParams();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const tamilLanguage = i18n.language === "ta";
  const storedData = JSON.parse(localStorage.getItem("userData"));
  const localmid = storedData?.data?.memberID || storedData?.memberID;
  const localuid = storedData?.data?._id || storedData?._id;

  const [showload, setshowload] = useState(false);
  const [showload1, setshowload1] = useState(false);
  const navigate = useNavigate();
  const [aadharFile, setAadharFile] = useState(null);
  const [popsuccess, setpopsuccess] = useState(false);
  const [popdata, setpopdata] = useState("");
  const [previewdone, setpreviewdone] = useState(false);
  const [profileFile, setProfileFile] = useState(null);
  const [formData, setformData] = useState({
    name: "",
    aadharCard: "",
    referredBy: "",
    gender: "",
    education: "",
    dateOfBirth: "",
    bloodGroup: "",
    religion: "",
    address: "",
    state: "Tamil Nadu",
    constituency: "",
    district: "",
    aadharCardURL: null,
    profileURL: null,
  });

  const rows = [
    { id: 1, firstName: "Name", data: formData.name },
    { id: 2, firstName: "Gender", data: formData.gender },
    { id: 3, firstName: "Refferal code", data: formData.referredBy || "" },
    { id: 4, firstName: "Adhare Number", data: formData.aadharCard },
    { id: 5, firstName: "Education", data: formData.education },
    { id: 6, firstName: "Date of Birth", data: formData.dateOfBirth },
    { id: 7, firstName: "Blood Group", data: formData.bloodGroup },
    { id: 8, firstName: "Religion", data: formData.religion },
    { id: 9, firstName: "Address", data: formData.address },
    { id: 10, firstName: "State", data: formData.state },
    { id: 11, firstName: "Constituency", data: formData.constituency },
  ];
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "Feilds",
      width: 150,
      editable: true,
    },

    {
      field: "data",
      headerName: "User data",
      type: "number",
      width: 400,
      editable: true,
    },
  ];

  const tamilNaduDistricts = [
    "Ariyalur",
    "Chengalpattu",
    "Chennai",
    "Coimbatore",
    "Cuddalore",
    "Dharmapuri",
    "Dindigul",
    "Erode",
    "Kallakurichi",
    "Kanchipuram",
    "Kanyakumari",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Nagapattinam",
    "Namakkal",
    "Nilgiris",
    "Perambalur",
    "Pudukkottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivaganga",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thoothukudi",
    "Tiruchirappalli",
    "Tirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvallur",
    "Tiruvannamalai",
    "Tiruvarur",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
  ];

  const tamilNaduDistrictsInTamil = [
    "அரியலூர்",
    "செங்கல்பட்டு",
    "சென்னை",
    "கோயம்புத்தூர்",
    "கடலூர்",
    "தருமபுரி",
    "திண்டுக்கல்",
    "ஈரோடு",
    "கள்ளக்குறிச்சி",
    "காஞ்சிபுரம்",
    "கன்னியாகுமரி",
    "கரூர்",
    "கிருஷ்ணகிரி",
    "மதுரை",
    "நாகபட்டினம்",
    "நாமக்கல்",
    "நீலகிரி",
    "பெரம்பலூர்",
    "புதுக்கோட்டை",
    "ராமநாதபுரம்",
    "ராணிப்பேடு",
    "சேலம்",
    "சிவகங்கை",
    "தென்காசி",
    "தஞ்சாவூர்",
    "தேனி",
    "தூத்துக்குடி",
    "திருச்சிராப்பள்ளி",
    "திருநெல்வேலி",
    "திருபத்தூர்",
    "திருபூர்",
    "திருவள்ளூர்",
    "திருவண்ணாமலை",
    "திருவாரூர்",
    "வேலூர்",
    "விழுப்புரம்",
    "விருதுநகர்",
  ];

  const TamilNadulist = [
    "Gummidi",
    "Ponneri",
    "Tiruttani",
    "Thiruvallur",
    "Poonamallee",
    "Avadi",
    "Maduravoyal",
    "Ambattur",
    "Madavaram",
    "Thiruvottiyur",
    "Ramakrishnan Ngar",
    "Perambur",
    "Kolathur",
    "Villivakkam",
    "Thiru-Vi-Ka-Nagar",
    "Egmore",
    "Royapuram",
    "Harbour",
    "Chepauk-Thiruvalikeni",
    "Thousand Lights",
    "Anna Nagar",
    "Virugampakkam",
    "saidapet",
    "Thiyagarayangar",
    "Mylapore",
    "Velachery",
    "Shozhinganallur",
    "Alandur",
    "Sriperumbudur",
    "pallavram",
    "Thambaram",
    "Chengalpattu",
    "Thiruporur",
    "cheyyur",
    "Madurantakam",
    "Kancheepuram",
    "Arakkonam",
    "Sholinghur",
    "Katpadi",
    "Ranipet",
    "Arcot",
    "Vellore",
    "Anaikattu",
    "Kilvaithinankuppam",
    "Gudiyattam",
    "Vaniyambadi",
    "Ambur",
    "Jolarpet",
    "Tirupattur",
    "Uthangarai",
    "Bargur",
    "Krishnagiri",
    "Veppanahalli",
    "Hosur",
    "Thalli",
    "Palacode",
    "Pennagaram",
    "Dharmapuri",
    "Pappireddipatti",
    "Harur",
    "Chengam",
    "tiruvannamalai",
    "Kilpennathur",
    "Kalasapakkam",
    "Polur",
    "Arani",
    "Cheyyar",
    "Vandavasi",
    "Gingee",
    "Mailam",
    "Tindivanam",
    "Vanur",
    "Villupuram",
    "Vikravandi",
    "Tirukkoyilur",
    "Ulundurpettai",
    "Rishivandiyam",
    "Sankarapuram",
    "Kallakurichi",
    "Gangavalli",
    "Attur",
    "Yercaud",
    "Omalur",
    "Mettur",
    "Edappadi",
    "Sankari",
    "Salem(West)",
    "Salem(North)",
    "Salem(South)",
    "Veerapandi",
    "Rasipuram",
    "Senthamagalam",
    "Namakkal",
    "Paramathi-Vellur",
    "Tiruchengodu",
    "Kumarapalayam",
    "Erode(East)",
    "Erode(West)",
    "Modakkurichi",
    "Dharapuram",
    "Kangayam",
    "Perundurai",
    "Bhavani",
    "Anthiyur",
    "GobiChettipalayam",
    "Bhavanisagar",
    "Udhagamandalam",
    "Gudalur",
    "Mettuppalayam",
    "Avanashi",
    "Tiruppur(North)",
    "Tiruppur(South)",
    "Palladam",
    "Sulur",
    "Kavundampalayam",
    "Coimbatore(North)",
    "Thondamuthur",
    "Coimbatore(South)",
    "Singanallur",
    "Kinathukadavu",
    "Pollachi",
    "Valaparai",
    "Udumalaipettai",
    "Madathukulam",
    "Palani",
    "Oddanchatram",
    "Athoor",
    "Nilakottai",
    "Natham",
    "Dindigul",
    "Vedasandur",
    "Aravakurichi",
    "Karur",
    "Krishnarayapuram",
    "Kulithalai",
    "Manappari",
    "Srirangam",
    "Tiruchirappali(West)",
    "Tiruchirappali(East)",
    "Thiruverumbur",
    "Lalgudi",
    "Manachanallur",
    "Musiri",
    "Thuraiyur",
    "Perambalur",
    "Kunnam",
    "Ariyalur",
    "Jayankondam",
    "Tittakudi",
    "Vriddachalam",
    "Neyveli",
    "Panruti",
    "Cuddalore",
    "Kurinjipadi",
    "Bhuvanagiri",
    "Chidambaram",
    "Kattumannarkoil",
    "Sirkazhi",
    "Mayiladuthurai",
    "Poompuhar",
    "Nagapattinam",
    "Kilvelur",
    "Vedaranyam",
    "Mannargudi",
    "Thiruvarur",
    "Nannilam",
    "Thiruvidaimarudur",
    "Kumbakonam",
    "Papanasam",
    "Thiruvaiyaru",
    "Thanjavur",
    "Orathanadu",
    "Pattukottai",
    "Peravurani",
    "Gandarvakkottai",
    "Viralimalai",
    "Pudukkoati",
    "Thirumayam",
    "Alangudi",
    "Aranthangi",
    "Karaikudi",
    "Tiruppattur",
    "Sivaganga",
    "Manamadurai",
    "Melur",
    "Madurai East",
    "Sholavandan",
    "Madurai North",
    "Madurai South",
    "Madurai Central",
    "Madurai West",
    "Thiruparankundram",
    "Thirumangalam",
    "Usilampatti",
    "Andipatti",
    "Periyakulam",
    "Bodinayakanur",
    "Cumbum",
    "Rajapalayam",
    "Srivilliputhur",
    "Sattur",
    "Sivalkasi",
    "Virudhunagar",
    "Aruppukkottai",
    "Tiruchuli",
    "Paramakudi",
    "Tiruvadanai",
    "Ramanathapuram",
    "Mudthukulathur",
    "Vilathikulam",
    "Thoothukkudi",
    "Tiruchendur",
    "Srivaikuntam",
    "Ottapidaram",
    "Kovilpatti",
    "SankaranKovil",
    "Vasudevanallur",
    "Kadayanallur",
    "Tenkasi",
    "Alangulam",
    "Ambasamurdram",
    "Palayamkottai",
    "Nanguneri",
    "Radhapuram",
    "Kanniyakumari",
    "Nagercoil",
    "Colachal",
    "Padmanabhapuram",
    "Vilavancode",
    "Killiyoor",
  ];

  const puducheryList = [
    "Mannadipet",
    "Thirubhuvanai (SC)",
    "Ossudu (SC)",
    "Mangalam",
    "Villianur",
    "Ozhukarai",
    "Kadirgamam",
    "Indira Nagar",
    "Thattanchavady",
    "Kamaraj Nagar",
    "Lawspet",
    "Kalapet",
    "Muthialpet",
    "Raj Bhavan",
    "Oupalam",
    "Orleampeth",
    "Nellithope",
    "Mudaliarpet",
    "Ariankuppam",
    "Manavely",
    "Embalam (SC)",
    "Nettapakkam (SC)",
    "Bahour",
  ];

  const puducherrydistricts = ["Puducherry", " Karaikal", "Mahe", "Yanam"];
  const genderE = ["Male", "Female", "Other"];
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const educationE = ["10th", "12th", "UG", "PG", "Other"];
  const religionsE = [
    "Hinduism",
    "Christianity",
    "Islam",
    "Buddhism",
    "Judaism",
    "Sikhism",
    "Other",
  ];
  const gendersInTamil = ["ஆண்", "பெண்", "மற்றவை"];

  const educationInTamil = ["10ஆம்", "12ஆம்", "மற்றவை"];
  const religionsInTamil = [
    "இந்துதமம்",
    "கிறிஸ்தவம்",
    "இஸ்லாம்",
    "பௌத்தமம்",
    "யூதாயம்",
    "சீக்கியம்",
    "மற்றவை",
  ];
  const [Districts, setDistricts] = useState(tamilNaduDistricts);
  // const [states, setstates] = useState(indianStates);
  const [gender, setgender] = useState(genderE);

  const [religions, setreligions] = useState(religionsE);
  const [education, seteducation] = useState(educationE);
  const [ setapplied] = useState("");
  const [appliedpop, setappliedpop] = useState(false);
  const [appliedpop1, setappliedpop1] = useState(false);
  const [dataPreview, setDataPreview] = useState(false);


  const [isInputValid, setIsInputValid] = useState(true);
  let member;

  const [selectedState, setSelectedState] = useState("");

  const handleStateChange = (e) => {
    const { value } = e.target;
    setSelectedState(value);
    handleFormChange(e);
  };

  useEffect(() => {
    if (localmid) {
      // setappliedpop1(true)
    }
    const check = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(
          "https://ihaf-backend.vercel.app/get-all-new-members"
        );
        const result = await response.json();
        const data = result.data;

        // Use setApplied to update the state
        setapplied(result.data.message);
        for (let i = 0; i < data.length; i++) {
          const object = data[i];

          if (object._id === localuid) {
            member = object;
            // Check if the name property is a non-empty string
            const hasNonEmptyName =
              typeof member.name === "string" && member.name.trim() !== "";
            if (hasNonEmptyName === true) {
              setappliedpop(true);
            }
          }

          // console.log(`Object ${i + 1}:`, object);
          // Perform additional actions with each object
        }
      } catch (error) {
        console.error("Error updating member:", error);
      }
    };

    check();

    if (tamilLanguage) {
      setDistricts(tamilNaduDistrictsInTamil);
      // setstates(indianStatesInTamil);
      setgender(gendersInTamil);
      setreligions(religionsInTamil);
      seteducation(educationInTamil);
    } else {
      setDistricts(tamilNaduDistricts);
      // setstates(indianStates);
      setgender(genderE);
      setreligions(religionsE);
      seteducation(educationE);
    }
  }, []);
  const handlepreviewback = () => {
    setDataPreview(false);
  };
  const handlefinalsubmit = async () => {
    await setpreviewdone(true);
    updateFormDataf();
  };
  const handleFormChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    let isValid = true;
    console.log(e);
    if (name === "state") {
      // Ensure that the value being set is "Tamil Nadu"
      if (value === "Tamil Nadu") {
        setformData({
          ...formData,
          [name]: value,
        });
      }
    }

    if (name === "aadharCard") {
      // Remove any non-numeric characters
      const numericValue = value.replace(/\D/g, "");

      // Limit the value to 12 characters
      const trimmedValue = numericValue.slice(0, 12);

      // Add a space after every four digits
      const formattedValue = trimmedValue.replace(/(\d{4})(?=\d)/g, "$1 ");

      // Update the input value
      value = formattedValue;

      isValid = /^\d{12}$/.test(numericValue);
    }
    if (name === "state") {
      setformData({
        ...formData,
        [name]: value,
      });
    }

    if (name === "DateOfBirth") {
      setformData({
        ...formData,
        [name]: value,
      });
    } else {
      setIsInputValid(isValid);
      setformData({
        ...formData,
        [name]: value,
      });
    }
    console.log("formdata", formData);
  };

  const updateFormData = async () => {
    let isValidAdharNumber;
    const isValid = Object.entries(formData).every(([key, value]) => {
      if (key === "referredBy") {
        return true;
      }
      if (key === "aadharCard") {
        // Additional validation for adharnumber
        const removespaceadhar = (formData.aadharCard =
          formData.aadharCard.replace(/\s/g, ""));
        isValidAdharNumber = /^\d{12}$/.test(removespaceadhar);
        console.log(formData.aadharCard);
        console.log(isValidAdharNumber);
      }

      return value !== "" && value !== null && isInputValid === true;
    });

    if (!isValid && !isValidAdharNumber) {
      toast.error(
        "All fields except Referred By are required. Please fill in all the required fields and ensure Adhar Number is 12 digits.",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      return;
    }

    if (!isValid) {
      toast.error(
        "All fields except Referred By are required. Please fill in all the required fields.",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
      return;
    }

    if (!isValidAdharNumber) {
      toast.error("Please ensure Adhar Number is 12 digits.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    setDataPreview(true);
  };
  const updateFormDataf = async () => {
    setDataPreview(false);

    try {
      const response = await fetch(
        `https://ihaf-backend.vercel.app/update-joinus-member/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setformData(data);
        setpopsuccess(true);

        setTimeout(() => {
          navigate("/");
        }, 5000);
      } else {
        // Show error notification if data update fails
        if (localmid) {
          toast.error(
            `Failed to update data.Your are already a member and your memberID is ${localmid}.`,
            {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 2000,
            }
          );
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          const data1 = await response.json();
          console.log("hiiiii", data1.error);
          toast.error(`${data1.error}`, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        }
        console.error("Failed to update data");
      }
    } catch (error) {
      // Show error notification if an error occurs during update
      toast.error("Error updating data. Please try again later.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.error("Error updating data:", error);
    }
  };

  const handleFormSumbit = async (e) => {
    e.preventDefault();
    await updateFormData(e);

    console.log(formData, "updated data");
  };

  const handleYesClick = async () => {
    if (appliedpop || appliedpop1) {
      setappliedpop(false);
      setappliedpop1(false);
      navigate("/");
    }
    if (popdata === "successfully") {
      setpopsuccess(false);
    } else {
      setpopsuccess(false);
    }
  };

  const handleAadharFileSelect = async (e) => {
    setshowload1(true);
    const selectedFile = e.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "ivs6otkx");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/ddanljbwx/auto/upload",
        formData
      );
      const secureUrl = response.data.secure_url;

      setAadharFile(secureUrl);
      setformData((prevData) => ({
        ...prevData,
        aadharCardURL: secureUrl,
      }));
      setshowload1(false);
    } catch (error) {
      console.log("Error uploading Aadhar file:", error);
    }
  };

  const handleProfileFileSelect = async (e) => {
    setshowload(true);
    const selectedFile = e.target.files[0];
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "ivs6otkx");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/ddanljbwx/auto/upload",
        formData
      );
      const secureUrl = response.data.secure_url;

      setProfileFile(secureUrl);
      setformData((prevData) => ({
        ...prevData,
        profileURL: secureUrl,
      }));
      setshowload(false);
    } catch (error) {
      console.log("Error uploading profile file:", error);
    }
  };

  const handleKeyDown = async (e) => {
    // Prevent the default form submission
    if (e.key === "Enter") {
      e.preventDefault();
      await handleFormSumbit(e);
    }
  };

  const handleDelete = (fileType) => {
    if (fileType === "aadhar") {
      setAadharFile(null);
      setformData({
        ...formData,
        aadharCardURL: null,
      });
    } else if (fileType === "profile") {
      setProfileFile(null);
      setformData({
        ...formData,
        profileURL: null,
      });
    }
  };

  useScrollToTop();
  return (
    <div className="JionMembership-contain">
      <Fragment>
        <Navbar />
      </Fragment>
      <div className="JionFrom-contain">
        <div
          className={`${
            tamilLanguage ? "JionFrom-title-tamil" : "JionFrom-title-english"
          }`}
        >
          <h1>
            {currentLanguage === "ta"
              ? t("JionMemberShip.1")
              : t("JOIN MEMBERSHIP")}
          </h1>
          <p>
            "
            {currentLanguage === "ta"
              ? t("JionMemberShip.2")
              : t(
                  `Empower yourself with the Ambedkar Party membership and together, we'll shape a brighter, more inclusive future.`
                )}
            "
          </p>
        </div>
        <div className="JionFrom-content">
          <div className="JionFrom-content-left">
            <img src={Ambeth} alt="Ambethkar" className="jionMember-coverImg" />
          </div>
          <div className="JionFrom-content-right">
            <form onSubmit={handleFormSumbit}>
              {/* name */}
              <div className="JionFrom-content-inputs">
                <div className="jion-cont">
                  <label>
                    {currentLanguage === "ta"
                      ? t("JionMemberShip.3")
                      : t("Name")}
                    <span style={{ color: "red", paddingLeft: "0" }}>*</span>
                  </label>

                  <p>
                    {" "}
                    <Fragment>:</Fragment>
                  </p>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                />{" "}
                <br />
              </div>
              {/* aadhar */}

              <div className="JionFrom-content-inputs">
                <div className="jion-cont">
                  <label>
                    {" "}
                    {currentLanguage === "ta"
                      ? t("Aadhaar.1")
                      : t("Aadhaar Number")}
                    <span style={{ color: "red", paddingLeft: "0" }}>*</span>{" "}
                  </label>
                  <p>
                    {" "}
                    <Fragment>:</Fragment>
                  </p>
                </div>
                <input
                  placeholder="0000 0000 0000"
                  maxLength="14"
                  type="text"
                  id="AadhaarNumber"
                  name="aadharCard"
                  value={formData.aadharCard}
                  onChange={handleFormChange}
                />{" "}
                <br />
              </div>

              <div className="JionFrom-content-inputs">
                <div className="jion-cont">
                  <label>
                    {currentLanguage === "ta"
                      ? t("JionMemberShip.5")
                      : t("Refferal code")}
                  </label>
                  <p>
                    {" "}
                    <Fragment>:</Fragment>
                  </p>
                </div>
                <input
                  placeholder="(Optional)"
                  type="text"
                  id="RefferalCode"
                  name="referredBy"
                  value={formData.referredBy}
                  onChange={handleFormChange}
                />{" "}
                <br />
              </div>

              <div className="JionFrom-content-inputs">
                <div className="jion-cont">
                  <label>
                    {currentLanguage === "ta"
                      ? t("JionMemberShip.4")
                      : t("JionMemberShip.4")}{" "}
                    <span style={{ color: "red", paddingLeft: "0" }}>*</span>
                  </label>
                  <p>
                    {" "}
                    <Fragment>:</Fragment>
                  </p>
                </div>
                <div className="data5">
                  <select
                    value={formData.gender}
                    name="gender"
                    onChange={handleFormChange}
                    className="text-area-address" // Add your CSS class here
                  >
                    <option value="">{t("JionMemberShip.16")}</option>
                    {gender.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="JionFrom-content-inputs">
                <div className="jion-cont">
                  <label>
                    {currentLanguage === "ta"
                      ? t("JionMemberShip.7")
                      : t("Education")}{" "}
                    <span style={{ color: "red", paddingLeft: "0" }}>*</span>
                  </label>
                  <p>
                    {" "}
                    <Fragment>:</Fragment>
                  </p>
                </div>
                <div className="data5">
                  <select
                    value={formData.education}
                    name="education"
                    onChange={handleFormChange}
                    className="text-area-address" // Add your CSS class here
                  >
                    <option value="">{t("JionMemberShip.16")}</option>
                    {education.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* dob */}
              <div className="JionFrom-content-date">
                <div className="jion-cont">
                  <label>
                    {currentLanguage === "ta"
                      ? t("JionMemberShip.8")
                      : t("Date of Birth")}{" "}
                    <span style={{ color: "red", paddingLeft: "0" }}>*</span>
                  </label>
                  <p>
                    {" "}
                    <Fragment>:</Fragment>
                  </p>
                </div>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    sx={{ marginLeft: "18px" }}
                    components={["DatePicker"]}
                  >
                    <DatePicker
                      onChange={(date) =>
                        handleFormChange({
                          target: { name: "dateOfBirth", value: date },
                        })
                      }
                      label="Date of birth"
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              {/* blood */}
              <div className="JionFrom-content-inputs">
                <div className="jion-cont">
                  <label>
                    {currentLanguage === "ta"
                      ? t("JionMemberShip.9")
                      : t("Blood Group")}{" "}
                    <span style={{ color: "red", paddingLeft: "0" }}>*</span>
                  </label>
                  <p>
                    {" "}
                    <Fragment>:</Fragment>
                  </p>
                </div>
                <div className="data5">
                  <select
                    value={formData.bloodGroup}
                    name="bloodGroup"
                    onChange={handleFormChange}
                    className="text-area-address" // Add your CSS class here
                  >
                    <option value="">{t("JionMemberShip.16")}</option>
                    {bloodGroups.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* religion */}
              <div className="JionFrom-content-inputs">
                <div className="jion-cont">
                  <label>
                    {currentLanguage === "ta"
                      ? t("Religion.4")
                      : t("JionMemberShip.10")}{" "}
                    <span style={{ color: "red", paddingLeft: "0" }}>*</span>
                  </label>
                  <p>
                    {" "}
                    <Fragment>:</Fragment>
                  </p>
                </div>
                <div className="data5">
                  <select
                    value={formData.religion}
                    name="religion"
                    onChange={handleFormChange}
                    className="text-area-address" // Add your CSS class here
                  >
                    <option value="">{t("JionMemberShip.16")}</option>
                    {religions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="JionFrom-content-inputs">
                <div className="Address-join">
                  <div className="ad-main">
                    {/* address */}
                    <div className="ad-data">
                      <div className="jion-cont">
                        <label>
                          {currentLanguage === "ta"
                            ? t("Address.1")
                            : t("JionMemberShip.11")}{" "}
                          <span style={{ color: "red", paddingLeft: "0" }}>
                            *
                          </span>
                        </label>
                        <p>
                          {" "}
                          <Fragment>:</Fragment>
                        </p>
                      </div>
                      <textarea
                        className="JionFrom-content-inputs"
                        id="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleFormChange}
                      ></textarea>
                    </div>
                    <div className="state&district&consitituency">
                      <div className="ad-sub">
                        {/* State */}
                        <div className="ad-data">
                          <div className="jion-cont">
                            <label>
                              {t("Address.2")}{" "}
                              <span style={{ color: "red", paddingLeft: "0" }}>
                                *
                              </span>
                            </label>
                            <p>
                              <Fragment>:</Fragment>
                            </p>
                          </div>
                          <div className="data5 dist">
                            <select
                              name="state"
                              onChange={handleStateChange}
                              className="text-area-address"
                              value={formData.state || ""}
                            >
                              <option value="">Select Your State</option>
                              <option value="TamilNadu">Tamil Nadu</option>
                              <option value="Puducherry">Puducherry</option>
                            </select>
                          </div>
                        </div>
                        {/* District */}
                        <div className="Address">
                          <div className="ad-data">
                            <div className="jion-cont">
                              <label>
                                {currentLanguage === "ta"
                                  ? t("Address.3")
                                  : t("District")}{" "}
                                <span
                                  style={{ color: "red", paddingLeft: "0" }}
                                >
                                  *
                                </span>
                              </label>
                              <p>
                                <Fragment>:</Fragment>
                              </p>
                            </div>
                            <div className="data5 dist">
                              <select
                                value={formData.district || ""}
                                name="district"
                                onChange={handleFormChange}
                                className="text-area-address"
                              >
                                <option value="">
                                  {t("JionMemberShip.16")}
                                </option>
                                {(selectedState === "TamilNadu"
                                  ? Districts
                                  : puducherrydistricts
                                ).map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Constituency */}
                      <div className="JionFrom-content-inputs">
                        <div className="jion-cont">
                          <label>
                            {currentLanguage === "ta"
                              ? t("தொகுதி")
                              : t("Constituency")}
                            <span style={{ color: "red", paddingLeft: "0" }}>
                              *
                            </span>
                          </label>
                          <p>
                            <Fragment>:</Fragment>
                          </p>
                        </div>
                        <div className="data5 dist">
                          <select
                            value={formData.constituency || ""}
                            onChange={handleFormChange}
                            name="constituency"
                            className="text-area-address"
                          >
                            <option value="">Select a city</option>
                            {(selectedState === "TamilNadu"
                              ? TamilNadulist
                              : puducheryList
                            ).map((constituency, index) => (
                              <option key={index} value={constituency}>
                                {constituency}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* uploadadhar */}
              <div className="Upload-content-inputs">
                <div className="jion-cont">
                  <div className="join-sub">
                    <div className="UploadAdharaCard">
                      <p>
                        {currentLanguage === "ta"
                          ? t("Aadhaar.2")
                          : t("Upload Adhara card")}{" "}
                        <span style={{ color: "red", paddingLeft: "0" }}>
                          *
                        </span>
                      </p>
                      <span> {t("Aadhaar.3")}</span>
                    </div>
                    <p>
                      {" "}
                      <Fragment>:</Fragment>
                    </p>
                  </div>
                  <div className="sub-2">
                    <div className="sub-3">
                      <div className="Upload-adhar-btn">
                        <label className="upload-btn">
                          {t("Aadhaar.4")}
                          <input
                            type="file"
                            name="aadharCardURL"
                            onChange={handleAadharFileSelect}
                            style={{ display: "none" }}
                          />
                        </label>
                      </div>
                      <div className="uploaded-btn">
                        {aadharFile ? (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.3em",
                            }}
                          >
                            <img src={Check} alt="star" />
                            <p>
                              {" "}
                              {t("Address.5")}{" "}
                              <span
                                style={{ color: "red", paddingLeft: "0" }}
                              ></span>
                            </p>
                          </div>
                        ) : (
                          <span>
                            {currentLanguage === "ta"
                              ? t("Address.4")
                              : t("Not Upload")}
                          </span>
                        )}
                        {aadharFile && (
                          <img
                            src="https://freeiconshop.com/wp-content/uploads/edd/trash-var-outline.png"
                            width="25px"
                            height="25px"
                            alt="Delete"
                            onClick={() => handleDelete("aadhar")}
                          />
                        )}
                      </div>
                      <div className="preview">
                        <img src={aadharFile || aadhar} alt="preview"></img>
                      </div>
                    </div>
                    <div>
                      {showload1 && (
                        <div className="loads">
                          {" "}
                          Adharphoto uploading Please wait...
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* uploadphoto */}
              <div className="Upload-content-inputs">
                <div className="jion-cont">
                  <div className="join-sub">
                    <div className="UploadAdharaCard">
                      <p>
                        {t("JionMemberShip.14")}{" "}
                        <span style={{ color: "red", paddingLeft: "0" }}>
                          *
                        </span>
                      </p>
                    </div>
                    <p>
                      {" "}
                      <Fragment>:</Fragment>
                    </p>
                  </div>
                  <div className="sub-2">
                    <div className="sub-3">
                      <div className="Upload-adhar-btn">
                        <label className="upload-btn">
                          {t("JionMemberShip.14")}
                          <input
                            type="file"
                            name="profileURL"
                            onChange={handleProfileFileSelect}
                            style={{ display: "none" }}
                          />
                        </label>
                      </div>
                      <div className="uploaded-btn">
                        {profileFile ? (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.3em",
                            }}
                          >
                            <img src={Check} alt="star" />
                            <p>{t("Address.5")}</p>
                          </div>
                        ) : (
                          <span>
                            {currentLanguage === "ta"
                              ? t("Address.4")
                              : t("Not Upload")}
                          </span>
                        )}
                        {profileFile && (
                          <img
                            src="https://freeiconshop.com/wp-content/uploads/edd/trash-var-outline.png"
                            width="25px"
                            height="25px"
                            alt="Delete"
                            onClick={() => handleDelete("profile")}
                          />
                        )}
                      </div>
                      <div className="preview">
                        <img src={profileFile || profile} alt="preview"></img>
                      </div>
                    </div>

                    <div>
                      {showload && (
                        <div className="loads">
                          {" "}
                          Profile uploading Please wait...
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="JoinNow">
                <button type="submit" onKeyDown={handleKeyDown}>
                  {currentLanguage === "ta" ? t("Aadhaar.6") : t("Join Now")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />

      {popsuccess && (
        <div className="popup-overlay">
          <div className="gallery-popup">
            <p>You successfully completed 100% of membship form!</p>
            <div className="p2">
              IHAF administrator will make you member after validating your data
            </div>
            <div>
              <button onClick={handleYesClick} className="popup-yes">
                Okey
              </button>
            </div>
          </div>
        </div>
      )}
      {appliedpop && (
        <div className="popup-overlay">
          <div className="gallery-popup">
            <p>You already applied for membership!</p>
            <div className="p2">
              Administrator will verify your application soon...
            </div>
            <div>
              <button onClick={handleYesClick} className="popup-yes">
                Okey
              </button>
            </div>
          </div>
        </div>
      )}
      {appliedpop1 && (
        <div className="popup-overlay">
          <div className="gallery-popup">
            <p>You are already a member of IHAF!</p>
            <div className="p2">Your member ID is {localmid}</div>
            <div>
              <button onClick={handleYesClick} className="popup-yes">
                Okey
              </button>
            </div>
          </div>
        </div>
      )}
      {dataPreview && (
        <div className="popup-overlay1">
          <div className="gallery-popup">
            <h1>Preview before submission</h1>
            <Box sx={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                // initialState={{
                //   pagination: {
                //     paginationModel: {
                //       pageSize: 10,
                //     },
                //   },
                // }}
                pageSizeOptions={[5]}
              />
            </Box>
            <div className="join-preview-btns">
              <button className="preview-back" onClick={handlepreviewback}>
                Back
              </button>
              <button className="preview-submit" onClick={handlefinalsubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default JionMember;
