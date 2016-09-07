/**
 * Created by lilei on 16-9-2.
 */
var goodsSourceBasicInfo = require('./goodsSourceBasicInfoPersistence');

exports.getGoodsSourceBasicInfo = function (goodsId, success, fail) {
  if (!goodsId) {
    throw new Error("id must be specified");
  }
  return goodsSourceBasicInfo.getGoodsSourceBasicInfo(goodsId, success, fail);
};

exports.addGoodsSourceBasicInfo = function (goodsSourceBasicInfoObject, success, fail) {
  return goodsSourceBasicInfo.addGoodsSourceBasicInfo(goodsSourceBasicInfoObject, success, fail);
};


exports.modify = function (id, success, fail) {
  if (!id) {
    throw new Error("id must be specified");
  }

  goodsSourceBasicInfo.getGoodsSourceBasicInfo(id,

    function (goodsSourceBasicInfoObject) {
      goodsSourceBasicInfoObject.brand_name='ceshi1';
    goodsSourceBasicInfo.modify(goodsSourceBasicInfoObject, success, fail);
  }, function (error) {
    fail(error);
  });

};
