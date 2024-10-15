//Para trabajar fuera del navegador importar : npm i node-fetch

// Fetch:
// Nos permite realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo y menos verboso.
import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi){
    return fetch(urlApi);
};

fetchData(`${API}/products`)
    .then(response => response.json()) //se pueden agregar varios then, según se requiera
    .then(products => {
        console.log(products);
    })
    .then(console.log('Hola :)'))
    .catch(error => console.log(error));