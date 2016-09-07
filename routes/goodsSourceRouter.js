/**
 * Created by lilei on 16-9-2.
 */

var express = require('express');
var router = express.Router();
var goodSourceBasicInfoModel = require('../platform/goodSourceBasicInfo');
var obj = {
  goodsId: 5
  , brand_name: '3333'
  , goods_name: '22222'
  , batch_num: '4444444'
  , business_code: '55555555'
  , source_code: '666666666'
  , specification: '7777777'
  , production_date: '2016-09-02'
  , expiry_date: '12'
  , corporation_name: '123'
  , avg_sunshine_year: '1'
  , avg_humidity_year: '2'
  , air_quality: '211212'
  , soil_info: '123123123'
  , part_of_farm: '123123123'
  , land_name: '123123'
  , land_addr: '123123'
  , land_desc: '12333333333333333333'
  , landd_type: '1233333312311111111'
  , goods_type: '2'
  , is_valid: '1'
}


router.get('/:id', function (req, res, next) {
  var id = req.params.id;
  goodSourceBasicInfoModel.getGoodsSourceBasicInfo(Number(id),function (obj) {
    res.json({state:'1',data:obj});
  },function (error) {
    res.json({state:'0','error':error.message})
  })

});

router.post('/', function (req, res, next) {
  goodSourceBasicInfoModel.addGoodsSourceBasicInfo(obj,function (obj) {
    res.json({state:'1',data:obj});
  },function (error) {
    res.json({state:'0','error':error.message})

  });

});

router.put('/:id',function (req, res, next) {
  var id = req.params.id;

  goodSourceBasicInfoModel.modify(id,function (obj) {
    res.json({state:'1',data:obj});
  },function (error) {
    res.json({state:'0','error':error.message})

  })
});

module.exports = router;
