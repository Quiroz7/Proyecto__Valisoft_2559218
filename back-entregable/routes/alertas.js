const { Router } = require('express')

const alertRoute = Router()

const { getAlerta, postAlerta, putAlerta, deleteAlerta} = require('../controllers/alerta')

const  {isAuthenticated}  = require('../controllers/auth')

alertRoute.get('/',isAuthenticated,  getAlerta)

alertRoute.post('/', isAuthenticated, postAlerta)

alertRoute.put('/', isAuthenticated, putAlerta)

alertRoute.delete('/', isAuthenticated, deleteAlerta)

module.exports = alertRoute