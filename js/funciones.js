document.write('<script src="funciones.js"></script>');

//Solicitar al medico que ingrese a su usuario para luego ingresar datos del paciente como peso y altura para calcular su IMC

//Solicitar al medico que entre a su cuenta
for (let i = 1; i <= 3; i++) {
    let usuario = prompt("Ingresa tu nombre de usuario");
    let password = prompt("Ingresa tu contraseña");
    if ((usuario == "User") && (password == "1234")) {
        alert("Bienvenido " + usuario);
        break;
    } else {
        alert("Usuario y/o contraseña erroneo");
    }
}


//Nombre del paciente
let nombrePaciente =prompt("ingresar nombre del paciente");
console.log("El nombre del paciente es " + nombrePaciente);

//solicitar altura expresada en Cm
let ingresarAltura = parseInt(prompt("Ingresar su altura en CM"));
console.log("Usted mide " + ingresarAltura);

//Solicitar el peso expresado en Kg
let ingresarPeso = parseInt(prompt("Ingresar su peso en Kg"))
console.log("Usted pesa " + ingresarPeso);

class Paciente{
    constructor (nombre, altura, peso) {
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
    }
    
    calcularImc() {
        this.imc = this.peso / (this.altura * this.altura);
    }
}

const nuevoPaciente = new Paciente(nombrePaciente, ingresarAltura, ingresarPeso);
nuevoPaciente.calcularImc();
console.log(nuevoPaciente);

const baseDatos= [];
baseDatos.push(new Paciente(nombrePaciente, ingresarAltura, ingresarPeso));

informarResultado(nuevoPaciente.imc);


function informarResultado(resultado) {
    console.log("Tu IMC es de " + resultado);
    alert("Tu IMC es de " + resultado);

    let tengoQueAbrirFormulario = true;
    if (resultado < 0.00185) {
        alert("En este caso estas por debajo de tu peso ideal, te recomendamos que visites a un especialista");
        console.log("Estas en el rango de bajopeso");
    } else if ((resultado >= 0.00185) && (resultado < 0.0025)) {
        alert("En este caso estas en tu peso ideal");
        console.log("Estas en tu peso ideal");
        tengoQueAbrirFormulario = false;
    } else if ((resultado >= 0.0025) && (resultado < 0.0030)) {
        alert("En este caso estás en un rango de sobrepeso, te recomendamos que visites a un especialista");
        console.log("En este caso estás en un rango de sobre peso");
    } else if ((resultado >= 0.0030) && (resultado < 0.0035)) {
        alert("En este caso estas en un rango de Obesidad 1, te recomendamos que visites a un especialista");
        console.log("En este caso estas en un rango de Obesidad 1");
    } else if ((resultado >= 0.0035) && (resultado < 0.0040)) {
        alert("En este caso estas en un rango de Obesidad 2, te recomendamos que visites a un especialista");
        console.log("En este caso estas en un rango de Obesidad 2");
    } else {
        alert("En este caso estas en un rango de Obesidad 3 o tambien llamado Obesidad Morbida, te recomendamos que visites a un especialista")
        console.log("En este caso estas en un rango de Obesidad 3 o tambien llamado Obesidad Morbida")
    }

    if (tengoQueAbrirFormulario) {
        abrirFormulario();
    }
}
function abrirFormulario() {
    let ingresarNombre = prompt("Ingrese su nombre para confirmar");
    console.log("Su nombre es " + ingresarNombre)
    let apellido = prompt("Ingrese su apellido: ");
    console.log("Su apellido es " + apellido);
    let telefono = prompt("Ingrese su telefono para que nos contactemos: ");
    console.log("Su telefono es " + telefono);
    alert("A continuacion le mostramos los datos ingresados para que chequee si son correctos o no: Su nombre es: " + ingresarNombre + " su apellido es: " + apellido + ", su numero de telefono es:" + telefono);
    console.log("Muestra de datos ingresados");
    alert("En la brevedad nos comunicaremos con el paciente para una entrevista");
    console.log("En la brevedad nos comunicaremos con el paciente para una entrevista");
}



