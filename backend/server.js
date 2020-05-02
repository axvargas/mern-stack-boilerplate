const express = require('express');

const path = require('path');
const morgan = require('morgan');

require('./database');

const app = express();

// MIDDLEWARES
app.use(express.json());

app.use(morgan('dev')); 


// API
const users = require('./api/users');
app.use('/api/users', users);



app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
})


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});