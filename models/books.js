const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  // url string for thumbnail image
  author: {
    type: String,

  },
  description: {
    type: String,

  },
  image: {
    type: String,

  },
  // url for recipe web page - unique index
  link: {
    type: String,
    default: "",
    unique: true
  },


});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
