const APIError = require('../utils/APIError');
const httpStatus = require('http-status');
const tweet = require('../../config/twit');
const {
    twit
} = require('../../config/vars');
const twitUtil = require('../utils/Twit');
const twitModel = require('../models/tweet.model');

var _dataStream;

module.exports = (io, socket) => {
    const streamTweet = (payload) => {
        if (_dataStream)
            _dataStream.stop();

        _dataStream = tweet.stream('statuses/filter', {
            track: `#${payload}`,
            tweet_mode: 'extended'
        });

        _dataStream.on('tweet', function(tweet) {
            try {
                if (!twitUtil.isReply(tweet)) {
                    const tweetModel = new twitModel(tweet.id, tweet.extended_tweet ? tweet.extended_tweet.full_text : tweet.text,
                        tweet.user.screen_name, tweet.user.profile_image_url)
                    io.emit('tweet', tweetModel);
                }
            } catch (error) {
                logger.error(`Twitter api connection error: ${error}`);
                io.emit('tweet', error);
            }
        });
    }

    const disconnectTweet = () => {
        _dataStream.stop();
    }

    socket.on("twitter", streamTweet);
    socket.on("tweetEnd", disconnectTweet);
}