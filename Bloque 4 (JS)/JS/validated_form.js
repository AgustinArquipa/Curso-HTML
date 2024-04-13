//Para validar primero creamos una variable que apunte al formulario
const form = document.getElementById('formulario');


form.addEventListener('submit', e => {
    //el e.preventDefault sirve para pausar la pagina o algo asi
    e.preventDefault();
    validar();
    if (form.querySelectorAll('.error').length === 0) {
        form.submit(); // Envía el formulario si no hay errores de validación
    };

});

function validar(){

    //la funcion trim, trae el string del input limpia
    let nameValue = document.getElementById('fullname');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let affair = document.getElementById('affair');
    let mess = document.getElementById('message');
    //alert(nameValue);
    //inicializamos una cadena para devolver un mensage
    let warinigs = ""; //El warining estaba pensado para insertar en un small un mensaje de error
    //Iniciamos una variable que controle que este correctamente ingresado el email
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ //Esto que insetarmos se conoce como patrones de evaluar
    //Si en corchetes pone 2, 4 evualuamos aquellos correos con terminacion .info, etc
    //Validando el nombre
    if(nameValue.value.length == '' ){
        warinigs += "Nombre vacio!";
        //alert(warinigs);
        setErrorFor(nameValue, warinigs);
    }else {
        setSuccesFor(nameValue);
    }
    //Validamos el email
    if(!regexEmail.test(email.value)) {
        //Limpiamos el msj
        warinigs = '';
        warinigs += "Email invalidado!"
        setErrorFor(email, warinigs);
    }else {
        setSuccesFor(email);
    }
    //Validamos el telefono
    if(!isValidNumber(phone.value)){
        warinigs = '';
        warinigs += "Telefono invalido"
        setErrorFor(phone, warinigs);
    }else {
        setSuccesFor(phone);
    }
    //Validamos el asunto
    if(affair.value == ''){
        warinigs = ''
        warinigs += 'El asunto esta vacio!'
        setErrorFor(affair, warinigs);
    }else {
        setSuccesFor(affair)
    }
    //Validamos el msj
    if(mess.value == ''){
        warinigs = '';
        warinigs += 'Mensaje Vacio!'
        setErrorFor(mess, warinigs);
    }else {
        setSuccesFor(mess);
    }
};

//Aca hacemos la funcion para abrir el menu
const toggleMenu = () => document.body.classList.toggle("open");

//Aca hacemo la verificacion otra funcion
function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'contact-form error';
    small.innerText = message;
}

function setSuccesFor(input){
    const formControl = input.parentElement;
    formControl.className = 'contact-form succes'
}

function isValidNumber(numValue){
    return /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/.test(numValue);
}