let db = require('../db/index')

exports.login = (req, res) => {
  var sql = 'select * from student where studentno = ? and password = ?'
  db.query(sql, [req.query.name, req.query.password], (err, data) => {
      if(err) {
          return res.send({
            status: 400,
            message: "登录失败"
          })
      }

      if(data.length > 0) {
        res.send({
          status: 200,
          data: data,
          message: "登录成功"
        })
      }else{
        res.send({
          status: 202,
          message: '用户名或密码错误'
        })
      }
  })
}

exports.show = (req, res) => {
  var sql = 'select * from student'
  db.query(sql, [req.query.name, req.query.password], (err, data) => {
    if(err) {
      return res.send({
        status: 400,
        message: "登录失败"
      })
    }

    if(data.length > 0) {
      res.send({
        status: 200,
        message: "登录成功"
      })
    }else{
      res.send({
        status: 202,
        message: '用户名或密码错误'
      })
    }
  })
}
