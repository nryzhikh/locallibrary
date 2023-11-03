var express = require('express');
var router = express.Router();
const User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const new_user_instance = new User({
    name: 'John Doe',
    email: 'jd@gmail.com',
  });
   new_user_instance.save();
   new_user_instance.name = 'Jane Doe';


  res.send(new_user_instance.name);
});

module.exports = router;
