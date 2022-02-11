const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('기본 경로 응답입니다.');
});

app.get('/login', (req, res) => {
    res.send(
        '\
        <!DOCTYPE html>\
        <html lang="ko">\
        <head>\
            <meta charset="UTF-8">\
            <meta name="viewport" content="width=device-width, initial-scale=1.0">\
            <title>Document</title>\
        </head>\
        <body>\
            로그인 화면입니다. <br>\
            ID:<input type="text"><br>\
            PW:<input type="text"></br>\
            <button>로그인</button>\
        </body>\
        </html>\
        '
    );
});

app.listen(3000, () => {
    console.log('서버가 시작되었습니다.');
})