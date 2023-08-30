const express = require('express');
const itineraryModel = require('../model/itineraryModel');
const router = express.Router(); 

/*Test*/
router.get('/test', (req, res) => {
    res.send({ msg: 'itinerarys test route.' });
  });

/*get all itinerarys*/
router.get('/all', (req, res) => {
  itineraryModel.find()
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});



module.exports = router 