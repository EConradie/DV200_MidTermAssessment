const mongoose = require('mongoose')

const CarsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  chasisNum: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Cars", CarsSchema)