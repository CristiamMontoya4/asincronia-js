//Actualizar producto en la Api

import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data){
    const response = fetch(urlApi, { 
        method: 'PUT', 
        mode: 'cors',
       credentials: 'same-origin',
       headers: {
         'Content-type': 'application/json', 
       },
       body: JSON.stringify(data),

    });
    return response;
}

//En este caso el cuerpo es más flexible, solamente indicamos los campos que queremos cambiar
const dataToUpdate = {
    "title": "Product Edit",
    "price": 420,
    "description": "description edit",
    "categoryId": 2,
    "images": ["https://placeimg.com/640/480/any"]
  };

  //le pasamos la url y la información a guardar
  postData(`${API}/products/216`, dataToUpdate)
    .then(response => response.json()) //convertimos la información recibida a json
    .then(dataToUpdate => console.log(dataToUpdate)) //mostramos la información ya transformada que recibimos
    .catch(err => console.log(err));

//output:
/*
{
  title: 'Product Edit',
  price: 420,
  description: 'description edit',
  categoryId: 2,
  images: [ 'https://placeimg.com/640/480/any' ]
}

*/
