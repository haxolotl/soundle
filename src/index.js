import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className="app-container">
          <div className="artist-container">
            <img src="https://via.placeholder.com/150" alt="Artist" />
            <h1>Artist Name</h1>
            <p>Artist description goes here</p>
          </div>
        </div>
      );
};

ReactDOM.render(<App />, document.getElementById('root'));
