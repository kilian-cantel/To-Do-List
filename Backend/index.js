const express = require('express');
const app = express();
const port = 3000;
const path = __dirname;

app.get('/home', (req, res) => {
    res.sendFile(path + '/Front/index.html');
});

app.get("/css/home.css", (req, res) => {
    res.sendFile(path + "/Front/css/home.css");
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});