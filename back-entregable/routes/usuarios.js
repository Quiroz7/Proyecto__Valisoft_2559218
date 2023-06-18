const { Router } = require('express')

const usuRoute = Router()

const { getUsuario, postUsuario, putUsuario, deleteUsuario} = require('../controllers/usuario')

usuRoute.get('/', getUsuario)

usuRoute.post('/', postUsuario)

usuRoute.put('/', putUsuario)

usuRoute.delete('/', deleteUsuario)

module.exports = usuRoute