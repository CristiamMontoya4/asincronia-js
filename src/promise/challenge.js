//Para trabajar fuera del navegador importar : npm i node-fetch

// Fetch:
// Nos permite realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo y menos verboso.
import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi){
    return fetch(urlApi);
};

/*
fetchData(`${API}/products`)
    .then(response => response.json()) //se pueden agregar varios then, según se requiera
    .then(products => {
        console.log(products);
    })
    .then(console.log('Hola :)'))
    .catch(error => console.log(error));

*/

//obtener una categoría
fetchData(`${API}/products`)
    .then(response => response.json()) //convierte la respuesta a json
    .then(products => {
        console.log("==========Products===================");
        console.log(products); //muestra los productos de la respuesta
        return fetchData(`${API}/products/${products[0].id}`)  //devuelve otra llamada al api del primer producto
    })
    .then(response => response.json())  //convertimos a json la respuesta, que debe ser solo un producto
    .then(product => {
        console.log("****************One product**************");
        console.log(product);  //se muestra solo un producto
        return fetchData(`${API}/categories/${product.category.id}`)  //hacemos el llamado a una categoria, de un producto 
    })
    .then(response => response.json())
    .then(category => {
        console.log("---------------Name of Category-----------------");
        console.log(category.name) //muestra el nombre de la categoría
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Finaly'))