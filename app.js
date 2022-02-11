const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('기본 경로 응답입니다.');
});

app.listen(3000, () => {
    console.log('서버가 시작되었습니다.');
})