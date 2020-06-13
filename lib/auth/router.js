'use strict';

const express = require('express');
const router = express.Router();
const users = require('./models/users/users-model');
const basicAuth = require('./middleware/basic');
router.post('/signup',signup);
router.post('/signin', basicAuth , signin);
// router.get('/users', allUsersHandler);

async function signup (req,res){
  try{
    const user = await users.save(req.body);
    const token = users.generateToken(user);
    res.status(200).json({token: token , user: user });
  }
  catch(err){
    res.status(403).send(err.message);
  }
}

function signin (req, res){
  res.status(200).json({token :req.token , user: req.user});
}

// async function allUsersHandler(req,res){
//   const result = await users.get({});
//   res.json(result);
// }

module.exports = router;