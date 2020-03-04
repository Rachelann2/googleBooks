const app = require("express").Router();
const BookController = require("../../controller/bookController");


app.route("/").post(BookController.createBooks);

app.route("/:search").get(BookController.getBooks);



module.exports = app;