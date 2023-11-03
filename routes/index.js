var express = require('express');
var router = express.Router();
const Book = require('../models/book');

/* GET home page. */
router.get("/", function (req, res) {
  res.render("catalog", { title: "Local Library Home" });
});

  module.exports = router;
