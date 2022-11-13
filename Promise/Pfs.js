const { rejects } = require('assert');
const fs = require('fs');
let p = new Promise((resolve, reject) => {
    fs.readFile('file.txt', 'utf8', (err, data) => {
        if (err) reject(data)
        resolve(data);
    });
});
p.then(val => {
    console.log(val.toString());
}, err => {
    console.log(err.toString());
});