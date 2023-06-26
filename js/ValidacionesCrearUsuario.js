const formulario = document.getElementById('msform');
formulario.addEventListener('submit', e => {
    e.preventDefault();

    const expNombres = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/;
    const expApellidos = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/;
    const expCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const expTelefono = /^\d{10}$/;

    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;

    try {
        if (nombres === '' || apellidos === '' || correo === '' || telefono === '') {
            throw 'Todos los campos son obligatorios';
        }

        if (!expNombres.test(nombres)) {
            throw 'Nombres incorrectos. ¡Solo se permiten letras!';
        }

        if (!expApellidos.test(apellidos)) {
            throw 'Apellidos incorrectos. ¡Solo se permiten letras!';
        }

        if (!expCorreo.test(correo)) {
            throw 'Correo incorrecto. ¡Ingrese un correo válido!';
        }

        if (!expTelefono.test(telefono)) {
            throw 'Teléfono incorrecto. ¡Ingrese un número de teléfono válido!';
        } else {
            Swal.fire({
                icon: 'success',
                title: '¡Validación exitosa!',
                text: 'Los campos se han Registrado correctamente.',
            }).then(() => {
                window.location.href = '/';
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
