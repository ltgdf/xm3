const express = require('express')
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic');
const router = express.Router();

router.get('/signin', c_user.showSignin)
router.post('/signin', c_user.handleSignin)
router.get('/', c_topic.showTopic)
router.get('/signout', c_user.signinOut)
router.get('/topic/create', c_topic.createTopic)
router.post('/createTopic', c_topic.handleCreateTopic)
router.get('/topic/:topicID', c_topic.showDetail)
module.exports = router;