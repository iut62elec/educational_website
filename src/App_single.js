import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link, animateScroll as scroll } from 'react-scroll';
import './App.css';

const videoData = {
  'معرفی': ['Giu1-k-Qkck'],
  'نقشهای معلم حرفه ای': ['azNg43gqZ8c'],
  'آموزش والدین برای تربیت کودک و نوجوان': ['Ehtt2IWYAk4'],
};

const HomePage = () => (
  <div id="home">
    <h2>Home Page Content</h2>
    <iframe
      title="معرفی"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Giu1-k-Qkck"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
);

const AboutPage = () => (
  <div id="about">
    <h2>About our academy and mission.</h2>
    <iframe
      title="معرفی"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Giu1-k-Qkck"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
);

const ContactPage = () => (
  <div id="contact">
    <h2>Contact information will be here.</h2>
    <p><FontAwesomeIcon icon={faPhone} /> 913-318-1966</p>
    <p><FontAwesomeIcon icon={faEnvelope} /> poorankhorooshi@gmail.com</p>
    <a href="https://www.instagram.com/dr.pooran.khorooshi/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram} /> Instagram
    </a>
    <a href="https://t.me/s/pkh2023" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTelegram} /> Telegram
    </a>
  </div>
);

const EducationalVideosPage = () => (
  <div id="educational-videos">
    {Object.keys(videoData).map((category) => {
      return (
        <div key={category} className="video-section card">
          <h2 className="card-header">{category}</h2>
          <div className="card-body video-list">
            {videoData[category].map((videoId) => (
              <div key={videoId} className="video-container card">
                <iframe
                  title={videoId}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      );
    })}
  </div>
);

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={() => scroll.scrollToTop()}>آکادمی آموزش معلمان و والدین</h1>
        <h2>دکتر پوران خروشی</h2>
      </header>

      <nav className="App-nav">
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>خانه</Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>درباره ما</Link>
        <Link activeClass="active" to="educational-videos" spy={true} smooth={true} offset={-70} duration={500}>ویدئو‌های آموزشی</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>تماس با ما</Link>
      </nav>

      <main className="App-main">
        <HomePage />
        <AboutPage />
        <EducationalVideosPage />
        <ContactPage />
      </main>
    </div>
  );
};

export default App;
