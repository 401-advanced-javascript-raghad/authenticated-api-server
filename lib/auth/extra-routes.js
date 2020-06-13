'use strict';

const express = require('express');
const router = express.Router();

const bearerAuth = require ('../auth/middleware/bearer-auth');
const permissions = require ('../auth/middleware/authorize');


router.get('/read', bearerAuth, permissions('read'), (req, res)=> {
  res.status(200).send('Allowed reading');
});
router.post('/add', bearerAuth, permissions('add'), (req, res)=> {
  res.status(201).send('CREATED');
});
router.put('/change', bearerAuth, permissions('change'), (req, res)=> {
  res.status(200).send('UPDATED');
});
router.delete('/remove', bearerAuth, permissions('remove'), (req, res)=> {
  res.status(200).send('DELEATED');
});
module.exports =  router;