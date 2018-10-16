const m_user = require('../models/m_user');

showSignin = (req, res) => {
    res.render('signin.html')
}
exports.handleSignin = (req, res) => {
    const body = req.body;
    m_user.checkEmail(body.email, (err, data) => {
        // console.log(data)
        if (err) {
            return res.send({
                code: 500,
                message: '服务器错误'
            })
        }
        if (!data[0]) {
            return res.send({
                code: 1,
                message: '用户不存在'
            })
        }
        if (body.password !== data[0].password) {
            return res.send({
                code: 2,
                message: '密码错误'
            })
        }

        res.send({
                code: 200,
                message: '可以跳转了'
            })
            // res.redirect('/')        


    })


}

exports.showSignin = showSignin;