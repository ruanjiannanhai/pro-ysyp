/**
 * Created by lilei on 16-9-2.
 */
var model = require('../../db');
var redis = require('../../db/redis');

exports.getGoodsSourceBasicInfo = function (goodsId, success, fail) {

  var key = 'goodsSourceBasicInfo#' + goodsId;

  redis.get(key, function (err, reply) {

    if (!reply) {
      model.GoodsSourceBasicInfo.findOne({
        where: {goodsId: Number(goodsId)}
      })

        .then(function (object) {
          redis.set(key, JSON.stringify(object));
          success(object);

        }).catch(function (error) {
        fail(error);
      });

    } else {

      success(JSON.parse(reply));
    }

  })

}

exports.addGoodsSourceBasicInfo = function (goodsSourceBasicInfoObject, success, fail) {
  var key = 'goodsSourceBasicInfo#' + goodsSourceBasicInfoObject.goodsId;

  return model.GoodsSourceBasicInfo.create(goodsSourceBasicInfoObject)

    .then(function () {
      redis.set(key, JSON.stringify(goodsSourceBasicInfoObject));
      success(goodsSourceBasicInfoObject);

    }).catch(function (error) {
      fail(error)
    })
}

exports.modify = function (goodsSourceBasicInfoObject, success, fail) {
  var key = 'goodsSourceBasicInfo#' + goodsSourceBasicInfoObject.goodsId;

  return model.GoodsSourceBasicInfo.update(goodsSourceBasicInfoObject, {
    where: {goodsId: Number(goodsSourceBasicInfoObject.goodsId)}
  })

    .then(function () {
      redis.set(key, JSON.stringify(goodsSourceBasicInfoObject));
      success(goodsSourceBasicInfoObject);

    }).catch(function (error) {
      fail(error)
    })
}
