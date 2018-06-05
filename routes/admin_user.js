var express = require('express');
var router = express.Router();

//引入数据库包
var sql = require("../sql/sqlConfig.js");
/**
 * 查询列表页
 */
router.get('/', function (req, res, next) {
  sql.query('select * from admin_user', function (err, rows) {
    if (err) {
      console.log(err)
      res.render('index.ejs', { title: 'Express', datas: [] });
    } else {
      res.render('index.ejs', { title: 'Express', datas: rows });
    }
  })
});

module.exports = router;