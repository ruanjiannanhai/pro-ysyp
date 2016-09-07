var express = require('express');
var router = express.Router();
var userModel = require('../platform/user');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  userModel.getUser(Number(id),function (user) {

    res.json(user);
  });
});

module.exports = router;
