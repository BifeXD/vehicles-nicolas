const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:123admin@cluster0-nixlf.mongodb.net/ProjetoViculos?retryWrites=true&w=majority', { useNewUrlParser: true })
module.exports = mongoose

