const express = require('express');
const app = express();
require("dotenv").config();

app.get('/', (req, res) => {
    res.send(process.env.SESSION_SECRET);

})

port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
    console.log(`Server is running on ${port}`);
});