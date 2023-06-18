const { Router } = require('express')

const alertRoute = Router()

const { getAlerta, postAlerta, putAlerta, deleteAlerta} = require('../controllers/alerta')

alertRoute.get('/', getAlerta)

alertRoute.post('/', postAlerta)

alertRoute.put('/', putAlerta)

alertRoute.delete('/', deleteAlerta)

module.exports = alertRoute