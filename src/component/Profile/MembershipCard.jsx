import { Fragment, useRef } from "react";
import logo from "../../images/logo.png";
import { PropTypes } from "prop-types";
import { useTranslation } from "react-i18next";
import back from "../../images/Media.jpg";
import signature from "../../images/MicrosoftTeams-image (27).png";

const DEFAULT_AVATAR =
  "https://cdn3.iconfinder.com/data/icons/business-round-flat-vol-1-1/36/user_account_profile_avatar_person_student_male-512.png";

// CSS dot instead of the hot-linked clker.com image: that host doesn't respond, and
// html2canvas waits for every image to load, so the card download hung.
const BlueDot = () => (
  <span className="inline-block w-[7px] h-[7px] rounded-full bg-[#1e7be0]" />
);

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

  // Label / value pairs rendered in a grid so every row grows with its content
  // (long names or Tamil labels wrap instead of overlapping the next row).
  const details = [
    { label: t("JionMemberShip.3"), value: name },
    { label: t("hello.5"), value: MemberID },
    { label: t("JionMemberShip.19"), value: DateOfJoining },
    { label: t("JionMemberShip.9"), value: Bloodgroup },
    { label: t("JionMemberShip.30"), value: constituency },
    { label: t("JionMemberShip.25"), value: district },
  ];

  return (
    <div className="card-section-main">
      {/* card frontside */}
      <div
        className="min-h-[270px] w-[450px] ph:w-[400px] text-white flex flex-col items-stretch"
        style={{
          background:
            "radial-gradient(circle, rgb(110 150 179) 0%, rgb(63 76 136) 82%) ",
        }}
        ref={cardRef}
      >
        {/* header: logo + motto + federation name */}
        <div className="flex items-center w-full px-3 pt-2 gap-2">
          <img className="h-[72px] w-[72px] shrink-0" src={logo} alt="logo" />
          <div className="flex-1 min-w-0 flex flex-col items-center text-center">
            <p className="text-xs tracking-widest flex flex-wrap justify-center items-center gap-2">
              {t("JionMemberShip.26")} <BlueDot />
              {t("JionMemberShip.28")} <BlueDot />
              {t("JionMemberShip.27")} <BlueDot />
              {t("JionMemberShip.29")}
            </p>
            <p className="text-[13px] font-bold leading-tight mt-1">
              {t("pageOne.1")}
            </p>
            <span className="text-[10px] leading-tight mt-1">
              {t("JionMemberShip.20")}
            </span>
          </div>
        </div>

        {/* details box */}
        <div className="flex-1 flex items-stretch gap-3 border-2 rounded-lg mx-3 mb-3 mt-2 p-2 font-Poppins">
          {/* no object-fit here: html2canvas (download) ignores it, so keep the natural aspect ratio */}
          <div className="w-[80px] shrink-0 flex items-center justify-center">
            <img
              className="w-auto h-auto max-w-[80px] max-h-[100px] rounded"
              src={Profile || DEFAULT_AVATAR}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = DEFAULT_AVATAR;
              }}
              alt="profile"
            />
          </div>

          <div className="flex-1 min-w-0 flex flex-col justify-between gap-1">
            <div className="grid grid-cols-[auto_auto_minmax(0,1fr)] gap-x-2 gap-y-[2px] text-[11px] leading-snug">
              {details.map(({ label, value }) => (
                <Fragment key={label}>
                  <span>{label}</span>
                  <span>:</span>
                  <span className="break-words">{value}</span>
                </Fragment>
              ))}
            </div>

            {/* signature image is square with whitespace around it: crop it with overflow instead of object-fit */}
            <div className="self-end flex flex-col items-center leading-none">
              <div className="w-[90px] h-[34px] overflow-hidden flex items-center justify-center">
                <img
                  className="w-[90px] h-[90px] max-w-none shrink-0"
                  src={signature}
                  alt="sign"
                />
              </div>
              <p className="text-black text-[11px]">(President Sign)</p>
            </div>
          </div>
        </div>
      </div>

      {/* card backside */}
      {/* explicit box sizes (no object-fit, which html2canvas ignores) so the download matches the screen;
          mobile keeps the image's 1800x1100 ratio */}
      <div className=" w-[450px] h-[270px] ph:w-[400px] ph:h-[244px]">
        <img className="w-full h-full" src={back} alt="card"></img>
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
