const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true // do not want copies in the database
  },
  password: {
    type: String,
    required: [true, 'Please add a password']
  },
},
{
  timestamps: true // automatic 'created at' and 'updated at' fields
});

module.exports = mongoose.model('User', userSchema);