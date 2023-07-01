const { Router } = require('express')

const usuRoute = Router()

const { getUsuario, postUsuario, putUsuario, deleteUsuario} = require('../controllers/usuario')

const  {isAuthenticated}  = require('../controllers/auth')

usuRoute.get('/', isAuthenticated, getUsuario)

usuRoute.post('/', isAuthenticated, postUsuario)

usuRoute.put('/', isAuthenticated, putUsuario)

usuRoute.delete('/', isAuthenticated,deleteUsuario)

module.exports = usuRoute
