const db = require("../models");
const searchData = require("../scripts/seedDB");
const axios = require("axios");

module.exports = {
    createBooks: (req, res) => {
        res.json("ffjiebng");

    },
    getBooks: (req, res) => {
        const userSearch = req.params.search;
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + userSearch + "+maxResults=15")
            .then(response => {
                const bookData = response.data.items;
                res.json(response.data.items);
            });
    }
};

