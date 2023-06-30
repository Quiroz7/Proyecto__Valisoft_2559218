const { Router } = require('express')

const provRoute = Router()

const  { getProveedor, postProveedor, putProveedor, deleteProveedor} = require('../controllers/proveedor')



provRoute.get('/',  getProveedor)

provRoute.post('/',  postProveedor)

provRoute.put('/', putProveedor)

provRoute.delete('/', deleteProveedor)

module.exports = provRoute