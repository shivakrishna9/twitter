'use strict';
const config = require('../config.js');
const twit = require('twit');
const T = new twit(config.twitter);

function followed(event) {
  console.log('Follow event is running');

  var name = event.source.name;
  var screenName = event.source.screen_name;

  tweetNow('Thank you @' + screenName + ' . I hope you get useful information here.');
}

function tweetNow(tweetText) {
  let tweet = {
    status: tweetText
  };

  T.post('statuses/update', tweet, (err, data, response) => {
    if(err) {
      console.log('ERROR: in Follow TWEET');
    }
    console.log('SUCCESS: Replied to Follower');
  });
}

module.exports = followed;