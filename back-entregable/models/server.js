const express = require('express')

const cors = require('cors') 

const bodyParser = require('body-parser') 

// const cookieParser = require('cookie-parser');

const dbConection = require('../database/config')

class server{

    constructor() {
        this.app = express()

        this.PORT = process.env.PORT

        this.proveedorPath = '/api/proveedores'
        this.usuarioPath = '/api/usuarios'
        this.alertaPath = '/api/alertas'

        this.middlewares() 

        this.routes()

        this.dbConectar()
    }

    middlewares() {
        // this.app.use(cookieParser()); 

        this.app.use(express.static(__dirname + "/public"));

        this.app.use( cors() );

        this.app.use( bodyParser.json() )

    }

    routes() {
        this.app.use(this.proveedorPath, require('../routes/proveedores'))

        this.app.use(this.usuarioPath, require('../routes/usuarios'))

        this.app.use(this.alertaPath, require('../routes/alertas'))
    }

    async dbConectar(){
        await dbConection()
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Se está escuchando por el puerto ${this.PORT}`)
        })

    }
}

module.exports = server