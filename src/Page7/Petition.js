// import React, { useEffect, useState } from 'react';
// import './Petition.css';
// import image1 from '../images/Arrow 1 (1).png';
// import { useTranslation } from 'react-i18next';
// import { useNavigate } from 'react-router-dom';
// import axios  from 'axios';

// function Petition() {
//   const { t, i18n } = useTranslation();
//   const isTamilLanguage = i18n.language === 'ta';
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.toggle('show');
//           observer.unobserve(entry.target);
//         }
//       });
//     });

//     const hiddenElements = document.querySelectorAll('.hidden-13');
//     hiddenElements.forEach((el) => observer.observe(el));

//     const hiddenElements1 = document.querySelectorAll('.hidden-14');
//     hiddenElements1.forEach((el) => observer.observe(el));
//     return () => {
//       hiddenElements.forEach((el) => observer.unobserve(el));
//       hiddenElements1.forEach((el) => observer.unobserve(el));
//     };
//   }, []);

//   const navigete = useNavigate();
  
//   const [name , setname] = useState ('')
//   const [phoneNumber , setphoneNumber] = useState('')
//   const [issues , setissues] = useState('')
//  const [address , setaddress] = useState('')
//  const [imageURl , setimageURl] = useState('')

//  const handlesubmit = (e) =>{
//   e.preventDefault();

//   const newdata = {
//      name,
//      phoneNumber,
//      issues,
//      address,
//      imageURl : imageURl || '',
//   }
  
//   axios.post("https://ihaf-backend.vercel.app/new-petition" ,{newdata} )
//      .then(response =>{
//         const items = response.data;
//         setimageURl (items)
//         navigete ('/')
//      })
//      .catch (error => console.log(error))
//  }


//   const [fileUrl, setFileUrl] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   const handleFileChange = async (e) => {
//     setUploading(true);

//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', 'ivs6otkx');

//     try {
//       const response = await axios.post('https://api.cloudinary.com/v1_1/ddanljbwx/auto/upload', formData); // Use 'auto' to detect file type
//       const secureUrl = response.data.secure_url;
//       console.log(secureUrl, "upload");
//       localStorage.setItem('fileURL', secureUrl);
//       console.log(secureUrl, "file");

      
//       setdata({ ...data, pdfURL: secureUrl });

//       setdata(secureUrl);
//     } catch (error) {
//       console.log('Error uploading file:', error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   useEffect(() => {
//     const storedFileUrl = localStorage.getItem('fileURL');
//     if (storedFileUrl) {
//       setFileUrl(storedFileUrl);
//     }
//   }, []);

//   return (
//     <div className="page7-petition-container abc">
//       <div className="page-7-image-text">
//         <img src={image1} alt="" className="page4-image1 hidden-13"></img>
//         <p className={`hidden-14 ${isTamilLanguage ? 'petition-7-btn-tamil' : 'petition-7-btn'}`}>
//           {t('hello.3')}
//         </p>
//       </div>
//        <div className='page7-petition-text '>
//        <p className={`${isTamilLanguage ? 'page7-petition-tamil-p' : 'page7-petition-text-p'}`}>{t('hello.4')} </p>
//        </div>
//       <div className="page7-input-container">
//         <div className="petition-inputs">
//           <div className="petition-input-cont">
//             <div className="petition-in-c">
//               <div>
//                 <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.5')} </p>
//               </div>
//               <div className="equal">:</div>
//             </div>
//             <input
//               className="input-name-petition"
//               type="text"
//               name="name"
//               value={name}
//               onChange={e => setname(e.target.value)}
//             />
//           </div>
//           <div className="petition-input-cont">
//             <div className="petition-in-c">
//               <div>
//                 <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.7')} </p>
//               </div>
//               <div className="equal">:</div>
//             </div>
//             <input
//               className="input-contact-petition"
//               type="text"
//               name="phoneNumber"
//               value={phoneNumber}
//               onChange={e => setphoneNumber(e.target.value)}
//             />
//           </div>
//           <div className="petition-input-cont">
//             <div className="petition-in-c">
//               <div>
//                 <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.8')} </p>
//               </div>
//               <div className="equal">:</div>
//             </div>
//             <textarea
//               className="input-address-petition"
//               name="issues"
//               value={issues}
//               onChange={e => setissueNumber(e.target.value)}
//             ></textarea>
//           </div>
//           <div className="petition-input-cont">
//             <div className="petition-in-c">
//               <div>
//                 <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.9')} </p>
//               </div>
//               <div className="equal">:</div>
//             </div>
//             <textarea
//               className="input-address-petition"
//               name="address"
//               value={address}
//               onChange={e => setaddress(e.target.value)}
//             ></textarea>
//           </div>
//           <div className="petition-input-cont">
//             <div className="petition-in-c">
//               <div>
//                 <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.27')} </p>
//               </div>
//               <div className="equal">:</div>
//             </div>
//             <div className="input-audio-petition">
//               <div>
//                 <input
//                   className="file-upload-petition"
//                   id="file"
//                   ref={inputRef}
//                   type="file"
//                   accept="*/*"
//                   onChange={handleFileChange}
//                 />
//                 {uploading && <p>Uploading...</p>}
               
//               </div>
//             </div>
//           </div>
//           <div className="page7-submit">
//             <button className="petition-submit-btn" onClick={handlesubmit}>
//               {t('hello.6')}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Petition;











import React, { useEffect, useState } from 'react';
import './Petition.css';
import image1 from '../images/Arrow 1 (1).png';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Petition() {
  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === 'ta';
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.toggle('show');
          observer.unobserve(entry.target);
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-13');
    hiddenElements.forEach((el) => observer.observe(el));

    const hiddenElements1 = document.querySelectorAll('.hidden-14');
    hiddenElements1.forEach((el) => observer.observe(el));
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      hiddenElements1.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const navigete = useNavigate();

  const [data, setdata] = useState({
    name: '',
    phoneNumber: '',
    issues: '',
    address: '',
    pdfURL: ''
  });

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://ihaf-backend.vercel.app/new-petition', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        const t1 = await res.data.json();
        console.log(t1, 'success');
        setdata(t1);
      } else {
        const errorResponse = await res.data.json();
        console.error('Error Response:', errorResponse);
      }
    } catch (error) {
      console.error('Error', error);
    }
  };

  const [fileUrl, setFileUrl] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    setUploading(true);

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ivs6otkx');

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/ddanljbwx/auto/upload', formData); // Use 'auto' to detect file type
      const secureUrl = response.data.secure_url;
      console.log(secureUrl, "upload");
      localStorage.setItem('fileURL', secureUrl);
      console.log(secureUrl, "file");

      
      setdata({ ...data, pdfURL: secureUrl });

      setdata(secureUrl);
    } catch (error) {
      console.log('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    const storedFileUrl = localStorage.getItem('fileURL');
    if (storedFileUrl) {
      setFileUrl(storedFileUrl);
    }
  }, []);

  return (
    <div className="page7-petition-container abc" id='Petition'>
      <div className="page-7-image-text">
        <img src={image1} alt="" className="page4-image1 hidden-13"></img>
        <p className={`hidden-14 ${isTamilLanguage ? 'petition-7-btn-tamil' : 'petition-7-btn'}`}>
          {t('hello.3')}
        </p>
      </div>
       <div className='page7-petition-text '>
       <p className={`${isTamilLanguage ? 'page7-petition-tamil-p' : 'page7-petition-text-p'}`}>{t('hello.4')} </p>
       </div>
      <div className="page7-input-container">
        <div className="petition-inputs">
          <div className="petition-input-cont">
            <div className="petition-in-c">
              <div>
                <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.5')} </p>
              </div>
              <div className="equal">:</div>
            </div>
            <input
              className="input-name-petition"
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => setdata({ ...data, name: e.target.value })}
            />
          </div>
          <div className="petition-input-cont">
            <div className="petition-in-c">
              <div>
                <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.7')} </p>
              </div>
              <div className="equal">:</div>
            </div>
            <input
              className="input-contact-petition"
              type="text"
              name="phoneNumber"
              value={data.phoneNumber}
              onChange={(e) => setdata({ ...data, phoneNumber: e.target.value })}
            />
          </div>
          <div className="petition-input-cont">
            <div className="petition-in-c">
              <div>
                <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.8')} </p>
              </div>
              <div className="equal">:</div>
            </div>
            <textarea
              className="input-address-petition"
              name="issues"
              value={data.issues}
              onChange={(e) => setdata({ ...data, issues: e.target.value })}
            ></textarea>
          </div>
          <div className="petition-input-cont">
            <div className="petition-in-c">
              <div>
                <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.9')} </p>
              </div>
              <div className="equal">:</div>
            </div>
            <textarea
              className="input-address-petition"
              name="address"
              value={data.address}
              onChange={(e) => setdata({ ...data, address: e.target.value })}
            ></textarea>
          </div>
          <div className="petition-input-cont">
            <div className="petition-in-c">
              <div>
                <p className={`${isTamilLanguage ? 'petition-in-tamil' : 'petition-in'}`}>{t('hello.27')} </p>
              </div>
              <div className="equal">:</div>
            </div>
            <div className="input-audio-petition">
              <div>
                <input
                  className="file-upload-petition"
                  id="file"
                  value={data.pdfURL}
                  type="file"
                  accept="*/*"
                  onChange={handleFileChange}
                />
                {uploading && <p>Uploading...</p>}
               
              </div>
            </div>
          </div>
          <div className="page7-submit">
            <button className="petition-submit-btn" onClick={handlesubmit}>
              {t('hello.6')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Petition;