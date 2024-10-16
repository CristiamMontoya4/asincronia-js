/*
 consta de una función generadora que muestra un objeto 
 iterable Generator. La palabra reservada yield se usa para pausar y reanudar una función generadora. Fuente: aquí .

La estructura del Generador consta con la palabra function seguido de un asterísco * : function* ésta es una función generadora heredada.
El resultado que se quiere obtener se coloca al lado derecho de yield, puede ser de cualquier tipo (string, numérico, objetos, etc)
 y se puede tener tantos yield que se desee.
*/
function* gen() {
    yield 1; 
    yield 2;
    yield 3;
} 

const g = gen();
console.log(g.next().value); //la palabra next permite acceder a la función y obtener un yield
console.log(g.next().value);
console.log(g.next().value);


function* iterate(array){
  for(let value of array){
    yield value;    
  }  
}

const it = iterate(['Cristiam', 'Danna', 'Felipe', 'Violeta', 'Lucia']);
console.log(it.next()); //output: { value: 'Cristiam', done: false }
console.log(it.next()); //{ value: 'Danna', done: false }
console.log(it.next()); //{ value: 'Felipe', done: false }
console.log(it.next()); // { value: 'Violeta', done: false }
console.log(it.next()); // { value: 'Lucia', done: false }
console.log(it.next()); // { value: undefined, done: true } //como no hay elementos retorna undefined
