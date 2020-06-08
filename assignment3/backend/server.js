const express = require('express');
const router = express.Router();
const Data = require('./data');

router.get('/texts', function(req, res){
  Data.find({}).then(function(texts){
        res.send(texts);
    });
    console.log('GET request');
});

router.post('/texts', function(req, res){
  Data.create(req.body).then(function(text){
        res.json(text);
    }).catch(error => {console.log('caught', error.text);
    });
    console.log('POST request', req.body);
});

router.delete('/texts', function(req, res){
  Data.deleteMany({}, function(texts){
        res.send(texts);
    }).catch(error => {console.log('caught', error.texts)});
    console.log('DELETE request');
});

module.exports = router;
