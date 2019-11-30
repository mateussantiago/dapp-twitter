const twitter = require('../model/twitter');

exports.findTweetsByAddress = (req, res) => {
    twitter.methods.getTweetsByAddress().call().then(tweets => {
        res.render('index', {
            title : 'Tweets',
            tweets : tweets
        });        
    }).catch(err => {
        console.log(err);
        res.status(500).jsonp({error : 'Internal error'});
    });
};
