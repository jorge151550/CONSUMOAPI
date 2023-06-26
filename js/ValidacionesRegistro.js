const formulario = document.getElementById('msform');
formulario.addEventListener('submit', e => {
    e.preventDefault();

    const expNombre = /^[a-zA-Z]+$/;
    const expApellidos = /^[a-zA-Z]+$/;
    const expCorreo = /^\S+@\S+\.\S+$/
    const expTelefono = /^[0-9\s]+$/;
    const expContrasena = /^[0-9\s]+$/;

    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const contrasena = document.getElementById('contrasena').value;


    console.log(nombre + apellidos + correo + telefono + contrasena);

    try {
        if (nombre === '' || apellidos === '' || correo === ''|| telefono === ''|| contrasena === '') {
            throw 'Todos los campos son obligatorios';
        }

        if (!expNombre.test(nombre)) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Nombre incorrecto. ¡Solo se permiten letras!',
            });
        } else if (!expApellidos.test(apellidos)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Apellido incorrecta. ¡Solo se permiten letras!',
            });
        } else if (!expCorreo.test(correo)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Correo incorrecto.',
            });
        } else if (!expTelefono.test(telefono)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Telefono incorrecta. ¡Solo se permiten numeros.',
            });
        } else if (!expContrasena.test(contrasena)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Contraseña incorrecta. ¡Solo se permiten numeros.',
            });
        } else {
            Swal.fire({
                title: '¡Bien hecho! Te has registrado correctamente',
                icon: 'success',
            }).then(() => {
                window.location.href = '../ConsumirApi/listarUsuario.html';
            });
        }
    } catch (e) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: e,
        });
    }
});
