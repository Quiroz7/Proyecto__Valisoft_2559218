const { response } = require('express')

const Alerta = require('../models/alerta')

const getAlerta = async (req, res = response) => {
    let mensaje = ''
    try {
        const alertas = await Alerta.find()
        mensaje = alertas
    } catch (error) {
        mensaje = error
    }

    res.json({
        alertas : mensaje
    })
}

const postAlerta = async (req, res = response) => {
    const body = req.body
    let mensaje = ''
    const alerta = new Alerta(body)

    try {
        await alerta.save()
        mensaje = 'Alerta registrada éxitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })
}

const putAlerta = async (req, res = response) => {
    const body = req.body
    let mensaje = ''

    try {
        await Alerta.findOneAndUpdate({ _id:body._id } , {enteRegulatorio:body.enteRegulatorio, fechaAlerta:body.fechaAlerta, mensajeAlerta:body.mensajeAlerta})
        mensaje = 'Actualización éxitosa'
    } catch (error) {
        mensaje = 'Error en la actualización'
    }

    res.json({
        mensaje
    })
}

const deleteAlerta = async (req, res = response) => {
    const body = req.body
    let mensaje = ''

    try {
        await Alerta.deleteOne({ _id:body._id})
        mensaje = 'Eliminación éxitosa'
    } catch (error) {
        mensaje = 'Error en la eliminación'
    }

    res.json({
        mensaje
    })
}

module.exports = {
    getAlerta,
    postAlerta,
    putAlerta,
    deleteAlerta
}