import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import image2 from '../images/amitcha.jpg';
import image1 from '../images/Arrow 1 (1).png';
import './Page4.css';
import axios from 'axios';

const Page4 = () => {
  const { t, i18n } = useTranslation();
  const isTamilLanguage = i18n.language === 'ta';
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  useEffect(() => {
    setCurrentLanguage(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.toggle('show');
          observer.unobserve(entry.target);
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden-7');
    hiddenElements.forEach((el) => observer.observe(el));

    const hiddenElements1 = document.querySelectorAll('.hidden-8');
    hiddenElements1.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
      hiddenElements1.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const [feeditems, setFeedItems] = useState([]);
 
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://ihaf-backend.vercel.app/get-all-feedback');
        const f1 = response.data;
        setFeedItems(f1);
      } catch (error) {
        console.error(error, "Failed to fetch items");
      }
    }

    fetchItems();
  }, []);

  const [details, setDetails] = useState([]);

  console.log (details, "details is for selected item");

  const Fetching = async (feed) => {
    try {
      const response = await axios.get(`https://ihaf-backend.vercel.app/select-feedback/${feed}`);
      const dataitems = response.data.data;
      setDetails(dataitems);
      console.log(dataitems, "data items????????????????");
    } catch (error) {
      console.error(error, "Error fetching feedback");
    }
  }

  useEffect(() => {
    feeditems.forEach(item => {
      const feed = item._id;
      Fetching(feed);
      console.log(feed, "Fetching items from server for feedback");
    });
  }, [feeditems]);

  console.log(feeditems, "Fetched items");

  return (
    <div className='page4-container'>
      <div className='page-4-image-text'>
        <img src={image1} alt='' className='page4-image1 hidden-7' />
        <button className={`hidden-8 ${isTamilLanguage ? 'tamil-page-4-btn' : 'page-4-btn'}`}>
          {t('hello.2')}
        </button>
      </div>
      <div className='page4-main-cont1'>
        <div className='scroller'>
            {feeditems.map(item => (
              <div className='page4-main' key={item.id}>
                <div className='page4-main-C'>
                  <div className='img-cover4'>
                    <img src={item.profileURL} alt='' className='page4-image2' />
                  </div>
                  <div className='page4-p-by'>
                    <p className="page4-p">
                      {item.content}
                    </p>
                    <div className='page4-by'>
                      <p className='by'>by</p>
                      <p>{item.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page4;



