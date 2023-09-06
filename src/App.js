import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const videoData = {
  'معرفی': ['Giu1-k-Qkck'],
  'نقشهای معلم حرفه ای': ['azNg43gqZ8c'],
  'آموزش والدین برای تربیت کودک و نوجوان': ['Ehtt2IWYAk4'],
};

const HomePage = () => (
  <div>
    <p>Home Page Content</p>
    {/* Embed the "معرفی" video */}
    <iframe
      title="معرفی"
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/Giu1-k-Qkck`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
);

const AboutPage = () => (
  <div>
    <p>About our academy and mission.</p>
    {/* Embed the "معرفی" video */}
    <iframe
      title="معرفی"
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/Giu1-k-Qkck`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
);

const ContactPage = () => (
  <div>
    <p>Contact information will be here.</p>
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
  <div>
    {Object.keys(videoData).map((category) => {
      const playlistLink = category === 'آموزش والدین برای تربیت کودک و نوجوان'
        ? 'https://www.youtube.com/playlist?list=PLBqeRzwcp__gnPbf_T_0eje1JMBJ2dlid'
        : category === 'نقشهای معلم حرفه ای'
        ? 'https://www.youtube.com/playlist?list=PLBqeRzwcp__g9cPzFe9Anf2EBQKMiMMW-'
        : null;

      return (
        <div key={category} className="video-section">
          <h2>{category}</h2>
          <div className="video-list">
            {videoData[category].map((videoId) => (
              <div key={videoId} className="video-container">
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
          {playlistLink && (
            <p>
              <a href={playlistLink} target="_blank" rel="noopener noreferrer">
              لیست کامل ویدئو‌ها در این قسمت
              </a>
            </p>
          )}
        </div>
      );
    })}
  </div>
);


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>آکادمی آموزش معلمان و والدین</h1>
          <h2>دکتر پوران خروشی</h2>
        </header>

        <nav className="App-nav">
        <Link to="/">خانه </Link>
          <Link to="/about">درباره ما</Link>
          <Link to="/educational-videos">ویدئو‌های آموزشی </Link>
          <Link to="/contact">تماس با ما</Link>
        </nav>

        <main className="App-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/educational-videos" element={<EducationalVideosPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
