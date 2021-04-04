var Twit = require('twit');
const Discord = require('discord.js');
const client = new Discord.Client();

var T = new Twit({
  consumer_key:         'consumerkey',
  consumer_secret:      'consumersecret',
  access_token:         'accesstoken',
  access_token_secret:  'accesstokensecret',
})

var stream = T.stream('statuses/filter', { follow: ['975808798463086592'] });

stream.on('tweet', (tweet) => {
  var tweetRetweet = tweet['retweeted_status']
  var tweetID = tweet['id_str']
  var tweetTime = tweet['created_at']
  var tweetSource = tweet['source']
  if (retweeted_status == null) {
    client.channels.cache.get('826437818964246539').send(`Striker just tweeted:\n${tweetTime}\nTweeted on: ${tweetSource}\n\nhttps://twitter.com/i/status/${tweetID}`)
  } else {
    client.channels.cache.get('826437818964246539').send(`Striker just retweeted:\n${tweetTime}\n\nhttps://twitter.com/i/status/${tweetID}`)
  }
});


console.log('Online');

client.login('token');
