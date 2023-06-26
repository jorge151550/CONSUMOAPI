const formulario1= document.getElementById('btn');
formulario1.addEventListener('click', () =>{

    const expressionNombre= /^[a_zA-Z\s]+$/;
    const expressionApellidos = /^3\d{9}$/;
    const expressionCorreo = /^\S+@\S+\.\S+$/
    const expressionFechacreacion = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/\d{4}$/;
    const expressionEstado= /^[a_zA-Z\s]+$/;

    const nombreUsuario = document.getElementById('nombreC').value;
    const apellidoUsuario = document.getElementById('correoC').value;
    const correoUsuario= document.getElementById('celularC').value;
    const fechacreacionUsuario = document.getElementById('ndocC').value;
    const estadoUsuario= document.getElementById('direccionC').value;
  



    try{
        if(nombreUsuarioo=='' || apellidoUsuario=='' || correoUsuario=='' || fechacreacionUsuario=='' || estadoUsuario==''){
            throw 'por favor llenar todos los campos'
        }
        if(!expressionNombre.test(nombreUsuario)){
            throw 'nombre no valido'
        }
        if(!expressionApellidos.test(apellidoUsuario)){
                throw 'apellido no valido'
        }
        if(!expressionCorreo.test(correoUsuario)){
            throw 'correo no valido'
        }
        if(!expressionFechacreacion.test(fechacreacionUsuario)){
            throw 'fecha no valido'
        } 
        if(!expressionEstado.test(estadoUsuario)){
            throw 'estado no valido'
        }
        else{
            alert('Proceso exitoso')
            window.location.href = '/';
        }
        

    }catch(e){
        alert(e)
    }

})