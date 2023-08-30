const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }, 
  duration: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  profilePicture: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  hashtags: {
    type: [String]
  }
});

module.exports = mongoose.model('itinerary', itinerarySchema);



