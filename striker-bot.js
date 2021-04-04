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
  try {
    var tweetRetweeted = tweet['retweeted_status']
  } catch (error) {}
  var tweetID = tweet['id_str']
  var tweetTime = tweet['created_at']
  var tweetSource = tweet['source']

  var char = 'a';
  var i = 0;
  while (char != '>') {
    var char = tweetSource[i];
    var i = i + 1;
  }
  var tweetSourceSliced = tweetSource.slice(i, (tweetSource.length - 4))

  if (tweetRetweeted == null) {
    client.channels.cache.get('544998477193674791').send(`Striker just tweeted:\nPosted at ${tweetTime}\nSent from ${tweetSourceSliced}\n\nhttps://twitter.com/i/status/${tweetID}`)
  } else {
    client.channels.cache.get('544998477193674791').send(`Striker just retweeted:\nRetweeted at ${tweetTime}\n\nhttps://twitter.com/i/status/${tweetID}`) 
  }
});


console.log('Online');

client.login('token');
