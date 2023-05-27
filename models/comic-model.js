const mongoose = require('mongoose');

const {Schema} = mongoose;

const comicSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required.'],
    minlength:[1, 'Field cannot be left blank.']
  },
  author: {
    type: String,
    required: [true, 'Author is required.'],
    minlength:[1, 'Field cannot be left blank.']
  },
  publisher: {
    type: String,
    required: [true, 'Publisher is required.'],
    minlength:[1, 'Field cannot be left blank.']
  },
  genre: {
    type: String,
    required: [true, 'Genre is required.'],
    minlength:[1, 'Field cannot be left blank.']
  },
  pages: {
    type: Number,
    required: [true, 'This is a required field.'],
    min:[1, 'Minimum pages is 1.']
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required.'],
    min:[0, 'Minimum Star Rating is 0.'],
    max: [5, 'Maximum Star rating is 5']
  },
  synopsis: {
    type: String,
    required: [true, 'Synopsis is required.'],
    minlength:[1, 'Field cannot be left blank.']
  },
  image: {
    type: String,
  },
});


const Comic = mongoose.model('Comic', comicSchema);

module.exports = Comic;