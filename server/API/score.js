let db = require('../db/index')

exports.my_score = (req, res) => {
  var sql = 'SELECT * FROM avg_scroe,score WHERE avg_scroe.courseno=score.courseno AND studentno=? AND usually IS NOT NULL'
  db.query(sql, [req.query.studentno],(err, data) => {
    if(err) {
      return res.send('错误：' + err.message)
    }
    res.send(data)
  })
}

exports.all_score = (req, res) => {
  var sql = 'SELECT * FROM avg_scroe'
  db.query(sql,(err, data) => {
    if(err) {
      return res.send('错误：' + err.message)
    }
    res.send(data)
  })
}
