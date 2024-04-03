const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const setSchema = new Schema({
  setName: {
    type: String,
    required: 'What is the name of the set you would like to add?',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  setNumber: {
    type: String,
    required: false,
    trim: true,
  },
  setPieces: {
    type: String,
    required: 'How many pieces are in the set?',
    trim: true,
  },
  setTheme: {
    type: String,
    required: false,
    trim: true,
  },
  builderAge: {
    type: String,
    required: false,
    maxlength: 3,
    trim: true,
  },
  setRating: {
    type: Number,
    required: false,
    trim: true,
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Set = model('Set', setSchema);

module.exports = Set;
