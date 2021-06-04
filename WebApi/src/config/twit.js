const Twit = require('twit');
const { twit } = require('./vars');

const tweet = new Twit({
  consumer_key: twit.consumer_key,
  consumer_secret: twit.consumer_secret,
  access_token: twit.access_token,
  access_token_secret: twit.access_token_secret,
})

module.exports = tweet;
