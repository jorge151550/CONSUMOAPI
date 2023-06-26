const formulario = document.getElementById('msform');
formulario.addEventListener('submit', e => {
    e.preventDefault();

    const expUsuario = /^[a-zA-Z]+$/;
    const expContrasena = /^[0-9\s]+$/;

    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;

    console.log(usuario + contrasena);

    try {
        if (usuario === '' || contrasena === '') {
            throw 'Todos los campos son obligatorios';
        }
        if (!expUsuario.test(usuario)) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Usuario incorrecto. ¡Solo se permiten letras!',
            });
        } else if (!expContrasena.test(contrasena)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Contraseña incorrecta. ¡Solo se permiten números!',
            });
        } else {
            Swal.fire({
                title: 'Bien Hecho!',
                icon: 'success',
            }).then(() => {
                window.location.href = '/ConsumirApi/home.html';
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
