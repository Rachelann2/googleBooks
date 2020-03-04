// const axios = require("axios");
// const mongoose = require("mongoose");
// const db = require("../models");

// var userSearch = "Harry Potter";

// // This file empties the Books collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactrecipes"
// );

// const searchBooks = new Promise((resolve, reject) =>
//   axios
//     .get(
//       "https://www.googleapis.com/books/v1/volumes?q=" + userSearch + "+maxResults=15"
//     )
//     .then(response => {
//       const bookData = response.data.items;
//       // console.log(bookData);

//       const bookShown = [];

//       for (let i = 0; i < bookData.length; i++) {
//         const bookInfo = {
//           title: bookData[i].volumeInfo.title,
//           author: bookData[i].volumeInfo.authors,
//           description: bookData[i].volumeInfo.description,
//           image: bookData[i].volumeInfo.imageLinks
//         };

//         bookShown.push(bookInfo);
//       }
//       console.log(bookShown);
//       resolve(bookShown);


//     }));

// module.exports = searchBooks;