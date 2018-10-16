const express = require('express');
const bodyParser = require('body-parser')
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


app.use(router); //注意这行代码写在监听端口前面
app.listen(12346, () => {
    console.log('success')
})