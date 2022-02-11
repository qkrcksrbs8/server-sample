const express = require('express');
const app = express();

// 앱 세팅
app.set('views', './views');
app.set('view engine', 'ejs');

const home = require('./routes/home');
app.use('/', home); // use -> 미들 웨어 등록

app.listen(3000, () => {
    console.log('서버가 시작되었습니다.');
})
