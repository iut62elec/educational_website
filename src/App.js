import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
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

const ContactPage = () => <div>Contact information will be here.</div>;

const EducationalVideosPage = () => (
  <div>
    {['معرفی', 'نقشهای معلم حرفه ای'].map((category) => (
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
      </div>
    ))}
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
          <Link to="/">خانه</Link>
          <Link to="/about">درباره</Link>
          <Link to="/educational-videos">آموزشی ویدئوها</Link>
          <Link to="/contact">تماس</Link>
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
