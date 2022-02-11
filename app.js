"use strict";

// 모듈
const express = require('express');
const app = express();

// 포트
const PORT = 3000;

// 라우팅
const home = require('./routes/home');

// 앱 세팅
app.set('views', './views');
app.set('view engine', 'ejs');

// use -> 미들 웨어 등록
app.use('/', home); 

// 서버 실행
app.listen(PORT, () => {
    console.log('서버가 시작되었습니다.');
})
