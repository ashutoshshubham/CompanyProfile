const {Schema, model} = require('../connection')
const imageSchema = new Schema({
    images : String
})


module.exports = model('images', imageSchema)