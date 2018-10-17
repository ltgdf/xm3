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

        // 将登陆的用户信息存入req.session中
        // 注意 express-session包存储的 数据不是持久化保存
        // mysql express-mysql-session  把express-session保存的信息自动req.session自动保存在数据库中
        req.session.user = data[0];

        res.send({
                code: 200,
                message: '可以跳转了'
            })
            // res.redirect('/')        


    })


}
exports.signinOut = (req, res) => {
    //清除session中保存的用户信息
    delete req.session.user
    res.redirect('/signin')
}

exports.showSignin = showSignin;