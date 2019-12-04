const twitter = require('../model/twitter');

exports.login = (req, res) => {
    console.log("entrei")
    twitter.twitterContract.methods.isUser().call().then(isUser => {
        
        if (isUser) {
            res.redirect("/feed");
            
            return;
        }
        
        console.log("entrei aqui")
        res.render("pages/login");

    }).catch(error => {
        console.log(error)
        console.log("erro");    
        res.render("index");
    });
};


exports.createUser = (req, res) => {
    const nickname = req.body.nickname;
    const biography = req.body.biography;

    twitter.userAddress.then(userAddress => {
        const bodyTransaction = {
            from : userAddress,
            value : 1000000000000000000*0.5,
            gas: 3000000
        }

        twitter.twitterContract.methods.createUser(nickname, biography).send(bodyTransaction).then(result => {
            console.log("Successfully created user: " + userAddress);

            res.redirect("/feed");

        }).catch(error => {
            console.log(error);

            res.redirect("/");
        })
    
    }).catch(error => {
        console.log(error);

        res.redirect("/");
    })
};


exports.feed = (req, res) => {
    twitter.twitterContract.methods.feed().call().then(addresses => {
        
        for (address of addresses) {
            console.log(address)
        }
        res.render("pages/feed", {
            address : addresses 
        });


    }).catch(error => {
        console.log(error);

        res.redirect("/");
    });
}

exports.findTweetsByAddress = (req, res) => {
    twitter.methods.getTweetsByAddress().call().then(tweets => {
        console.log(tweets);
        res.render("index", {
            title : "Tweets",
            tweets : tweets
        });        
    }).catch(err => {
        console.log(err);
        res.status(500).jsonp({error : "Internal error"});
    });
};
