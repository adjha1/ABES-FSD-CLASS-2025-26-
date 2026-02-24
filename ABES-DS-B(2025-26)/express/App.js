const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("this is my first server");
})

app.get('/about', (req, res) => {
    res.send("this is my about page");
})

app.listen(port, () => {
    console.log(`server is run at http://localhost:${port}`);
})