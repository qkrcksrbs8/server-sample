"use strict";

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

        console.log(id, psword);

        if (users.id.includes(id)) { 
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                console.log("성공");
                return res.json({
                    success: true,
                })
            }
        }

        console.log("실패");

        return res.json({
            success: false,
            msg: "로그인에 실패하였습니다.",
        })
    },
};

module.exports = {
    output,
    process,
};
  