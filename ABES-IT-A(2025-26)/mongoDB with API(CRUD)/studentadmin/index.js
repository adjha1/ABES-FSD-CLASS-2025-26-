const express = require('express')
const cors = require('cors')
const port = 8000;
const app = express();
app.use(express.json())
app.use(cors())

//app.use()
const dbconn = require('./db')
dbconn();
const Student = require('./studentschema')
app.get('/', (req, res) => {
    res.send("<h1>MY CRUD APP</h1>")
})

//API for read
app.get('/add', async (req, res) => {
    // console.log("Db conn" + dbconn)
    const student = new Student({
        roll: 9090,
        name: 'Aditya Kumar Jha',
        branch: "CSE",
        college: "ABES Engineering College"

    })
    await student.save();
    res.send({ msg: "Student Added Successfully!!" })
})

app.listen(port, () => {
    console.log(`server run at http://localhost:${port}`);
})