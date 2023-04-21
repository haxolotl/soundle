const axios = require('axios');
const secrets = require('../secrets');

const API_KEY = secrets.LASTFM_API_KEY;

const searchArtist = async (artistName) => {
  const url = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artistName}&api_key=${API_KEY}&format=json`;
  try {
    const response = await axios.get(url);
    console.log(response.data.results.artistmatches.artist);
  } catch (error) {
    console.error(error);
  }
};

searchArtist('Radiohead');
