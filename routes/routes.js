const express = require('express');
const router = express.Router();

//const User = require('./models/users');

//const User = require('../models/users');
const userController = require('../controllers/controller');


//Create New User
router.post('/newUser', userController.createUser);

//getAllusers
router.get('/allUsers', userController.getAllusers);

//getuserByname
router.get('/allUsers/:name', userController.getUser);

//updateuserbyname
router.put('/allUsers/:name', userController.updateUser);

//deleteuserbyname
router.delete('/allUsers/:name', userController.deleteUser);

//getusersbycreatedtimeanddate
router.get('/usersSortedByCreatedAt', userController.getUserByCreatedAt);

//getusersbygivencoordinates
router.get('/usersByCoordinates', userController.getUserByCoordinates);


module.exports = router;