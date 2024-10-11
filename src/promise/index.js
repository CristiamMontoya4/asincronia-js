//Promesas
//creamos un objeto Promise, este representa un valor puede estar disponible ahora, luego o nunca
const promise = new Promise(function (resolve, reject) {  //con resolve se muestra información al usuario y con reject es para mostrar el error
    resolve('Done!')
});

const cows = 9;

const countCows = new Promise(function (resolve, reject){
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`)
    }else {
        reject("There is no cows on the farm");
    }
});

//Ejecutar una promesa
countCows.then((result) => {   //con se hace la ejecución normal que recibira el resolve
    console.log(result);
}).catch(  //con catch se recibira el reject
    (error) => {console.log(error);}
).finally( //este se ejecuta cuando termina, sin importar si se lanzo reject o resolve
    () => console.log('Finally')
)  


// Ejemplo en una función 
export function delay(time, message) {
    // Tu código aquí 👈
    const promise = new Promise(function (resolve, reject) {
      if (message) {
        window.setTimeout(() => {
          resolve(message)
        }, time);
      } else {
        reject('Error')
      }
    });
  
    return promise
  }