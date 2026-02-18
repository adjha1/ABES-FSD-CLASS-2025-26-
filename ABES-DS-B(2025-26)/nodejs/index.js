// const { ChildProcess } = require('child_process');
// const fs = require('fs');

// fs.writeFile("./abes.txt", "we are code", () => { });
// fs.readFile("./abes.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log("Error", err)
//     }
//     else {
//         console.log(result);
//     }

// });


// fs.appendFileSync("./abes.txt", `PhD`);

// fs.cpSync("./abes.txt", "./a1.txt")

// fs.unlink("./abes.txt", (err) => {
//     if (err) {
//         console.log("Error", err)
//     }
//     else {
//         console.log("data delete")
//     }
// });




const os = require('os');

console.log("system platform", os.platform());
console.log("user info", os.userInfo());
console.log("cpu", os.arch());
console.log("free memory", os.freemem());
console.log("total memory", os.totalmem());
console.log("uptime", os.uptime());
console.log("homedir", os.homedir());
console.log("host name", os.hostname());