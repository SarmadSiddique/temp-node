// const age = 10
// if (age > 10) {
//     console.log("age is larger")
// } else {
//     console.log("age is smaller")
// }
// console.log("readfile node code !!!");
// globals---
// console.log(__dirname, "directory name");
// console.log(__filename, "file name");
// console.log(require, "this is called required module");
// console.log(module, "module")
// console.log(process, "process");
// setInterval(() => {
//     console.log("hey I am Sarmad")
// }, 1000);
// Buid in modules---
// 1- OS Module----
// const os = require("os");
// var user = os.userInfo();
// user = os.hostname();
// console.log(user);
// console.log(`the type of my operating system is : ${os.type}`);
// console.log(`the total memory of my operating system is : ${os.totalmem}`);
// console.log(` operating system's release : ${os.release}`);
// 2- Path Module----
// const path = require('path')
// const pathdata = path.join(__dirname, '/pathfolder', 'pathfile.txt')
// console.log(pathdata, "pathdata")
// const b = path.parse(__dirname, '/pathfolder', '/file.txt')
// console.log(b)
// 3- File Module---
// const { readFileSync, writeFileSync } = require('fs');
// const readfile = readFileSync('./pathfolder/first.txt');
// console.log(readfile.toString());
// const createfile = writeFileSync('./pathfolder/third.txt', 'hello i am third file data');
// 4- HTTP Module---
// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('welcome to the http module')


//     } if (req.url === '/about') {
//         res.end('welcome to the about page')



//     }
//     {
//         res.end(`<h1>Oops page not found...!🤔</h1>
//         <a href="/">back to home page</a>`)


//     }
// })
// server.listen(5000);
// using installed depency i.e loadash---
const _ = require('lodash');
const item = [1, [2, [3], 4]];
const newitem = _.flattenDeep(item);
console.log(newitem)

