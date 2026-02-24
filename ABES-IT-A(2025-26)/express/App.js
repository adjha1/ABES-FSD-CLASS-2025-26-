const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('hello this is ..........')
})

app.listen(port, () => {
    console.log(`server is run at http://localhost:${port}`);
})
