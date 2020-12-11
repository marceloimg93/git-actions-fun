const express = require('express')
const app = express();

const port = 3000;

app.get('/', (req,res) => {
    return res.send(`
        <h1>Hello World! <span style="color: green">This is AWESOME!</span></h1><br>
        <p>GitHub Actions can be really awesome... I wish my creativity for doing design stuff could be the same... lol</p>
    `)
})

app.listen(port, () => { console.log(`server is up!`) })