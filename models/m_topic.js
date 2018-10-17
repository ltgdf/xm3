const db = require('../tools/db_config');

exports.findAllTopic = (callback) => {
    const sql = 'SELECT * FROM `topics` ORDER BY `createdAt` DESC'
    db.query(sql, (err, data) => {
        if (err) {
            return callback(err)
        }
        callback(null, data)
    })
}

exports.addTopic = (body, callback) => {
    const sql = 'INSERT INTO `topics` set ?'
    db.query(sql, body, (err, data) => {
        if (err) {
            return callback(err)
        }
        callback(null, data)
    })
}


exports.findTopicById = (topicID, callback) => {
    const sql = 'SELECT * FROM `topics` WHERE id=?'
    db.query(sql, topicID, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data)
    })
}