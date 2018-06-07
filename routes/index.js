var express = require('express');
var router = express.Router();

var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  console.log('用户连接成功！');

  socket.on("disconnect", function () {
    console.log("用户退出");
  });

  socket.on("message", function (obj) {
    console.log('这个websocket信息是：' + obj.msg);
    io.emit("message", obj);
  });
});
//开启端口监听socket
server.listen(3001);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '隔壁家老黄', message: '欢迎来到隔壁家老黄的首个接口服务器' });
})

router.post('/setMsg', function (req, res, next) {
  io.emit('message', req.body)
  console.log(req.body)
})

module.exports = router;