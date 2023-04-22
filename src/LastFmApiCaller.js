import React, { useState } from 'react';
import axios from 'axios';

const LastFmApiCaller = () => {
  const [data, setData] = useState(null);
  
  const handleClick = () => {
    axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=YOUR_API_KEY&format=json`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <button onClick={handleClick}>Call LastFM API</button>
      {data && (
        <div>
          <h2>{data.artist.name}</h2>
          <img src={data.artist.image[2]['#text']} alt="artist" />
          <p>{data.artist.bio.summary}</p>
        </div>
      )}
    </div>
  );
};

export default LastFmApiCaller;
