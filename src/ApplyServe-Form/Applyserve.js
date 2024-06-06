import React, { useState } from "react";
import "./Applyserve.css";
import { useTranslation } from "react-i18next";
import useScrollToTop from "../component/Hooks/useScrollToTop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/NavBar/Navbar";

function Applyserve() {
  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === "ta";
  const posting = ["Secretary", "cief", "sub"];

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
    "Kancheepuram",
    "Karur",
    "Krishnagiri",
    "Madurai",
    "Mayiladuthurai",
    "Nagapattinam",
    "Kanniyakumari",
    "Namakkal",
    "Perambalur",
    "Pudukottai",
    "Ramanathapuram",
    "Ranipet",
    "Salem",
    "Sivagangai",
    "Tenkasi",
    "Thanjavur",
    "Theni",
    "Thiruvallur",
    "Thiruvarur",
    "Thoothukudi",
    "Trichirappalli",
    "Thirunelveli",
    "Tirupathur",
    "Tiruppur",
    "Tiruvannamalai",
    "Udagamandalam",
    "Vellore",
    "Viluppuram",
    "Virudhunagar",
    "Puducherry"," Karaikal", "Mahe","Yanam"
  ];
  const constituencyList = [
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
  const storedData = JSON.parse(localStorage.getItem("userData"));
  const memberID = storedData?.data?.memberID || storedData?.memberID;

  const navigate = useNavigate();

  let [serve, setServe] = useState({
    memberID: memberID || "",
    postingLocation: "",
    postingName: "",
    constituency: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (serve.postingLocation === "" || serve.postingName === "") {
      toast.success("Incomplete form submission", {
        position: "top-right",
      });
      return;
    }

    try {
      const Response = await fetch(
        "https://ihaf-backend.vercel.app/new-application",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(serve),
        }
      );

      if (Response.ok) {
        const res = await Response.json();
        setServe(res);
        toast.success("Application send Successfully", {
          position: "top-right",
        });
        setServe({
          postingLocation: "",
          postingName: "",
          constituency: "",
        });
        console.log(res, "Apply to serve datas");
      } else {
        const er = await Response.json();
        console.error(er, "error getting");
        toast.success(`You are ${er.message}.`, {
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("error", error);
      toast.error("Somthing went Wrong", {
        position: "top-right",
      });
    }
  };
  useScrollToTop();
  return (
    <div>
      <Navbar></Navbar>
      <div className="Applyserve-container">
        <p
          className={`${
            isTamilLanguage ? "apply-toserve-head-tamil" : "apply-toserve-head"
          }`}
        >
          {t("hello.31")}
        </p>
        <p
          className={`${
            isTamilLanguage ? "apply-content-tamil" : "apply-content"
          }`}
        >
          {t("hello.32")}
        </p>
        <div className="Apply-serve-main">
          <div className="apply-serve-cont">
            <div className="apply-serve-name">
              <p
                className={`${
                  isTamilLanguage ? "text-serve-tamil" : "text-serve"
                }`}
              >
                {t("hello.33")}
              </p>{" "}
              <p className="equalen">:</p>
            </div>
            <div>
              <input
                type="text"
                className="serve-name"
                name="MemberID"
                value={serve.memberID}
                onChange={(e) => setServe({ ...serve, name: e.target.value })}
              />
            </div>
          </div>

          <div className="apply-serve-cont">
            <div className="apply-serve-name">
              <p
                className={`${
                  isTamilLanguage ? "text-serve-tamil" : "text-serve"
                }`}
              >
                {t("hello.35")}
              </p>{" "}
              <p className="equalen">:</p>
            </div>
            <div>
              <div className="data5">
                <select
                  value={serve.postingName}
                  name="postingName"
                  onChange={(e) =>
                    setServe({ ...serve, postingName: e.target.value })
                  }
                  className="serve-name-N"
                >
                  <option value="">Posting Name</option>
                  {posting.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="apply-serve-cont">
            <div className="apply-serve-name">
              <p
                className={`${
                  isTamilLanguage ? "text-serve-tamil" : "text-serve"
                }`}
              >
                {t("JionMemberShip.30")}
              </p>{" "}
              <p className="equalen">:</p>
            </div>
            <div>
              <div className="data5">
                <select
                  value={serve.constituency}
                  name="posting constituency"
                  onChange={(e) =>
                    setServe({ ...serve, constituency: e.target.value })
                  }
                  className="serve-name-P"
                >
                  <option value="">Posting Of Constituency</option>
                  {constituencyList.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="apply-serve-cont">
            <div className="apply-serve-name">
              <p
                className={`${
                  isTamilLanguage ? "text-serve-tamil" : "text-serve"
                }`}
              >
                {t("JionMemberShip.25")}
              </p>{" "}
              <p className="equalen">:</p>
            </div>
            <div>
              <div className="data5">
                <select
                  value={serve.postingLocation}
                  name="posting Districts"
                  onChange={(e) =>
                    setServe({ ...serve, postingLocation: e.target.value })
                  }
                  className="serve-name-P"
                >
                  <option value="">Posting Location</option>
                  {tamilNaduDistricts.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div>
            <button className="serve-joinNow" onClick={handlesubmit}>
              Join Now
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Applyserve;
