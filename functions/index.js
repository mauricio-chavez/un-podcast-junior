const functions = require('firebase-functions');
const { getToken, getEpisodes } = require('./spotify');

exports.episodes = functions.https.onRequest((req, res) => {
  getToken()
    .then(getEpisodes)
    .then(episodes => {
      res.json(episodes);
    })
    .catch(console.log);
});
