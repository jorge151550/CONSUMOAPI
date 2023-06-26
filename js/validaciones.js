console.log('si abri el archivo')
const formulario = document.getElementById('msform')
formulario.addEventListener('submit', e =>{
    e.preventDefault()
    const expNombre = /^[a-zA-Z\s]+$/;
    const expPrecio = /^[0-9\s]+$/;
    const expDescripcion =  /^[a-zA-Z-0-9\s]+$/;

    const nombre = document.getElementById ('nombre').value;
    const precio = document.getElementById ('precio').value;
    const descripcion = document.getElementById ('descripcion').value;

    console.log(nombre + precio + descripcion)
    try{
        if(nombre == ''|| precio == '' || descripcion ==''){
            throw 'Todos los campos son obligatorios';
        }
        if (!expNombre.test(nombre)){
            throw 'Nombre invalido';
        }
        if (!expPrecio.test(precio)){
            throw 'Precio invalido';
        }
        if (!expDescripcion.test(descripcion)){
            throw 'Descripción invalido';
        }
        else{
            alert('Proceso exitoso')
            window.location.href = '/';
        }
    }catch (e){
        alert (e);
    }

})