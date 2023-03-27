const {Schema, model} = require('../connection')
const mySchema = new Schema({
    name : String,
    type : String,
    departments : String,
    working : String,
    address : String,
    contact : Number,
    email : String,

})



module.exports = model('profile', mySchema)