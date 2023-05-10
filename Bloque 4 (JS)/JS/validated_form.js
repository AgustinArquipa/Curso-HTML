//Para validar primero creamos una variable que apunte al formulario
let form = document.getElementById('formulario');


function validar(){
    //la funcion trim, trae el string del input limpia
    let nameValue = document.getElementById('fullname');
    //alert(nameValue);
    //Validando el nombre
    if(nameValue.value == '' ){
        alert('Nombre vacio');
    }
};

form.addEventListener('submit', validar)

//Aca hacemos la funcion para abrir el menu
const toggleMenu = () => document.body.classList.toggle("open");