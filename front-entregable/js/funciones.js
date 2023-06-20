const url = 'https://project-valisoft-2559218.onrender.com/api/proveedores' 
const urlUsu = 'https://project-valisoft-2559218.onrender.com/api/usuarios' 
const urlalert = 'https://project-valisoft-2559218.onrender.com/api/alertas' 

// --> PROVEEDORES <--
const listarProveedores = async() => {
    let body = document.getElementById('contenido')
    if(body){
        let mensaje = ''
        fetch(url)//Podemos realizar peticiones HTTP. Un fetch() a una URL para obtener un archivo .json.
        .then(res => res.json() )
        .then(function (data) {
            let listarProveedores = data.proveedores
            listarProveedores.map((proveedor) => {
                mensaje +=  `<td> ${proveedor.nombreProveedor} </td>` +
                            `<td> ${proveedor.nit} </td>` +
                            `<td> ${proveedor.emailProv} </td>` +
                            `<td> ${proveedor.telefonoProv} </td>` +
                            `<td> ${proveedor.categoriaProv} </td>` +
                            `<td> ${proveedor.estadoProv ? 'Activo': 'Inactivo' } </td>` +
                            `<td><a href="editarproveedor.html?${proveedor._id}" onclick='editarProv(${JSON.stringify(proveedor)})'><i class="material-icons">border_color</i></a>
                                 <a class="btn-floating btn-large pulse" onclick='eliminarProv("${proveedor._id}")'><i class="material-icons">delete</i></a>
                            </td></tr>`
                            body.innerHTML = mensaje
            })
        })
    }
}

listarProveedores()

const crearProveedores = async() => {
    let nombreProveedor = document.getElementById('nombreProveedor').value
    let nit = document.getElementById('nit').value
    let emailProv = document.getElementById('emailProv').value
    let telefonoProv = document.getElementById('telefonoProv').value
    let categoriaProv = document.getElementById('categoriaProv').value
    let estadoProv = document.getElementById('estadoProv').value

    let proveedor = {
        nombreProveedor : nombreProveedor,
        nit : nit,
        emailProv : emailProv,
        telefonoProv : telefonoProv,
        categoriaProv : categoriaProv,
        estadoProv : estadoProv
    }
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        body:JSON.stringify(proveedor), //stringify() Es un método de JS que convierte un objeto o valor de JS en una cadena de texto JSON.
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json() )
    .then(json => {
        console.log(json.mensaje.errors)
    })
}

const editarProv = async() => {
    const queryString = window.location.search;

    const idProveedor = queryString.substring(1, queryString.length)

    const proveedores = await fetch(url)

    const data = await proveedores.json()

    const proveedorEditar = data.proveedores.filter(proveedor => proveedor._id == idProveedor)

    const proveedor = proveedorEditar[0]

    document.getElementById('_id').value = ''
    document.getElementById('nombreProveedor').value = ''
    document.getElementById('nit').value = ''
    document.getElementById('emailProv').value = ''
    document.getElementById('telefonoProv').value = ''
    document.getElementById('categoriaProv').value = ''
    document.getElementById('estadoProv').value = ''

    document.getElementById('_id').value = proveedor._id
    document.getElementById('nombreProveedor').value = proveedor.nombreProveedor
    document.getElementById('nit').value = proveedor.nit
    document.getElementById('emailProv').value = proveedor.emailProv
    document.getElementById('telefonoProv').value = proveedor.telefonoProv
    document.getElementById('categoriaProv').value = proveedor.categoriaProv
    document.getElementById('estadoProv').value = proveedor.estadoProv
}

const actualizarProveedor = async() => {
    let nombreProveedor = document.getElementById('nombreProveedor').value
    let nit = document.getElementById('nit').value
    let emailProv = document.getElementById('emailProv').value
    let telefonoProv = document.getElementById('telefonoProv').value
    let categoriaProv = document.getElementById('categoriaProv').value
    let estadoProv = document.getElementById('estadoProv').value

    let proveedor = {
        _id: document.getElementById('_id').value,
        nombreProveedor: nombreProveedor,
        nit: nit,
        emailProv: emailProv,
        telefonoProv: telefonoProv,
        categoriaProv: categoriaProv,
        estadoProv: estadoProv
    }
    fetch(url, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(proveedor),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json() )
    .then(json => {
        alert(json.mensaje)
    })
}

const eliminarProv = (_id) => {
    if(confirm('¿Está seguro de eliminar este proveedor?') == true){
        let proveedor = {
            _id: _id
        }
        fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            body: JSON.stringify(proveedor),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json() )
        .then(json => {
            alert(json.mensaje)
        })
    }
}

// --> USUARIOS <--
const listarUsuarios = async() => {
    let body = document.getElementById('contenidoUsu')
    if(body){
        let mensaje = ''
        fetch(urlUsu)
        .then(res => res.json() )
        .then(function (data) {
            let listarUsuarios = data.usuarios
            listarUsuarios.map((usuario) => {
                mensaje +=  `<td> ${usuario.nombreUsu}</td>` +
                            `<td> ${usuario.emailUsu}</td>` +
                            `<td> ${usuario.rolUsu}</td>` +
                            `<td> ${usuario.estadoUsu ? 'Activo': 'Inactivo' } </td>` +
                            `<td><a href="editarusuario.html?${usuario._id}" onclick='editarUsu(${JSON.stringify(usuario)})'><i class="material-icons">border_color</i></a>
                                 <a class="btn-floating btn-large pulse" onclick='eliminarUsu("${usuario._id}")'><i class="material-icons">delete</i></a>
                            </td></tr>`
                            body.innerHTML = mensaje
            })
        })
    }
}

listarUsuarios()

const registrarUsuario = async() => {
    
    let nombreUsu = document.getElementById('nombreUsu').value
    let contrasenaUsu = document.getElementById('contrasenaUsu').value
    let confirmarContra = document.getElementById('confirmarContra').value
    let emailUsu = document.getElementById('emailUsu').value
    let rolUsu = document.getElementById('rolUsu').value
    let estadoUsu = document.getElementById('estadoUsu').value

    let usuario = {
        nombreUsu : nombreUsu,
        contrasenaUsu : contrasenaUsu,
        emailUsu : emailUsu,
        rolUsu : 'Auxiliar',
        estadoUsu : estadoUsu
    }
    if((contrasenaUsu.length > 0 && confirmarContra.length > 0) && (contrasenaUsu == confirmarContra)){
        fetch(urlUsu, {
            method: 'POST',
            mode: 'cors',
            body:JSON.stringify(usuario),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json() )
        .then(json => {
            alert(json.mensaje)
        })
    }else{
        alert('La contraseña y la confirmación de la contraseña no coiciden')
    }
}

const editarUsu = async () => {

    const queryString = window.location.search;

    const idUsuario = queryString.substring(1, queryString.length)

    const usuarios = await fetch(urlUsu)

    const data = await usuarios.json()

    const usuarioEditar = data.usuarios.filter(usuario => usuario._id == idUsuario)

    const usuario = usuarioEditar[0]

    document.getElementById('_id').value = ''
    document.getElementById('nombreUsu').value = ''
    document.getElementById('contrasenaUsu').value = ''
    document.getElementById('confirmarContra').value = ''
    document.getElementById('emailUsu').value = ''
    document.getElementById('rolUsu').value = ''
    document.getElementById('estadoUsu').value = ''

    document.getElementById('_id').value = usuario._id
    document.getElementById('nombreUsu').value = usuario.nombreUsu
    document.getElementById('contrasenaUsu').value = usuario.contrasenaUsu
    document.getElementById('confirmarContra').value = usuario.contrasenaUsu
    document.getElementById('emailUsu').value = usuario.emailUsu
    document.getElementById('rolUsu').value = usuario.rolUsu
    document.getElementById('estadoUsu').value = usuario.estadoUsu
}

const actualizarUsu = async() => {
    let nombreUsu = document.getElementById('nombreUsu').value 
    let contrasenaUsu = document.getElementById('contrasenaUsu').value 
    let confirmarContra = document.getElementById('confirmarContra').value 
    let emailUsu = document.getElementById('emailUsu').value
    let rolUsu = document.getElementById('rolUsu').value 
    let estadoUsu = document.getElementById('estadoUsu').value 

    let usuario = {
        _id: document.getElementById('_id').value,
        nombreUsu: nombreUsu,
        contrasenaUsu: contrasenaUsu,
        emailUsu: emailUsu,
        rolUsu: rolUsu,
        estadoUsu: estadoUsu
    }
    if((contrasenaUsu.length > 0 && confirmarContra.length > 0) && (contrasenaUsu == confirmarContra)) {
        fetch(urlUsu, {
            method: 'PUT',
            mode: 'cors',
            body:JSON.stringify(usuario),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json() )
        .then(json => {
            alert(json.mensaje)
        })
    }
    else{
        alert('La contraseña y la confirmación de la contraseña no coiciden')
    }
}

const eliminarUsu = (_id) => {
    if(confirm('¿Está seguro de eliminar este usuario?') == true){
        let usuario = {
            _id: _id
        }
        fetch(urlUsu, {
            method: 'DELETE',
            mode: 'cors',
            body:JSON.stringify(usuario),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json() )
        .then(json => {
            alert(json.mensaje)
        })
    }
}

// --> ALERTAS <--

const listarAlertas = async() => {
    let body = document.getElementById('contenidoAlert')
    if(body){
        let mensaje = ''
        fetch(urlalert)
        .then(res => res.json() )
        .then(function (data) {
            let listarAlertas = data.alertas
            listarAlertas.map((alerta) => {
                mensaje += `<td> ${alerta.enteRegulatorio} </td>` +
                            `<td> ${alerta.fechaAlerta} </td>` +
                            `<td> ${alerta.mensajeAlerta} </td>` +
                            `<td> <a href="editaralerta.html?${alerta._id}" onclick='editarAlert(${JSON.stringify(alerta)}'><i class="material-icons">border_color</i></a>
                            <a class="btn-floating btn-large pulse" onclick='eliminarAlert("${alerta._id}")'><i class="material-icons">delete</i></a>
                            </td></tr>`
                            body.innerHTML = mensaje
            })
        })
    }
}

listarAlertas()

const crearAlertas = async() => {
    let enteRegulatorio = document.getElementById('enteRegulatorio').value
    let fechaAlerta = document.getElementById('fechaAlerta').value
    let mensajeAlerta = document.getElementById('mensajeAlerta').value

    let alerta = {
        enteRegulatorio: enteRegulatorio,
        fechaAlerta: fechaAlerta,
        mensajeAlerta: mensajeAlerta
    }
    fetch(urlalert, {
        method: 'POST',
        mode: 'cors',
        body:JSON.stringify(alerta),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json() )
    .then(json => {
        alert(json.mensaje)
    })
}

const editarAlert = async() => {
    const queryString = window.location.search;

    const idAlerta = queryString.substring(1, queryString.length)

    const alertas = await fetch(urlalert)

    const data = await alertas.json()

    const alertaEditar = data.alertas.filter(alerta => alerta._id == idAlerta)

    const alerta = alertaEditar[0]

    document.getElementById('_id').value = ''
    document.getElementById('enteRegulatorio').value = ''
    document.getElementById('fechaAlerta').value = ''
    document.getElementById('mensajeAlerta').value = ''

    document.getElementById('_id').value = alerta._id
    document.getElementById('enteRegulatorio').value = alerta.enteRegulatorio
    document.getElementById('fechaAlerta').value = alerta.fechaAlerta
    document.getElementById('mensajeAlerta').value = alerta.mensajeAlerta
}

const actualizarAlerta = async() => {
    let enteRegulatorio = document.getElementById('enteRegulatorio').value 
    let fechaAlerta = document.getElementById('fechaAlerta').value 
    let mensajeAlerta = document.getElementById('mensajeAlerta').value 

    let alerta = {
        _id: document.getElementById('_id').value,
        enteRegulatorio: enteRegulatorio,
        fechaAlerta: fechaAlerta,
        mensajeAlerta: mensajeAlerta
    }
    fetch(urlalert, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(alerta),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json() )
    .then(json => {
        alert(json.mensaje)
    })
}

const eliminarAlert = (_id) => {
    if(confirm('¿Está seguro de eliminar esta alerta?') == true){
        let alerta = {
            _id: _id
        }
        fetch(urlalert, {
            method: 'DELETE',
            mode: 'cors',
            body: JSON.stringify(alerta),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
    }
}

// --> LLAMADO DE LOS BOTONES <--
if(document.querySelector('#btn-crearProv')) 
    {
        document.querySelector('#btn-crearProv')
        .addEventListener('click', crearProveedores)
    }

if(document.querySelector('#btn-actualizarProv')) 
    {
        document.querySelector('#btn-actualizarProv')
        .addEventListener('click', actualizarProveedor )
    }
    const editarProveedorBody = document.querySelector('#editarProveedorBody')

    editarProveedorBody?.addEventListener('load', editarProv())

if(document.querySelector('#btn-registrarUsu'))
    {
        document.querySelector('#btn-registrarUsu')
        .addEventListener('click', registrarUsuario)
    }

if(document.querySelector('#btn-actualizarUsu'))
    {
        document.querySelector('#btn-actualizarUsu')
        .addEventListener('click', actualizarUsu)
    }

    const editarUsuarioBody = document.querySelector('#editarUsuarioBody')

    editarUsuarioBody?.addEventListener('load', editarUsu())


if(document.querySelector('#btn-crearAlert'))
    {
        document.querySelector('#btn-crearAlert')
        .addEventListener('click', crearAlertas)
    }

if(document.querySelector('#btn-actualizarAlert'))   
    {
        document.querySelector('#btn-actualizarAlert')
        .addEventListener('click', actualizarAlerta)
    }
    const editarAlertaBody = document.querySelector('#editarAlertaBody')

    editarAlertaBody?.addEventListener('load', editarAlert() )
