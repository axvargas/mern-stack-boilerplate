const mongoose = require('mongoose');
const connection = process.env.MONGODB_URI || 'mongodb://localhost/stack-mern-db';
console.log(connection);
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));