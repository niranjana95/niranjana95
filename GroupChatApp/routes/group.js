const express = require('express');

const authentication = require('../middleware/auth');
const groupController = require('../controllers/group');
const requestController = require('../controllers/request');

const router = express.Router();

router.get('/members', authentication.authenticateUserGroup, groupController.getGroupMembers);

router.get('/chats', authentication.authenticateUserGroup, groupController.getGroupChats);

router.post('/addChat', authentication.authenticateUserGroup, groupController.postaddChat);

router.post('/generateRequest', authentication.authenticateUserGroup, requestController.postGenerateRequest);

router.delete('/leaveGroup', authentication.authenticateUserGroup, groupController.deleteLeaveGroup);

router.post('/uploadFile', authentication.authenticateUserGroup, groupController.postUploadFile);

module.exports = router;