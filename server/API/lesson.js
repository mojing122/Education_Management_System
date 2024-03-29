let db = require('../db/index')

//查询基本信息
exports.info = (req, res) => {
  var sql = 'select * from student,class where studentno = ? and student.classno=class.classno'
  db.query(sql, [req.query.studentno],(err, data) => {
    if(err) {
      return res.send('错误：' + err.message)
    }
    res.send(data)
  })
}

//修改学生信息
exports.update_info = (req, res) => {
  var sql = 'UPDATE student SET sname=?,sex=?,birthday=?,phone=?,Email=?,password=? WHERE studentno=?'
  db.query(sql, [req.query.sname,req.query.sex,req.query.birthday,req.query.phone,req.query.Email,req.query.password,req.query.studentno],(err, data) => {
    if(err) {
      return res.send('错误：' + err.message)
    }
    console.log('UPDATE SUCESS')
    res.send(data)
  })
}

//查询所有课程
exports.all_lesson = (req, res) => {
  var sql = 'SELECT * FROM course_detial'
  db.query(sql,(err, data) => {
    if(err) {
      return res.send('错误：' + err.message)
    }
    res.send(data)
  })
}

//搜索课程
exports.search_lesson = (req, res) => {
  var sql = 'SELECT * FROM course_detial WHERE courseno=? '
  db.query(sql,[req.query.courseno],(err, data) => {
    if(err) {
      return res.send('错误：' + err.message)
    }
    res.send(data)
  })
}

//查询可选课程
exports.able_lesson = (req, res) => {
  var sql = 'SELECT * FROM course_detial WHERE courseno not in (select courseno from score where studentno=?)'
  db.query(sql, [req.query.studentno],(err, data) => {
    if(err) {
      console.log('INSERT FAILL',[req.query.studentno])
      return res.send('错误：' + err.message)
    }
    res.send(data)
  })
}

//插入选课数据
exports.add_lesson = (req, res) => {
  var sql = 'INSERT INTO score(studentno,courseno) VALUES(?,?)'
  db.query(sql, [req.query.studentno,req.query.courseno],(err, data) => {
    if(err) {
      console.log('INSERT FAILL',[req.query.studentno,req.query.courseno]);
    }
    res.send(data)
    console.log('INSERT SUCESS');
  })
}

//查询已选课程
exports.choosed_lesson = (req, res) => {
  var sql = 'select * from score,course where studentno=? and usually is NULL and course.courseno=score.courseno'
  db.query(sql, [req.query.studentno],(err, data) => {
    if(err) {
      console.log('SELECT FAILL',[req.query.studentno])
      return res.send('错误：' + err.message)
    }
    res.send(data)
  })
}

//查询已修课程
exports.history_lesson = (req, res) => {
  var sql = 'select * from score,course where studentno=? and usually is not NULL and course.courseno=score.courseno'
  db.query(sql, [req.query.studentno],(err, data) => {
    if(err) {
      console.log('SELECT FAILL',[req.query.studentno])
      return res.send('错误：' + err.message)
    }
    res.send(data)
  })
}

//取消选课
exports.cancel_lesson = (req, res) => {
  var sql = 'DELETE FROM score WHERE studentno=? AND courseno=?'
  db.query(sql, [req.query.studentno,req.query.courseno],(err, data) => {
    if(err) {
      console.log('SELECT FAILL',[req.query.studentno])
      return res.send('错误：' + err.message)
    }
    res.send(data)
  })
}
