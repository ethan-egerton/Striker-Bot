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
  console.log("tweet detected")
  var tweetID = tweet['id_str']
  var tweetTime = tweet['created_at']
  client.channels.cache.get('544998477193674791').send(`Striker just tweeted:\n${tweetTime}\n\nhttps://twitter.com/i/status/${tweetID}`)
});


console.log('Online');

client.login('ODI2MjU3NzE4MjY3NDc4MDI3.YGJ2dw._ZE2nEeB77EgHhEYBt-yGCxmbs4');
