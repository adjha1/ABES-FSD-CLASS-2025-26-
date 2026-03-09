const express = require('express');
const app = express();
const port = 8000;

// app.get('/', (req, res) => {
//     res.send("<h1>this is my first server page</h1>");
// })

// app.get('/about', (req, res) => {
//     res.send("this is my about page");
// })

//data store
const students = [
    {
        id: 1,
        name: "deepak",
        class: "B.tech"
    },
    {
        id: 2,
        name: "rupak",
        class: "M.tech"
    }
]

//all data read(R)
app.get('/read', (req, res) => {
    try {
        res.status(200).json({ message: "Show all data", data: students });
    }
    catch (err) {
        res.status(500).json({ message: " student data not found", error: err.message });
    }
})

//data read for id(R)
app.get('/read/:id', (req, res) => {
    try {
        const id = req.params.id;
        const student = students.find(s => s.id == id);
        if (!student) {
            return res.status(404).json({ message: "stdunt data not found" });

        }
        res.status(200).json({ message: "student data found", students });
    }
    catch (err) {
        res.status(500).json({ message: " student data not found", error: err.message });
    }
})


//data create(C)
app.post('/add', (req, res) => {
    try {
        const newstudent = {
            id: students.length + 1,
            ...req.body

        }
        students.push(newstudent);
        res.status(201).json({ message: "student data successful add", newstudent });
    }
    catch (err) {
        res.status(500).json({ message: " student data not found", error: err.message });
    }
})

app.listen(port, () => {
    console.log(`server is run at http://localhost:${port}`);
})