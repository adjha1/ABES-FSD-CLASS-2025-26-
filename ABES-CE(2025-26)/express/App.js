// const express = require('express');
// const app = express();
// const port = 8000;
// app.get('/', (req, res) => {
//     res.send("this is my first server")
// })

// app.get('/about', (req, res) => {
//     res.send("<h1>this is my about page</h1>");
// })

// app.get('/img',(req,res)=>{
//     res.send(`<img src=" "></img> `)
// })

// app.listen(port, () => {
//     console.log(`server is run at http://localhost:${port}`);
// })






const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());

//data base(json)
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

//data read(All data)
app.get('/read', (req, res) => {
    try {
        res.status(200).json({ message: "show all data", data: students });
    }
    catch (err) {
        res.status(500).json({ message: "data not found", error: err.message })
    }
})

//data read(for id)
app.get('/read/:id', (req, res) => {
    try {
        const id = req.params.id;
        const student = students.find(s => s.id == id)
        if (!student) {
            return res.status(404).json({ message: "student data is not found" })
        }
        res.status(200).json({ message: "student data is found", students });

    }
    catch (err) {
        res.status(500).json({ message: "data not found", error: err.message })
    }
})


//data is create
app.post('/add', (req, res) => {
    try {
        const nwestudent = {
            id: students.length + 1,
            ...req.body
        }
        students.push(nwestudent);
        res.status(200).json({ message: "student data is add successfull", nwestudent });
    }
    catch (err) {
        res.status(500).json({ message: "data not found", error: err.message })
    }
})


//data update
app.put('/edit/:id', (req, res) => {
    try {
        const id = req.params.id;
        const index = students.find(s => s.id == id);
        if (index == -1) {
            return res.status(404).json({ message: "student data not found" });
        }
        students[index] = {
            ...students[index],
            ...req.body
        }
    }
    catch (err) {
        res.status(500).json({ message: "data not found", error: err.message })
    }
})


//data delete
app.delete('/delete/:id', (req, res) => {
    try {
        const id = req.params.id;
        const index = students.find(s => s.id == id);
        if (index == -1) {
            return res.status(404).json({ message: "student data not found" });
        }
        students.splice(index, 1);
        res.status(200).json({ message: "student data is delete" });
    }
    catch (err) {
        res.status(500).json({ message: "data not found", error: err.message })
    }
})

app.listen(port, () => {
    console.log(`server is run at http://localhost:${port}`);
})


