const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const twitterController = require('../controller/twitter.controller');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.get("/", twitterController.login);
router.post("/createUser", twitterController.createUser);
router.get("/home", twitterController.home);
router.get("/profile", twitterController.profile);
router.post("/publishTweet", twitterController.publishTweet);
router.post("/searchUser", twitterController.findUser);

module.exports = router; 
