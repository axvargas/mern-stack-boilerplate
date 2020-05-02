const mongoose = require('mongoose');
const connection = 'mongodb+srv://axvargas:ale1608@cluster0-4pk1v.mongodb.net/test?retryWrites=true&w=majority';
console.log(connection);
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));