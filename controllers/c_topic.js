// 渲染话题页
const m_topic = require('../models/m_topic')
const moment = require('moment')
exports.showTopic = (req, res) => {
    // res.render('index.html')
    m_topic.findAllTopic((err, data) => {
        if (err) {
            return res.send({
                code: '500',
                message: '服务器出错了'
            })
        }
        // console.log(req.session.user)
        res.render('index.html', {
            topics: data,
            user: req.session.user

        })
    })
}

exports.createTopic = (req, res) => {
    res.render('topic/create.html', {
        user: req.session.user
    })
}

exports.handleCreateTopic = (req, res) => {
    // 获取表单数据
    const body = req.body
        //给body设置createAt时间 
    body.createdAt = moment().format();
    //给每个话题添加userId 目的是为了区分当前要 添加的话题是由哪个用户创建的
    body.userId = req.session.id

    m_topic.addTopic(body, (err, data) => {
        if (err) {
            return res.send({
                code: '500',
                message: '服务器错了'
            })
        }
        res.send({
            code: '200',
            message: '发布新话题成功'
        })
    })
}


// 渲染话题详情页
exports.showDetail = (req, res) => {
    // html中  a href = '/topic/{{$value.id}}'
    //  router中 .get('/topic/:topicID');
    // 在控制器c_topic.js中 获取topicID
    // console.log(req.params); 
    // { topicID: '193' }
    const topicID = req.params.topicID;
    m_topic.findTopicById(topicID, (err, data) => {
        if (err) {
            return res.send({
                code: '500',
                message: '服务器出错了'
            })
        }
        console.log(data)
        res.render('topic/show.html', {
            topic: data[0],
            user: req.session.user
        })
    })
}