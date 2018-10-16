// 导入数据库配置模块
const db = require('../tools/db_config');

const checkEmail = function(email, callback) {
    const sql = 'SELECT * FROM `users` WHERE email=?'
    db.query(sql, email, (err, data) => {
        if (err) {
            return callback(err)
        }
        callback(null, data)
    })
}

exports.checkEmail = checkEmail;