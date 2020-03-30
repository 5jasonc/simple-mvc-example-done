const mongoose = require('mongoose');

let DogModel = {};

// Our dog schema model
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});

// Find individual dog by string name
DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return DogModel.findOne(search, callback);
};

// Create the dog model based on the schema.
DogModel = mongoose.model('Dog', DogSchema);

// Export our public properties
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;
