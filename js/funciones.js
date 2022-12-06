document.write('<script src="funciones.js"></script>');
//Solicitar al usuario que ingrese a su usuario para luego ingresar su edad, peso y altura para calcular su IMC


//Solicitar al usuario que entre a su cuenta
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

//Solicitar su edad al usuario

let ingresarEdad = parseInt(prompt("Ingrese su edad"));
if (ingresarEdad >= 18) {
    alert("Eres mayor de edad por lo cual puedes acceder al contenido ")
    console.log("Eres mayor de edad estás apto para ver sin supervision adulta")
} else {
    alert("No eres mayor de edad");
    let ingresarEdad = parseInt(prompt("Ingrese su edad"));
}

//solicitar altura expresada en Cm

let ingresarAltura = parseInt(prompt("Ingresar su altura en CM"));
console.log("Usted mide " + ingresarAltura);

let calcularAltura = (ingresarAltura * ingresarAltura);

//Solicitar el peso expresado en Kg

let ingresarPeso = parseInt(prompt("Ingresar su peso en Kg"))
console.log("Usted pesa " + ingresarPeso)

//Resultado

let resultado = (ingresarPeso / calcularAltura);
console.log("Tu IMC es de " + resultado);
alert("Tu IMC es de " + resultado);

if (resultado <= 0.00185) {
    alert("En este caso estas por debajo de tu peso ideal, te recomendamos que visites a un especialista");
    console.log("Estas en el rango de bajopeso");
    abrirFormulario();
} else if ((resultado >= 0.00185) && (resultado <= 0.00249)) {
    alert("En este caso estas en tu peso ideal");
    console.log("Estas en tu peso ideal");
} else if ((resultado >= 0.0025) && (resultado <= 0.00299)) {
    alert("En este caso estás en un rango de sobrepeso, te recomendamos que visites a un especialista");
    console.log("En este caso estás en un rango de sobre peso");
    abrirFormulario();
} else if ((resultado >= 0.0030) && (resultado <= 0.00349)) {
    alert("En este caso estas en un rango de Obesidad 1, te recomendamos que visites a un especialista");
    console.log("En este caso estas en un rango de Obesidad 1");
    abrirFormulario();
} else if ((resultado >= 0.0035) && (resultado <= 0.00399)) {
    alert("En este caso estas en un rango de Obesidad 2, te recomendamos que visites a un especialista");
    console.log("En este caso estas en un rango de Obesidad 2");
    abrirFormulario();
} else {
    alert("En este caso estas en un rango de Obesidad 3 o tambien llamado Obesidad Morbida, te recomendamos que visites a un especialista")
    console.log("En este caso estas en un rango de Obesidad 3 o tambien llamado Obesidad Morbida")
    abrirFormulario();
}

function abrirFormulario() {
    let ingresarNombre = prompt("Ingrese su nombre para confirmar");
    console.log("Su nombre es " + ingresarNombre)
    let apellido = prompt("Ingrese su apellido: ");
    console.log("Su apellido es " + apellido)
    let numeroDni = prompt("Ingrese su numero de DNI: ");
    console.log("Su numero de DNI es " + numeroDni)
    let telefono = prompt("Ingrese su telefono para que nos contactemos: ");
    console.log("Su telefono es " + telefono);
    alert("A continuacion le mostramos los datos ingresados para que chequee si son correctos o no: Su nombre es: " + ingresarNombre + " su apellido es: " + apellido + ", su numero de telefono es:" + telefono + ", su DNI es:" + numeroDni);
    console.log("Muestra de datos ingresados")
    alert("En la brevedad nos comunicaremos para agendarle un turno con nuestros especialistas");
    console.log("En la brevedad nos comunicaremos con usted")
}
