const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    required: true
  },
  rating: {
    type: Number
  }

});

module.exports = mongoose.model('itinerary', itinerarySchema);



