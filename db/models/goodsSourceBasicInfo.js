"use strict";

module.exports = function (sequelize, DataTypes) {
  var GoodsSourceBasicInfo = sequelize.define("GoodsSourceBasicInfo", {
    goodsId: {type: DataTypes.BIGINT, field: 'goods_id', primaryKey: true}
    , brand_name: DataTypes.STRING
    , goods_name: DataTypes.STRING
    , batch_num: DataTypes.STRING
    , business_code: DataTypes.STRING
    , source_code: DataTypes.STRING
    , specification: DataTypes.STRING
    , production_date: DataTypes.DATE
    , expiry_date: DataTypes.INTEGER
    , corporation_name: DataTypes.STRING
    , avg_sunshine_year: DataTypes.INTEGER
    , avg_humidity_year: DataTypes.INTEGER
    , air_quality: DataTypes.INTEGER
    , soil_info: DataTypes.STRING
    , part_of_farm: DataTypes.STRING
    , land_name: DataTypes.STRING
    , land_addr: DataTypes.STRING
    , land_desc: DataTypes.STRING
    , landd_type: DataTypes.STRING
    , goods_type: DataTypes.INTEGER
    , is_valid: DataTypes.INTEGER
  }, {
    tableName: "sy_goods_source_basic_info"
    , timestamps: false
  });


  return GoodsSourceBasicInfo;
};
