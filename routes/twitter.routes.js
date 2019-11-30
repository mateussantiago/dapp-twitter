const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const twitterController = require('../controller/twitter.controller');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.get('/', twitterController.findTweetsByAddress);

module.exports = router; 
