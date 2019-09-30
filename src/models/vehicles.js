const db = require('../db')

const vehicles = db.model('veiculos',{
    modelo: String,
    ano: String,
})








module.exports = vehicles