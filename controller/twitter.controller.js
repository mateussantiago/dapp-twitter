const twitter = require('../model/twitter');

exports.login = (req, res) => {
    twitter.twitterContract.methods.isUser().call().then(isUser => {
        if (isUser) {
            res.redirect("/home");
            
            return;
        }
        
        res.render("pages/login");

    }).catch(error => {
        console.log(error)
        
        res.render("pages/login");
    });
};

exports.createUser = (req, res) => {
    const nickname = req.body.nickname.toLowerCase();
    const biography = req.body.biography;

    twitter.userAddress.then(userAddress => {
        const bodyTransaction = {
            from : userAddress,
            value : 1000000000000000000*0.5,
            gas: 3000000
        }

        twitter.twitterContract.methods.createUser(nickname, biography).send(bodyTransaction).then(result => {
            console.log("Successfully created user: " + userAddress);

            res.redirect("/home");

        }).catch(error => {
            console.log(error);

            res.redirect("/");
        })
    
    }).catch(error => {
        console.log(error);

        res.redirect("/");
    })
};

exports.profile = (req, res) => {
    twitter.twitterContract.methods.getMyTweets().call().then(tweets => {
        
        res.render("pages/profile", {
           myTweets : tweets.sort((a, b) => b.publication_date - a.publication_date) 
        });
    });
};

exports.home = (req, res) => {
    twitter.twitterContract.methods.feed().call().then(tweets => {
        console.log(tweets);
        res.render("pages/home", {
            tweets : tweets.sort((a, b) => b.publication_date - a.publication_date)
        });

    }).catch(error => {
        console.log(error);

        res.redirect("/");
    });
};

exports.publishTweet = (req, res) => {
    const tweet = req.body.tweet;

    twitter.userAddress.then(userAddress => {
        const bodyTransaction = {
            from : userAddress,
            value : 1000000000000000000*0.1,
            gas : 3000000
        }

        twitter.twitterContract.methods.postTweet(tweet).send(bodyTransaction).then(result => {
            
            res.redirect("/profile");
        });
    }).catch(error => {
        console.log(error);

        res.redirect("/profile")
    });

};
 
exports.findUser = (req, res) => {
    const query = req.body.query;

    if (query.substring(0,2) == "0x") {
        twitter.twitterContract.methods.searchUserByAddress(query).call().then(userFound => {
            
            res.render("pages/search", {
                user : userFound,
                link : "/follow/" + userFound.id
            });
        }).catch(error => {
            console.log(error);

            res.redirect("/home");
        });
    }
    else {
        twitter.twitterContract.methods.searchUserByNickname(query).call().then(userFound => {
            const link = "/follow/" + userFound.id;

            res.render("pages/search", {
               user : userFound,
               link : "/follow/" + userFound.id
            });
        }).catch(error => {
            console.log(error);

            res.redirect("/home");
        });
    }
};

exports.follow = (req, res) => {
    const userToFollow = req.params.id;

    twitter.userAddress.then(userAddress => {
        const bodyTransaction = {
            from : userAddress,
            value : 1000000000000000000*0.3,
            gas : 3000000
        }

        twitter.twitterContract.methods.follow(userToFollow).send(bodyTransaction).then(result => {

            res.redirect("/home");
        }).catch(error => {
            console.log(error);

            res.redirect("/home");
        });
    }).catch(error => {
        console.log(error);

        res.redirect("/home");
    })

};


exports.following = (req, res) => {
    twitter.twitterContract.methods.getFollowing().call().then(users => {
        console.log(users);
        res.render("pages/following", {
           users : users 
        });
    }).catch(error => {
        console.log(error);

        res.redirect("/home");
    });
};