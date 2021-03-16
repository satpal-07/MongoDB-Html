'use strict';
const mongoose = require('mongoose');

const userSchema = {
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: false,
  },
  purpose: {
    type: String,
    required: false,
  },
};

module.exports = mongoose.model('users', userSchema);
