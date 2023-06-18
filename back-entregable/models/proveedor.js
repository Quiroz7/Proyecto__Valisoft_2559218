const { Schema, model } = require('mongoose')

const ProveedorSchema = Schema ({
    nombreProveedor: {
        type: String,
        required: [true, 'El nombre del proveedor es requerido']
    },

    nit: {
        type: Number,
        required: [true, 'El NIT del proveedor es requerido']
    },

    emailProv: {
        type: String,
        required: [true, 'EL email del proveedor es requerido']
    },

    telefonoProv: {
        type: Number,
        required: [true, 'El teléfono del proveedor es requerido']
    },

    categoriaProv: {
        type: String,
        enum : ['Lácteos' , 'Licores' , 'Abarrotes' , 'Gaseosas' , 'Aseo', ],
        required: [true, 'La categoría del proveedore es requerida']
    },

    estadoProv: {
        type: Boolean,
        default: true,
        required: [true, 'EL estado del proveedor es requerido']
    }
})

module.exports = model('Proveedor', ProveedorSchema)