"use strict";

// app 모듈 가져오기
const app = require('../app');

// 포트
const PORT = 3000;

// 서버 실행
app.listen(PORT, () => {
    console.log('서버가 시작되었습니다.');
});