const formulario = document.getElementById('msform');

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const expNombreRol = /^[a-zA-Z\s]+$/;

    const nombreRol = document.getElementById('nombre').value;
    const permisosCheckboxes = document.querySelectorAll('input[name="permisos"]:checked');
    const funcionesCheckboxes = document.querySelectorAll('input[name="funciones"]:checked');

    try {
        if (nombreRol === '') {
            throw 'El nombre del rol es obligatorio';
        }

        if (!expNombreRol.test(nombreRol)) {
            Swal.fire({
                icon: 'warning',
                title: 'Oops...',
                text: 'Nombre del rol incorrecto. ¡Solo se permiten letras!',
            });
        } else if (permisosCheckboxes.length === 0 || funcionesCheckboxes.length === 0) {
            throw 'Debe seleccionar al menos un permiso y una función';
        } else {
            Swal.fire({
                title: '¡Rol creado!',
                text: 'El rol se ha creado correctamente.',
                icon: 'success',
            }).then(() => {
                window.location.href = '/';
            });
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
        });
    }
});
