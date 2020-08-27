const axios = require('axios');
const qs = require('querystring');

async function getToken() {
  const url = 'https://accounts.spotify.com/api/token';
  const requestBody = {
    grant_type: 'client_credentials'
  };
  const authorization = `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`;
  const config = {
    headers: {
      Authorization: `Basic ${Buffer.from(authorization).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  const { data } = await axios.post(url, qs.stringify(requestBody), config);
  return data.access_token;
}

async function getEpisodes(token) {
  const url =
    'https://api.spotify.com/v1/shows/5kS4rk5hFTcw85NQF7kSh9?market=ES';
  const { data } = await axios.get(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  return data.episodes;
}

module.exports = { getToken, getEpisodes };
