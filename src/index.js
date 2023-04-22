import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; // import styles
import LastFmApiCaller from './LastFmApiCaller';
import defaultArtist from './test-data/default-artist.png';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <LastFmApiCaller />
            </header>
        </div>
      );
};

ReactDOM.render(<App />, document.getElementById('root'));
