// const http = require('http');

// const myserver = http.createServer((req, res) => {
//     // console.log('server1');
//     // res.end('HI tihs is my first server');

//     if (req.url == '/') {
//         res.end("this tis my home page")
//     }
//     else if (req.url == '/about') {
//         res.end("this is my about page ")
//     }
//     else {
//         res.end("404 page is not found")
//     }
// });


// myserver.listen(8000, () => console.log('server is run'))

// const fs = require('fs');

// // fs.writeFileSync("./it-a.txt", "we are student of it")
// const result = fs.readFileSync("./it-a.txt", "utf-8")

// console.log(result);







const fs = require('fs');
// fs.writeFile("./ad.txt", "code is very good time pass", () => { });
// fs.readFile("./ad.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error", err)
//     }
//     else {
//         console.log(result)
//     }
// })


// fs.appendFileSync("./ad.txt", `and i am happy`);

// fs.cpSync(".a1.txt", "b1.txt");
fs.unlinkSync("./ad.txt");
