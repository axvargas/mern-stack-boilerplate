const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("User", userSchema, "users") //Exporto en userSchema con el nombre de USER de la colleccion "users"