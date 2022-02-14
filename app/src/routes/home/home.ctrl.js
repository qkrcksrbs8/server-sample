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
    },
};

module.exports = {
    output,
    process,
};
  