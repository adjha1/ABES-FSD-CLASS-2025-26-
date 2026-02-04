const http = require('http');
const myserver = http.createServer((req, res) => {
    // console.log("server1");
    // res.end("this is my first server");
    if (req.url == '/') {
        res.end("this is my home page");
    }
    else if (req.url == '/about') {
        res.end("this is my about us page")
    }
    else {
        res.end("404 page is not found")
    }

})
myserver.listen(8000, () => console.log("server is run"))
