const { Schema, model} = require('mongoose')

const UsuarioSchema = Schema({
    nombreUsu: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    contrasenaUsu: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },

    emailUsu: {
        type: String,
        required: [true, 'El email es obligatorio']
    },
    
    rolUsu: {
        type: String,
        enum: ['Admin' , 'Auxiliar'],
        required: [true, 'El rol es obligatorio']
    },

    estadoUsu: {
    type: Boolean,
    default: true,
    required: [true, 'El estado es obligatorio']
    }
})

module.exports = model('Usuario', UsuarioSchema)