import fetch from 'node-fetch';
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data){
    const response = fetch(urlApi, { //en este caso vamos a configurar fetch, esto se realiza en el objeto del segundo parametro
        method: 'POST',  //el tipo de metodo puede ser: GET, POST, PUT o DELETE, debe ir en mayúsculas
        mode: 'cors',
        /*
        CORS (Cross-Origin Resource Sharing o en español Intercambio de recursos de origen cruzado, lo mismo que hacer peticiones
        a un dominio distinto al de origen) es un sistema que consiste en transmitir HTTP headers, que determina si los navegadores 
        bloquean el acceso del código JavaScript frontend a las respuestas de peticiones de origen cruzado.
        */
       credentials: 'same-origin',
       headers: {
         'Content-type': 'application/json', //el valor que vamos a enviar
       },
       body: JSON.stringify(data), //la indformación que quiero enviar, tiene que pasar de json a texto

    });
    return response;
}

//El cuerpo de la infomación que queremos almacenar, esta en formato json, cada api tiene su formato, de no ser así, tendremos problemas
const data = {
    "title": "Product Example",
    "price": 999,
    "description": "A example",
    "categoryId": 2,
    "images": ["https://placeimg.com/640/480/any"]
  };

  //le pasamos la url y la información a guardar
  postData(`${API}/products`, data)
    .then(response => response.json()) //convertimos la información recibida a json
    .then(data => console.log(data)) //mostramos la información ya transformada que recibimos
    .catch(err => console.log(err));

//Output:
/*
{
  title: 'Product Example',
  price: 999,
  description: 'A example',
  images: [ '["https://placeimg.com/640/480/any"]' ],
  category: {
    id: 2,
    name: 'Laptops',
    image: 'https://placeimg.com/640/480/any',
    creationAt: '2024-10-15T23:07:40.000Z',
    updatedAt: '2024-10-16T15:46:28.000Z'
  },
  id: 216,
  creationAt: '2024-10-16T16:43:55.000Z',
  updatedAt: '2024-10-16T16:43:55.000Z'
}
*/
