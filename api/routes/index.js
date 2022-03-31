const bodyParser = require('body-parser')

const pessoa = require('./pessoasRoute')

module.exports = app => {

    app.use(bodyParser.json());
    app.use(pessoa)
}