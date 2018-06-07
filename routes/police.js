// 报警接口
var express = require('express');
var router = express.Router();

//引入数据库包和sql语句，返回结构
var sql = require("../config/sqlConfig.js");
var dataConfig = require("../config/dataConfig")
var policeSQL = require("../sql/policeSQL")
/**
 * 查询列表页
 */

router.get('/list', function (req, res, next) {
  sql.query(policeSQL.list, function (err, rows) {
    if (err) {
      res.json(dataConfig(-1, err, null));
    } else {
      res.json(dataConfig(0, '请求成功', rows));
    }
  })
});

router.get('/policeDetail', function (req, res, next) {

  console.log(req.query.uuid)
  if (req.query.uuid) {
    sql.query(policeSQL.policeDetail(req.query.uuid), function (err, rows) {
      if (err) {
        res.json(dataConfig(-1, err, null));
      } else {
        res.json(dataConfig(0, '请求成功', rows));
      }
    })
  } else {
    res.json(dataConfig(-1, '请传参数', null));
  }
});

router.get('/policeList', function (req, res, next) {

  console.log(req.query.eventId)
  if (req.query.eventId) {
    sql.query(policeSQL.policelist(req.query.eventId), function (err, rows) {
      if (err) {
        res.json(dataConfig(-1, err, null));
      } else {
        res.json(dataConfig(0, '请求成功', rows));
      }
    })
  } else {
    res.json(dataConfig(-1, '请传参数', null));
  }
});

module.exports = router;