const { response } = require('express')

const Usuario = require('../models/usuario')

const getUsuario = async (req, res = response)  => {
    let mensaje = ''
    try {
        const usuarios = await Usuario.find()
        mensaje = usuarios
    } catch (error) {
        mensaje = error
    }

    res.json({
        usuarios : mensaje
    })
}

const postUsuario = async (req, res = response) => {
    const body = req.body
    let mensaje = ''
    const usuarios = new Usuario(body)

    try {
        await usuarios.save()
        mensaje = 'Usuario registrado éxitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })
}

const putUsuario = async (req, res = response) => {
    const body = req.body
    let mensaje = ''

    try {
        await Usuario.findOneAndUpdate({ _id:body._id} , { nombreUsu:body.nombreUsu, emailUsu:body.emailUsu, rolUsu:body.rolUsu, estadoUsu:body.estadoUsu })
        mensaje = 'Actualización exitosa'

    } catch (error) {
        mensaje = 'Error en la actualización'
    }

    res.json({
        mensaje
    })
}

const deleteUsuario = async (req, res = response) => {
    const body = req.body
    let mensaje = ''

    try {
        await Usuario.findOneAndDelete({ _id:body._id})
        mensaje = 'Eliminación éxitosa'
    } catch (error) {
        mensaje = 'Error en la eliminación'
    }

    res.json({
        mensaje
    })
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}