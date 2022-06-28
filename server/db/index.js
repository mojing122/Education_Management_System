let mysql = require('mysql')

let db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'jwxt',
    port: '3306'
})

module.exports = db
