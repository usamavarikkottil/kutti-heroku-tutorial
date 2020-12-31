const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Home route is ready...")
})

port = process.env.PORT || 5000;
app.listen(port, (req, res) => {
    console.log(`Server is running on ${port}`);
});