"use strict";

class UserStorage {
    static #users = {
        id: ["pcg", "admin", "test"],
        psword: ["1111", "1111", "2222"],
        name: ["김땅땅", "박땅땅", "오땅땅"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            return (users.hasOwnProperty(field))? newUsers[field] = users[field]:newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;