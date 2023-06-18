const  { Schema, model} = require('mongoose') 

const AlertaSchema = Schema({
    enteRegulatorio: {
        type: String,
        required: [true, 'El nombre de la entidad es obligatoria']
    },

    fechaAlerta: {
        type: Date,
        require: [true, 'La fecha es obligatoria']
    },

    mensajeAlerta: {
        type: String,
        required: [true, 'El mensaje es obligatorio']
    }
})

module.exports = model('Alerta', AlertaSchema)