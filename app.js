const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session')
    // 导入express-mysql-session包
const MYSQLStore = require('express-mysql-session')(session)
var options = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'newssql'
}

const router = require('./router');
const app = express();

app.engine('html', require('express-art-template'));
// 处理静态资源
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));
// 配置body-parser包
app.use(bodyParser.urlencoded({
    extended: false
}));

const sessionStore = new MYSQLStore(options);

// 配置express-mysql-session包
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
}))


app.use(router); //注意这行代码写在监听端口前面
app.listen(12346, () => {
    console.log('success')
})