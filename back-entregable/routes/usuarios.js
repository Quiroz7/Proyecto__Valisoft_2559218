const { Router } = require('express')

const usuRoute = Router()

const { getUsuario, postUsuario, putUsuario, deleteUsuario} = require('../controllers/usuario')

const  {isAuthenticated}  = require('../controllers/auth')

usuRoute.get('/',  getUsuario)

usuRoute.post('/',  postUsuario)

usuRoute.put('/',  putUsuario)

usuRoute.delete('/',  deleteUsuario)

module.exports = usuRoute