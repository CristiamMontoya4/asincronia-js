//Async y Await
const fnAsync = () => {
    return new Promise((resolve, reject)=> {
        (true) 
            ? setTimeout(()=> resolve('Async!!'), 2000) 
            : reject(new Error('Error!'));
    });
}

const anotherFn = async () => {  //con la palabra reservada 'async' creamos una función asincrona
    const something = await fnAsync(); //la palabra await va dentro de async y esta espera a que se termine de ejecutar, para continuar
    console.log(something);
    console.log('Hello!'); //pero este hello si debe esperar a something
}

console.log('Before');
anotherFn();
console.log('After');

//como tal no se frena la ejecución, esto porque javascript, da prioridad a lo que pueda ejecutar, mientras que las funciones
//asincronas quedan en reserva en la webAPI, ya terminando lo que puede ejecutar, el event loop le pasara la funcion
//para ser ejecutada

//Output:
// Before
// After
// Async!!
// Hello!