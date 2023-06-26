const url = 'https://masterapi.onrender.com/api/rol'
const listarRoles = async() => {
    let body = document.getElementById('contenido')
    if(body){
        let mensaje = ''
        

        fetch(url)//Permite llamar la API
        .then(res => res.json())
        .then(function (data) {
            let listarRoles = data.roles
            listarRoles.map((rol) => {
                mensaje += `<tr><td>${rol.nombrerol}</td>`+
                `<td>${rol.permisos}</td>`+
                `<td>${rol.funciones}</td>`+
                `<td>${rol.fechacreacion}</td>`+
                `<td>${rol.estado? 'Activo':'Inactivo' }</td>`+
                `<td><a class="waves-effect waves-light btn modal-trigger" href="#modal" onclick='editar(${JSON.stringify(rol)})'>Editar</a>
                 <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${rol._id}")'>Eliminar</a>
                </td></tr>`
                body.innerHTML = mensaje
            }   
            )
        })
    }
}

listarRoles()

const registrarRol = async() =>{

    document.querySelector('#msform').addEventListener('submit', e=>e.preventDefault())

    //Captura de valores de datos enviados desde el formulario
    let nombrerol = document.getElementById('nombrerol').value
    let permisos = document.getElementById('permisos').value
    let funciones = document.getElementById('funciones').value
    let estado = document.getElementById('estado').value


    let rol = {
        nombrerol: nombrerol,
        permisos: permisos,
        funciones: funciones,
        estado: estado,
    }

    

    // if((password.length >0 && confirmarPassword.length>0) && (password == confirmarPassword)){
        fetch(url, {
            method: 'POST',

            mode: 'cors',
            body:JSON.stringify(rol),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) //La respuesta del método POST de la API
        .then(json => {
            console.log(json)
           alert(json.mensaje)
        })
    }
    // else{
    //     alert('El password y la confirmación del Password no coinciden. Por favor verifique')
    // }


const editar = (rol) =>{
    document.getElementById('_id').value = ''
    document.getElementById('nombrerol').value = ''
    document.getElementById('permisos').value = ''
    document.getElementById('funciones').value = ''
    document.getElementById('estado').value = ''

    document.getElementById('_id').value = rol._id
    document.getElementById('nombrerol').value = rol.nombrerol
    document.getElementById('permisos').value = rol.permisos
    document.getElementById('funciones').value = rol.funciones
    document.getElementById('estado').value = rol.estado

}

const actualizarRol = async() =>{
    //Captura de valores de datos enviados desde el formulario
    let nombrerol = document.getElementById('nombrerol').value
    let permisos = document.getElementById('permisos').value
    let funciones = document.getElementById('funciones').value
    let estado = document.getElementById('estado').value

    let rol = {
        _id: document.getElementById('_id').value,
        nombrerol: nombrerol,
        permisos: permisos,
        funciones: funciones,
        estado: estado,
        tipoModificacion: 'Unitaria'
    }

    // if((password.length >0 && confirmarPassword.length>0) && (password == confirmarPassword)){
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body:JSON.stringify(rol),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) //La respuesta del método POST de la API
        .then(json => {
           alert(json.mensaje)
        })
    }
    // else{
    //     alert('El password y la confirmación del Password no coinciden. Por favor verifique')
    // }


const eliminar =(_id) => {
    if(confirm('¿Está seguro de realizar la eliminación?') == true){
            //Captura de valores de datos enviados desde el formulario
    let rol = {
        _id: _id
    }
    
    //console.log(colegio)

       fetch(url, {
            method: 'DELETE',
            mode: 'cors',
            body:JSON.stringify(rol),
            headers: {"Content-type": "application/json; charset=UTF-8"}     
        })
        .then(response => response.json()) //La respuesta del método POST de la API
        .then(json => {
           alert(json.mensaje)
        })     
    }
}

if(document.querySelector('#btnRegistrarrol'))
{
    document.querySelector('#btnRegistrarrol')
    .addEventListener('click', registrarRol)
}

if(document.querySelector('#btnActualizar'))
{
    document.querySelector('#btnActualizar')
.addEventListener('click', actualizarRol)
}



//Installar en la api(backend) los paquetes:
//cors
//body-parser
