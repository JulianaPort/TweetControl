const express = require('express');
const controller = require('../../controllers/twit.controller');
const { authorize, ADMIN, LOGGED_USER } = require('../../middlewares/auth');

const router = express.Router();

/**
   * @api {get} v1/tweet/trends Get Trends
   * @apiDescription Get trends from twitter
   * @apiVersion 1.0.0
   * @apiName GetTrends
   * @apiGroup Twitter
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiError (Unauthorized 401) Unauthorized  Only authenticated users can get trends
   */
router
  .route('/trends') 
  .get(authorize(LOGGED_USER), controller.trends);

  
/**
   * @api {get} v1/tweet/:tag Get tweet 
   * @apiDescription Get tweet with a determinated tag
   * @apiVersion 1.0.0
   * @apiName GetTweet
   * @apiGroup Twitter
   * @apiPermission user
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiError (Unauthorized 401) Unauthorized  Only authenticated users can get tweets
   */
router
  .route('/:tag') 
  .get(authorize(LOGGED_USER), controller.stream);



  module.exports = router;
