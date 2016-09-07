/**
 * Created by lilei on 16-9-1.
 */
var models = require('../../db');

exports.getUser = function (id, callback) {
  models.User.findOne({
    where: {id: Number(id)}
    , attributes: ['id',   'qq', 'user_name']
  }).then(function (user) {
    callback(user);
  });
}
