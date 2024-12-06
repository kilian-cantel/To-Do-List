const express = require('express');
const app = express();
const port = 3000;
const path = "/home/kilian/Documents/Projects/To-Do List";

app.get('/home', (req, res) => {
    res.sendFile(path + '/front/index.html');
});

app.get("/css/home.css", (req, res) => {
    res.sendFile(path + "/front/css/home.css");
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});