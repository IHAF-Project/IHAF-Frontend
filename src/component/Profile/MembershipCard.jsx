/* eslint-disable jsx-a11y/alt-text */
import { useRef } from "react";
import logo from "../../images/logo.png";
import { PropTypes } from "prop-types";
import { useTranslation } from "react-i18next";
import back from "../../images/Media.jpg";
import signature from "../../images/MicrosoftTeams-image (27).png";

function MembershipCard({
  name,
  MemberID,
  DateOfJoining,
  Profile,
  Bloodgroup,
  district,
  constituency,
}) {
  const { t } = useTranslation();
  const cardRef = useRef(null);

  return (
    <div className="card-section-main">
      {/* card frontside */}
      <div
        className="h-auto w-[450px] ph:w-[400px] text-white flex flex-col justify-evenly items-center "
        style={{
          background:
            "radial-gradient(circle, rgb(110 150 179) 0%, rgb(63 76 136) 82%) ",
        }}
        ref={cardRef}
      >
        <div className="mb-1 flex items-center w-full text-[12px] justify-evenly ">
          <div className="h-full w-[24%] flex justify-center items-center p-2">
            <img className=" object-cover h-[12vh]" src={logo} alt="logo" />
          </div>

          <div className=" w-[80%] text-[12px] text-white flex flex-col items-center justify-evenly">
            <p className=" text-xs break-words pt-2 tracking-widest flex justify-center items-center gap-2">
              {t("JionMemberShip.26")}{" "}
              <img
                src="https://www.clker.com/cliparts/j/L/l/O/b/A/blue-dot-hi.png"
                width="8px"
                height="8px"
              />{" "}
              {t("JionMemberShip.28")}{" "}
              <img
                src="https://www.clker.com/cliparts/j/L/l/O/b/A/blue-dot-hi.png"
                width="8px"
                height="8px"
              />{" "}
              {t("JionMemberShip.27")}{" "}
              <img
                src="https://www.clker.com/cliparts/j/L/l/O/b/A/blue-dot-hi.png"
                width="8px"
                height="8px"
              />{" "}
              {t("JionMemberShip.29")}
            </p>
            <p className="text-white text-[14px] font-bold items-center text-center my-2">
              {t("pageOne.1")}
            </p>
            <span className=" text-[10px]">{t("JionMemberShip.20")}</span>
          </div>
        </div>
        <div className="signature">
          <img src={signature} alt="sign" />
          <p>(President Sign)</p>
        </div>
        <div className="flex items-center justify-around p-3 gap-3 border-2 rounded-lg m-2 text-[12px] font-Poppins ">
          <div className="w-[20%] h-[90%] flex items-center justify-center">
            <img
              className=" object-cover"
              src={
                Profile ||
                "https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png"
              }
              alt="logo"
            />
          </div>
          <div className="w-[80%] h-[100%]">
            <div className=" w-[97%] h-6 flex flex-row gap-2 font-Poppins">
              <p>{t("JionMemberShip.3")} </p>
              <>:</>
              <span>{name}</span>
            </div>
            <div className="w-[97%] h-5 flex flex-row gap-2 font-Poppins">
              {" "}
              <p>{t("hello.5")} </p>
              <>:</>
              <span>{MemberID}</span>
            </div>
            <div className="w-[97%] h-5 flex flex-row gap-2 font-Poppins">
              {" "}
              <p>{t("JionMemberShip.19")} </p>
              <>:</>
              <span>{DateOfJoining}</span>
            </div>
            <div className="w-[97%] h-5 flex flex-row gap-2 font-Poppins">
              {" "}
              <p>{t("JionMemberShip.9")} </p>
              <>:</>
              <span>{Bloodgroup}</span>
            </div>
            <div className="w-[97%] h-5 flex flex-row gap-2 font-Poppins">
              {" "}
              <p>{t("JionMemberShip.30")} </p>
              <>:</>
              <span>{constituency}</span>
            </div>
            <div className="w-[97%] h-5 flex flex-row gap-2 font-Poppins">
              {" "}
              <p>{t("JionMemberShip.25")} </p>
              <>:</>
              <span>{district}</span>
            </div>
          </div>
        </div>
      </div>
      {/* card backside */}

      <div className=" w-[450px] h-[270px] ph:w-[400px]" ref={cardRef}>
        <img
          className=" object-fill h-[270px] ph:w-[400px] ph:object-contain"
          src={back}
          alt="card"
        ></img>
      </div>
    </div>
  );
}
MembershipCard.propTypes = {
  name: PropTypes.node,
  MemberID: PropTypes.node,
  DateOfJoining: PropTypes.node,
};

export default MembershipCard;
