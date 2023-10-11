const mongoose = require('mongoose')

const CarsSchema = mongoose.Schema({
  postType: {
    type: String,
    required: true
  },
  community: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // postContent: {
  //   type: String,
  //   required: true
  // },
  // tagsSubmite: {
  //   type: String,
  //   required: true
  // }
})

module.exports = mongoose.model("Cars", CarsSchema)