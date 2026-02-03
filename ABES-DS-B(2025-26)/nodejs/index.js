// const { ChildProcess } = require('child_process');
const fs = require('fs');

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

fs.cpSync("./abes.txt", "./a1.txt")

