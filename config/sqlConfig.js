// 引入mysql
var query = {}
var mysql = require('mysql');
var pool = mysql.createPool({
  host: "localhost", //这是数据库的地址
  port: "2000",
  user: "root", //需要用户的名字
  password: "1234", //用户密码 ，如果你没有密码，直接双引号就是
  database: "huangdalong" //数据库名字
});

/**
 * @param {*} sql sql语句
 * @param {*} callback 回调函数
 */
query.query = function (sql, callback) {
  pool.getConnection(function (err, connection) {
    connection.query(sql, function (err, rows) {
      callback(err, rows);
      connection.release(); //释放链接
    });
  });
}

module.exports = query