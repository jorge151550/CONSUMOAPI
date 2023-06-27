const url = 'https://masterapi.onrender.com/api/rol'

    const listarRoles = async () => {
      let body = document.getElementById('contenido');
      if (body) {
        let mensaje = '';

        fetch(url)
          .then(res => res.json())
          .then(function (data) {
            let listarRoles = data.roles;
            listarRoles.map((rol) => {
              mensaje += `<tr><td>${rol.nombrerol}</td>` +
                `<td>${rol.funciones}</td>` +
                `<td>${rol.permisos}</td>` +
                `<td>${rol.fechacreacion}</td>` +
                `<td>${rol.estado ? 'Activo' : 'Inactivo' }</td>` +
                `<td><a class="waves-effect waves-light btn modal-trigger" href="#modal" onclick='editar(${JSON.stringify(rol)})'>Editar</a>` +
                `<a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${rol._id}")'>Eliminar</a>` +
                `</td></tr>`;
              body.innerHTML = mensaje;
            });
          });
      }
    }
    const registrarRol = async () => {
        const expNombreRol = /^[a-zA-Z\s]+$/;
        const nombreRol = document.getElementById('nombrerol').value;
        const permisosCheckboxes = document.querySelectorAll('input[id="permisos"]:checked');
        const funcionesCheckboxes = document.querySelectorAll('input[id="funciones"]:checked');
      
        try {
          if (nombreRol === '') {
            throw 'Todos los campos son obligatorios';
          }
      
          if (!expNombreRol.test(nombreRol)) {
            throw 'Nombres incorrectos. ¡Solo se permiten letras!';
          }
      
          if (permisosCheckboxes.length === 0 || funcionesCheckboxes.length === 0) {
            throw 'Debe seleccionar al menos un permiso y una función';
          }
      
          let nombrerol = document.getElementById('nombrerol').value;
          let estado = document.getElementById('estado').value;
      
          let funciones = [];
          let checkboxes = document.querySelectorAll('input[id="funciones"]:checked');
          checkboxes.forEach(checkbox => {
            funciones.push(checkbox.value);
          });
      
          let permisos = [];
          let checkboxespermisos = document.querySelectorAll('input[id="permisos"]:checked');
          checkboxespermisos.forEach(checkbox => {
            permisos.push(checkbox.value);
          });
      
          let rol = {
            nombrerol: nombrerol,
            funciones: funciones,
            permisos: permisos,
            estado: estado,
          };
      
          fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(rol),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          })
          .then(response => response.json())
          .then(async json => {
            await Swal.fire({
              icon: 'success',
              title: '¡Registro de Rol exitoso!',
            });
            window.location.href = 'listarRol.html';
          });
      
        } catch (e) {
          await Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: e,
          });
        }
      };
      


    const editar = (rol) => {
      document.getElementById('_id').value = rol._id;
      document.getElementById('nombrerol').value = rol.nombrerol;
      document.getElementById('estado').value = rol.estado;

      var funcionesSeleccionadas = rol.funciones;
      var checkboxes = document.querySelectorAll('input[id="funciones"]:checked');
      checkboxes.forEach(function(checkbox) {
        checkbox.checked = funcionesSeleccionadas.includes(checkbox.value);
      });

      var permisosSeleccionadas = rol.permisos;
      var checkboxesroles = document.querySelectorAll('input[id="permisos"]:checked');
      checkboxesroles.forEach(function(checkbox) {
        checkbox.checked = permisosSeleccionadas.includes(checkbox.value);
      });
    }

    const actualizarRol = async () => {
        const expNombreRol = /^[a-zA-Z\s]+$/;
        const nombreRol = document.getElementById('nombrerol').value;
        const permisosCheckboxes = document.querySelectorAll('input[id="permisos"]:checked');
        const funcionesCheckboxes = document.querySelectorAll('input[id="funciones"]:checked');
      
        try {
          if (nombreRol === '') {
            throw 'Todos los campos son obligatorios';
          }
      
          if (!expNombreRol.test(nombreRol)) {
            throw 'Nombres incorrectos. ¡Solo se permiten letras!';
          }
      
          if (permisosCheckboxes.length === 0 || funcionesCheckboxes.length === 0) {
            throw 'Debe seleccionar al menos un permiso y una función';
          }
      
          let _id = document.getElementById('_id').value;
          let nombrerol = document.getElementById('nombrerol').value;
          let estado = document.getElementById('estado').value;
      
          let funciones = [];
          var checkboxesFunciones = document.querySelectorAll('input[id="funciones"]:checked');
          checkboxesFunciones.forEach(function(checkbox) {
            funciones.push(checkbox.value);
          });
      
          let permisos = [];
          var checkboxesPermisos = document.querySelectorAll('input[id="permisos"]:checked');
          checkboxesPermisos.forEach(function(checkbox) {
            permisos.push(checkbox.value);
          });
      
          let rol = {
            _id: _id,
            nombrerol: nombrerol,
            funciones: funciones,
            permisos: permisos,
            estado: estado,
            tipoModificacion: 'Unitaria'
          };
      
          fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(rol),
            headers: { "Content-type": "application/json; charset=UTF-8" }
          })
          .then(response => response.json())
          .then(json => {
            console.log(json);
            Swal.fire({
              icon: 'success',
              title: '¡Rol Creado con Éxito!',
            });
          })
          .catch(error => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: error
            });
          });
        } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error
          });
        }
      };
      
      
const eliminar = (_id) => {
  Swal.fire({
    title: '¿Está seguro de realizar la eliminación?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      let rol = {
        _id: _id
      };

      fetch(url, {
          method: 'DELETE',
          mode: 'cors',
          body: JSON.stringify(rol),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(json => {
          Swal.fire({
            title: 'Eliminación exitosa',
            text: json.mensaje,
            icon: 'success'
          });
        })
        .catch(error => {
          Swal.fire({
            title: 'Error',
            text: 'Ocurrió un error al eliminar el rol',
            icon: 'error'
          });
        });
    }
  });
};

    listarRoles();

    if (document.querySelector('#btnRegistrar')) {
      document.querySelector('#btnRegistrar')
        .addEventListener('click', registrarRol);
    }

    if (document.querySelector('#btnActualizar')) {
      document.querySelector('#btnActualizar')
        .addEventListener('click', actualizarRol);
    }



//Installar en la api(backend) los paquetes:
//cors
//body-parser
