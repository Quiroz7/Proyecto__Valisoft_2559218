const { Router } = require('express')

const provRoute = Router()

const  { getProveedor, postProveedor, putProveedor, deleteProveedor} = require('../controllers/proveedor')

const  {isAuthenticated}  = require('../controllers/auth')

provRoute.get('/', isAuthenticated, getProveedor)

provRoute.post('/', isAuthenticated, postProveedor)

provRoute.put('/', isAuthenticated, putProveedor)

provRoute.delete('/', isAuthenticated, deleteProveedor)

module.exports = provRoute