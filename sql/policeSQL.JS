//报警相关 sql语句

// SELECT  
//     表名1.列名,  
//     表名2.列名,  
// FROM  
//     表名1,  
//     表名2  
// WHERE  
//     表名1.列名 = 表名2.列名  
// AND 表名2.列名 = '0001' AND  表名1.列名=表名2.列名
// ORDER BY  
//     表名2.列名 DESC;  

var policeSQL = {
  list: 'SELECT events.uuid, events.currentType, ai.projectName, ei.wtCode, events.createAt, ai.alarmType, u.`name`, u.phoneNumber	FROM events INNER JOIN alarm_info ai on events.uuid = ai.eventId INNER JOIN ev_info ei on ai.evId = ei.uuid INNER JOIN ev_records er on ei.uuid = er.evId and er.status = 0 INNER JOIN companyinfo com on er.companyId = com.uuid inner join (select companyId, name, phoneNumber from user u INNER JOIN user_role ur on u.uuid = ur.userid and ur.roleid = 1) u on com.uuid = u.companyId order by events.createAt DESC;',
  policeDetail: function (id) {
    return 'SELECT ai.phone, ei.wtCode, ei.evOrder, ai.projectName, ai.alarmType, ai.faultType,ai.memo FROM alarm_info ai LEFT JOIN ev_info ei ON ai.evId = ei.uuid WHERE ai.uuid = ' + id
  },
  policelist: function (id) {
    return 'SELECT * FROM flow  WHERE eventId = ' + id + ' order by createAt desc'
  }
}
//  events  flow  wo_info companyinfo alarm_info 
module.exports = policeSQL;