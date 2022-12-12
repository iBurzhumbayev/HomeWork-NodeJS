let fs = require('fs');

function getFirstWord (n) {
    let data = fs.readFileSync(n, {encoding: 'utf-8'})
    let arr = data.toString().split(' ')
    return `Первое слово: ${arr[0]}`
}

function getLastWord (n) {
    let data = fs.readFileSync(n, {encoding: 'utf-8'})
    let arr = data.toString().split(' ')
    return `Последнее слово: ${arr[arr.length - 1]}`
}

module.exports = {getFirstWord, getLastWord}