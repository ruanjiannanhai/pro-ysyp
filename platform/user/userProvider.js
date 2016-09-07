/**
 * Created by lilei on 16-9-1.
 */
var userPersistence = require('./userPersistence');

exports.getUser = function (id, callback) {
  if(!id){
    throw new Error("id must be specified");
  }

  userPersistence.getUser(id,callback);
}
