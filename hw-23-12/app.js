'use strict'

const http = require('http');
const fs = require('fs')


function handler(request, response) {
    let users = fs.readFileSync('users.json', {encoding: 'utf-8'});
    if (request.url === '/users') {
        response.end(users);
    } else if (request.url === '/users/count') {
        let user = JSON.parse(users)
        let currentUser = JSON.stringify(user.length)
        response.end(`Количество пользователей: ${currentUser}`)
    } else if (request.url.includes('users/delete')) {
        let user = JSON.parse(users);

        for (let i = 0; i < user.length; i++) {
            if (user[i].id == +request.url.split('/').reverse()[0]) {
                user.splice(i, 1)
            }
        }

        fs.writeFileSync('users.json', JSON.stringify(user));
        response.end(`Пользователь удален.`);
    }
}

http.createServer(handler).listen(3000);





