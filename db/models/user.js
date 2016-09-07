"use strict";

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true, field:'user_id'}
    , goods_id: DataTypes.BIGINT
    // , company_name: DataTypes.STRING
    , registration_code: DataTypes.STRING
    , contact: DataTypes.STRING
    , mobile: DataTypes.INTEGER
    , phone: DataTypes.INTEGER
    , address: DataTypes.STRING
    , emial: DataTypes.STRING
    , qq: DataTypes.STRING
    , wexin: DataTypes.STRING
    , level: DataTypes.INTEGER
    , is_valid: DataTypes.INTEGER
  }, {
    tableName:"sy_users"
  });


  return User;
};
