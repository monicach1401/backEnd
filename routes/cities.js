const express = require('express');
const cityModel = require('../model/cityModel')

const router = express.Router(); 
// Test 
/*router.get('/test', (req, res) => {
    res.send({ msg: 'Cities test route.' });
  });*/

/*get all cities*/
router.get('/all', (req, res) => {
  cityModel.find()
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

/*post new City */
router.post('/', (req, res) => {
  const nuevaCiudad = new cityModel({
    name: req.body.name,
    country: req.body.country,
    img:req.body.img
  });

  nuevaCiudad.save()
    .then(ciudad => {
      res.send(ciudad);
    })
    .catch(err => {
      res.status(500).send("Server error");
    });
});

module.exports = router 