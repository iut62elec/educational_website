import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const videoData = {
  'معرفی': ['Giu1-k-Qkck','EOA0Z2gvkh4'],
  'نقشهای معلم حرفه ای': ['azNg43gqZ8c','61_jX4Wast4','sjmbrJZbcyw'],
  'آموزش والدین برای تربیت کودک و نوجوان': ['Ehtt2IWYAk4','CJvHPRe-VzQ','PSpUWxlfh1Q'],
  'لایو‌های آموزشی اینستاگرم': ['cwSkD6jzrB4','PPzVWPc80JQ','LOFOUc9c3LQ'],

};

const HomePage = () => (
  <div>
    {/* New description */}
    <h2 className="description">آکادمی آموزش معلمان و والدین دکتر پوران خروشی</h2>
    <p>آنچه که شما معلمان و والدین باید برای تربیت شاگردان و فرزندانتون بدونین، اینجا یاد می گیرین</p>

    {/* Videos */}
    <EducationalVideosPage />

    {/* Contact */}
    <ContactPage />
  </div>
);

const AboutPage = () => (
  <div>
    <p>آنچه که شما معلمان و والدین باید برای تربیت شاگردان و فرزندانتون بدونین، اینجا یاد می گیرین</p>
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
        : category === 'لایو‌های آموزشی اینستاگرم'
        ? 'https://www.youtube.com/playlist?list=PLBqeRzwcp__iFfzPS8bb7rgVM6j02RAYx'
        : null;

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
          {playlistLink && (
            <p className="card-footer">
              <a href={playlistLink} className="playlist-button" target="_blank" rel="noopener noreferrer">
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
        <Link to="/educational-videos">ویدئو‌های آموزشی </Link>
         
          
          <Link to="/contact">تماس با ما</Link>
          <Link to="/about">درباره ما</Link>
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
