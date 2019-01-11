'use strict';

const express = require('express');
const modelFinder = require('../middleware/model-finder.js');
const router = express.Router();

router.param('model', modelFinder);

// Route Definitions
router.get('/api/v1/:model', handleGetAll);
router.post('/api/v1/:model', handlePost);

router.get('/api/v1/:model/:id', handleGetOne);
router.delete('/api/v1/:model/:id', handleDelete);
router.put('/api/v1/:model/:id', handlePut);


// Route Handlers
function handleGetAll(req, res, next) {
  req.model.get()
    .then(results => {
      let count = results.length;
      res.json({ count, results });
    })
    .catch(next);
}

function handleGetOne(req, res, next) {
  let id = req.params.id;
  req.model.get(id)
    .then(results => res.status(200).json(results))
    .catch(next);
}

function handlePost(req, res, next) {
  console.log('handle post hit');
  req.model.post(req.body)
    .then(result => res.json(result))
    .catch(next);
}

function handlePut(req, res, next) {
  req.model.put(request.params.id, request.body)
    .then( result => res.status(200).json(result) )
    .catch( next );
}

function handleDelete(req, res, next) {
  req.model.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next )
}

module.exports = router;