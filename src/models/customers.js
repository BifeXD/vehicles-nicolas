const db = require('../db')

const customers = db.model('clientes',{
    name: String,
    street: String,
    created: { type: Date, default: Date.now }
})








module.exports = customers