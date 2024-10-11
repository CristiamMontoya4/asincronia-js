function sum(num1, num2){
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback){ //son tres parametros, dos números y la función callback
    return callback(num1, num2);  //usa el nombre de la función, la llama y le agrega sus argumentos
    //en este caso es como si devolcieramos sum(2, 5)
}

console.log(calc(2, 5, sum)); //no es necesario usar parentesis, ya que se llamaría a la función y solo se necesita hacer referencia

//setTimeout: este permite ejecutar código en un tiempo determinado

setTimeout( //recibe una función y un tiempo en ms
    function() {
        console.log('Hola JavaScript!');
    }, 2000) //pasado dos segundos muestra el mensaje 

function gretting(name, lastname){
    console.log(`Hola ${name} ${lastname}, un gusto conocerte!`);
}

setTimeout(gretting, 2000, 'Cristiam', 'Montoya'); //del terce parametro en adelante, son los argumentos que va a recibir

/*
Comentario compañero de platzi:
Para comprender este tema, hice una función para una orden dentro de un restaurante.


function makingOrder(orden) {
    console.log(`Ready  ${orden}`);
}


function order(orden, callback) {
    console.log(`Taking order ${orden}`);
    setTimeout(() => {
        callback(orden)
    }, 3000)
    console.log(`Doing order ${orden}`,);
}

order('Burger', makingOrder);
La orden se toma, una hamburguesa.
Se empieza a preparar la orden.
La orden está lista. 🍔
Este pequeño ejercicio me ayudó a entender mejor el callback.


*/