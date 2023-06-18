const { response } = require('express')

const Proveedor = require('../models/proveedor')

const getProveedor = async (req, res = response ) => {
    let mensaje = ''
    try {
        const proveedores = await Proveedor.find()
        mensaje = proveedores
    } catch (error) {
        mensaje = error
    }

    res.json({
        proveedores : mensaje
    })
}

const postProveedor = async (req, res = response ) => {
    const body = req.body
    let mensaje = ''
    const proveedor = new Proveedor(body)
    try {
        await proveedor.save()
        mensaje = 'Proveedor registrado éxitosamente '
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })
}

const putProveedor = async (req, res = response ) => {
    const body = req.body
    let mensaje = ''
    try {
        await Proveedor.findOneAndUpdate({  _id:body._id} , { nombreProveedor:body.nombreProveedor, nit:body.nit, emailProv:body.emailProv, telefonoProv:body.telefonoProv, categoriaProv:body.categoriaProv, estadoProv:body.estadoProv})
        mensaje = 'Actualización éxitosa'
    } catch (error) {
        mensaje = 'Error en la actualización'
    }

    res.json({
        mensaje
    })
}

const deleteProveedor = async(req, res = response) => {
    const body = req.body
    let mensaje = ''

    try {
        // Proveedor.findOneAndDelete({ nombreProveedor:body.nombreProveedor})
        await Proveedor.deleteOne({ _id:body._id})
        mensaje = 'Eliminación éxitosa'
    } catch (error) {
        mensaje = 'Error en la eliminacion'
    }

    res.json ({
        mensaje
    })
}

module.exports = {
    getProveedor,
    postProveedor,
    putProveedor,
    deleteProveedor
}