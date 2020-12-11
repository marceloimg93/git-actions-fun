const express = require('express')
const app = express();

const port = 3000;

app.get('/', (req,res) => {
    return res.send('<h1>Hello World! <span style="color: green">This is AWESOME!</span></h1>')
})

app.listen(port, () => { console.log(`server is up!`) })