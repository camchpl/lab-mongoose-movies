const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity'); 

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
  {
      name : "Brad Pitt",
      occupation : "actor", 
      catchPhrase : "Look at my biceps"
    },

    {
        name : "Barack Obama",
        occupation : "politician",
        catchPhrase : "Be healthy"
    },

    {
        name : "Mother Queen",
        occupation : "queen",
        catchPhrase : "Bring me my hat"
    }
]

Celebrity.create(celebrities)
