import express from 'express'
const app = express()
const port = 4001
//middleware
app.use(express.json())

//creare array for store data
const students = [
    {
        id: 1,
        name: "aditya",
        class: "b.tech"
    }
]
//first route
app.get('/', (req, res) => {
    try {
        res.status(200).json({ message: "show all student", data: students })
    }
    catch (err) {
        res.status(500).json({ message: "data not fetch", error: err.message })
    }
})

//search data for student
app.get('/:id', (req, res) => {
    try {
        const id = res.params.id;
        const student = students.find(s => s.id == id);
        if (!student) {
            return res.status(404).json({ message: " student not found", data: student })
        }
        res.status(200).json({ message: "fount student" });

    } catch (err) {
        res.status(500).json({ message: "failed to fetch", error: err.message })
    }
})


//create data
app.post('/add', (req, res) => {
    try {
        const newStudent = {
            id: students.length + 1,
            ...req.body
        }
        students.push(newStudent);
        res.status(201).json({ message: "student create successfully", newStudent })
    } catch (err) {
        res.status(500).json({ message: "data not save", error: err.message })
    }

})

//edit data
app.put('/edit/:id', (req, res) => {
    try {
        const id = req.params.id;
        const index = students.find(s => s.id);
        if (index == -1) {
            return res.status(404).json({ message: "student not found" })
        }
        students[index] = {
            ...students[index],
            ...req.body
        }
        res.status(200).json({ message: "data successfully updated", ...req.body })

    }
    catch (err) {
        res.status(500).json({ message: "data not save", error: err.message })
    }
})

//delete data
app.delete('/delete/:id', (req, res) => {
    try {
        const id = req.params.id;
        const index = students.find(s => s.id);
        if (index == -1) {
            return res.status(404).json({ message: "student not found" })
        }
        students.splice(index, 1);
        res.status(200).json({ message: "data successfully delete" })
    }
    catch (err) {
        res.status(500).json({ message: "data not save", error: err.message })
    }

})

app.listen(port, () => {
    console.log(`surver run at http://localhost:${port}`)
})