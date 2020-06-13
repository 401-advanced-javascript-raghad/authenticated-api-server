'use strict';

const express = require('express');
const router = express.Router();
const notFoundHandler = require('../middleware/404');
// const serverErrorHandler = require('../middleware/500');
const getModel = require('../middleware/getModel');
const bearerAuth = require('../auth/middleware/bearer-auth');
const permissions = require('../auth/middleware/authorize');

router.param('model',getModel);

router.get('/:model', handleGetAll);
router.get('/:model/:id', handleGetOne);
router.post('/:model',bearerAuth, permissions('add'), handlePostAll);
router.put('/:model/:id',bearerAuth, permissions('change'), updateModel);
router.patch('/:model/:id',bearerAuth, permissions('change'), patchModel);
router.delete('/:model/:id',bearerAuth, permissions('remove'), deleteModel);


function handlePostAll(req, res, next){ 
  req.model.create(req.body)
    .then(data =>{
      res.status(201).json(data);
    }).catch(next);
}
  
function handleGetAll(req, res, next){ 
  req.model.get()
    .then(data =>{
      res.status(200).json(data);
    }).catch(next);
}

function handleGetOne(req, res, next){ 
  req.model.get(req.params.id)
    .then(data =>{
      res.status(200).json(data);
    }).catch(next);
}
  
function updateModel(req, res, next){ 
  req.model.update(req.params.id,req.body)
    .then(data =>{
      res.status(201).json(data);
    }).catch(next);
}
function patchModel(req, res, next){ 
  req.model.update(req.params.id,req.body)
    .then(data =>{
      res.status(201).json(data);
    }).catch(next);
}
function deleteModel(req, res, next){ 
  req.model.delete(req.params.id)
    .then(data =>{
      res.status(200).json(data);
    }).catch(next);
}
router.use('*', notFoundHandler);
// router.use(serverErrorHandler);

module.exports = router;
