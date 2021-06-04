const APIError = require('../utils/APIError');
const httpStatus = require('http-status');
const tweet = require('../../config/twit');
const { twit } = require('../../config/vars');


/**
 * Returns tweets tags
 * @public
 */
exports.stream = async (req, res, next) => {
  try {
  
    var stream = tweet.stream('statuses/filter', {
      track: `#${req.params.tag}`
    });
    stream.on('tweet', function (tweets) {       
      res.json(tweets)   ;   
      console.log(tweets) ;       
    })    
   
   
  } catch (error) {
    next(error);
  }

};

/**
 * Returns trends
 * @public
 */

exports.trends = async (req, res, next) => {
  try {
    var trends = null;
    tweet.get('trends/place', {id: twit.where_on_earth_id}, (err, data) => {     
      trends = data;     
      res.json(trends);   
    });
  } catch (error) {
    next(error);
  }

}
