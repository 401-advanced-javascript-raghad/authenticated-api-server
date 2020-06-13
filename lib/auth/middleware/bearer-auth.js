'use strict';

const users = require('../models/users/users-model');

module.exports = (req, res, next) => {

  if (!req.headers.authorization) {
    next('User is not loggedin');
    return;
  }

  let token = req.headers.authorization.split(' ').pop();
  users.verifyToken(token)
    .then(userObject =>{
      req.user = userObject.username;
      req.capabilities = userObject.capabilities;
      next();
    })
    .catch(err => next('protected ... invalid uesr token'));
};