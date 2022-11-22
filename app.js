const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const port = process.env.port || 5000

const authRoute = require("./routes/auth-route")
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/netflixclone', (err) => {
    if (err) {
        console.log("oops,mongodb not connected!")
    } else {
        console.log("mongodb conencted successfully")
    }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors());
app.use("/auth", authRoute);

app.get('/', (req, res) => {
    res.send("welcome to home")
})

app.listen(port, () => {
    console.log("node server is running", port)
})