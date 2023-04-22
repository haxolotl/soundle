import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; // import styles
import defaultArtist from './test-data/default-artist.png';

const App = () => {
    return (
        <div className="app-container">
          <div className="artist-container">
            <img src={defaultArtist} alt="Artist" />
            <h1>Artist Name</h1>
            <p>Artist description goes here</p>
          </div>
        </div>
      );
};

ReactDOM.render(<App />, document.getElementById('root'));
