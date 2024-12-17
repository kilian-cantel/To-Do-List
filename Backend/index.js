const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../Front')));

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/../Front/index.html'));
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
