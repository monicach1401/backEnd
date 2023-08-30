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

/* Obtener itinerarios por ciudad */
router.get('/city/:cityName', (req, res) => {
  // en la variable cityName me guardo el parametro que se ha puesto en la url
  const cityName = req.params.cityName; 

  itineraryModel.find({ city: cityName }) // buscamos en itinary en su city sea igual a nuestra variable
    .then(itineraries => {
      res.send(itineraries);
    })
    .catch(err => console.log(err));
});

module.exports = router 