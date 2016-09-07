/**
 * Created by lilei on 16-9-4.
 */
var redis = require('redis');
var config = {
  host: '127.0.0.1'
  , port: 6379
}
var client = redis.createClient(config);

client.on('connect',function () {
  console.log('redis is connect !');
});

module.exports = client;
