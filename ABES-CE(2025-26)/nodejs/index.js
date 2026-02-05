// const http = require('http');
// const myserver = http.createServer((req, res) => {
//     // console.log("server1");
//     // res.end("this is my first server");
//     if (req.url == '/') {
//         res.end("this is my home page");
//     }
//     else if (req.url == '/about') {
//         res.end("this is my about us page")
//     }
//     else {
//         res.end("404 page is not found")
//     }

// })
// myserver.listen(8000, () => console.log("server is run"))






// const fs = require('fs')

// fs.writeFile("./IT-A.txt", "we r student of it-a", () => { })

// fs.readFile("./IT-A.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("error", err)
//     }
//     else {
//         console.log(result)
//     }
// })


// const fs = require('fs');

// fs.cpSync("IT-A.txt", "a.txt");


// const fs = require('fs')
// fs.appendFileSync("./IT-A.txt", `and we are coder`)

// const fs = require('fs')

// fs.unlinkSync("./IT-A.txt");






const os = require('os');

console.log("platform", os.platform());
console.log("user", os.userInfo);

console.log("CPU", os.arch());

console.log("free memory", os.freemem(), "bytes");

console.log("total memory", os.totalmem(), "bytes");

console.log("system update", os.uptime());

console.log("host name", os.hostname());