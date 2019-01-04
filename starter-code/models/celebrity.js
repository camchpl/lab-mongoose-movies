// requires mongoose module for us to use
const mongoose = require('mongoose')

const celebritySchema = new mongoose.Schema({
  name: String,
  occupation: String,
  catchPhrase: String, 
})

// creates a new model "Book"
const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity