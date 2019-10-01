const db = require('../db')

const customers = db.model('clientes',{
    name: String,
    street: String,
    created: { type: Date, default: Date.now },
    cep: String,
    neighborhood: String, 
    number: String,
    city: String,
    state: String,  
})








module.exports = customers