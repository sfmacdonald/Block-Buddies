const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const buildSchema = new Schema({
  buildName: {
    type: String,
    required: 'What is the name of the set you would like to add?',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  buildNumber: {
    type: String,
    required: false,
    trim: true,
  },
  buildPieces: {
    type: String,
    required: 'How many pieces are in the set?',
    trim: true,
  },
  buildTheme: {
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
  buildRating: {
    type: Number,
    required: false,
    trim: true,
  },
  buildAuthor: {
    type: String,
    required: true,
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

const Build = model('Build', buildSchema);

module.exports = Build;
