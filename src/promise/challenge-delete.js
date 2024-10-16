//Eliminar un producto en la Api

import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: 'DELETE', //Delete, que es el metodo para eliminar
        mode: 'cors',
       credentials: 'same-origin',
       headers: {
         'Content-type': 'application/json', 
       },
    });
    return response;
}

 //se debe colocar el id del objeto que se quiere modificar
const idNumber = 216;

  postData(`${API}/products/${idNumber}`)
    .then(() => console.log(`Borrado el producto con el id: ${idNumber}`))
    .catch(err => console.log(err));
