const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors())

app.get('/', (req, res) => {
    res.send("this is my first server");
})
app.get('/api/about', (req, res) => {

    const students = [
        {
            id: 1,
            name: "aditya",
            class: "10"
        },
        {
            id: 2,
            name: "deepak",
            class: "10"
        }
    ]
    res.send(students);
})

app.listen(port, () => {
    console.log(`server is run at:http://localhost:${port}`)
})

