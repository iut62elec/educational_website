import React from 'react';
import './App.css';

// Sample data: Replace these video IDs and categories with your own
const videoData = {
  'Category 1': ['videoID1', 'videoID2'],
  'Category 2': ['videoID3', 'videoID4'],
  'Category 3': ['videoID5', 'videoID6'],
  'Category 4': ['videoID7', 'videoID8', 'videoID9'],
};

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My YouTube Video Collection</h1>
      </header>
      <main>
        {Object.keys(videoData).map((category) => (
          <div key={category}>
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
      </main>
    </div>
  );
};

export default App;
