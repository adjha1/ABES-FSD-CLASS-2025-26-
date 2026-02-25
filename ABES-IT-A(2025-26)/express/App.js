// const express = require('express');
// const app = express();
// const multer = require('multer');
// const port = 8000;

// app.get('/', (req, res) => {
//     res.send('hello this is ..........')
// })

// app.post('/upload',upload.single('image'),(req,res)=>{
//     console.log(req.file);
//     res.send({message:"image uploaded"});
// })

// // https://m.media-amazon.com/images/I/71cuyBfnOLL._AC_UF894,1000_QL80_.jpg
// app.get('/img', () => {
//     const img = req.body.image;
//     multer.parse(img,(err,data)=>{
//         if(err){
//             res.status(501).send("Error in parsing image",err);
//         }
//         else{
//             res.send(data);
//         }
//     });
// });

// app.listen(port, () => {
//     console.log(`server is run at http://localhost:${port}`);
// })






const express = require('express');
const app = express();
const port = 8000;

//create database
const student = [
    {
        id: 1,
        name: "deepak",
        class: "B.tch"
    },
    {
        id: 2,
        name: "rupak",
        class: "M.tch"
    }
]

//first route(show data)
app.get('/', (req, res) => {
    try {
        res.status(200).json({ message: "show all data", data: student })
    }
    catch (err) {
        res.status(500).json({ message: "page data not found", error: err.message })
    }

})

//search data from id
// app.get('/:id', (req, res) => {
//     try {
//         const id = parseInt(req.params.id);
//         const std = student.find(s => s.id == id)
//         if (!std) {
//             return res.status(404).json({ message: " student data is not found", data: student })
//         }
//         res.status(200).json({ message: "student data is found" })
//     }
//     catch (err) {
//         res.status(500).json({ message: "page data not found", error: err.message })
//     }
// })


// 

app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
        message: "Student found",
        data: student
    });
});



app.listen(port, () => {
    console.log(`server is run at http://localhost:${port}`);
})