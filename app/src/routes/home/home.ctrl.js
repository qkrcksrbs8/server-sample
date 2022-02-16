"use strict";

const UserStorage = require('../../models/UserStorage');

const {response} = require('express');
const output = {
    home: (req, res) => {
        res.render('home/index');
    },

    login: (req, res) => {
        res.render('home/login');
    }
};

const users = {
    id: ["pcg", "admin", "test"],
    psword: ["1111", "1111", "2222"],
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;
        const userStorage = new UserStorage();
        console.log(userStorage.users);
        // console.log(id, psword);
        // const response = {};
        // if (users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);
        //     if (users.psword[idx] === psword) {
        //         response.success = true;
        //         console.log("성공");
        //         return res.json();
        //     }
        // }
        //
        // response.success = false;
        // response.msg = "로그인에 실패하였습니다.";
        // console.log("실패");
        //
        // return res.json(response);
    }
};

module.exports = {
    output,
    process,
};
  