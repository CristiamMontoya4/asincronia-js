//instalar npm i xmlhttprequest, para hacer uso de apis, en navegadores no es necesario
const XMLHttpRequest = require('xmlhttprequest');// require en este caso importa el modulo del id que le pasemos

//guardamos la url de la api a con la cual nos comunicamos
const API = 'https://api.escuelajs.co/api/v1';   //con mayusculas para hacer referencai a un valor que no va a cambiar

function fetchData(urlApi, callback){  //urlApi, hace referencia a cualquier api, el segundo es una funciónpara controlar el flujo de la información
    //XMLHttpRequest es un objeto de JS que nos permite hacer peticiones hacia los servicios de nube(URLs o APIs)
    //Este tiene 5 estados
    //0 -> Inicializado; 1 -> Loading(Cargando) ; 2 -> Cargado ; 3 -> Procesamiento (si hay una descarga) ; 4 -> Completado
    let xhttp = new XMLHttpRequest();  //guardamos el objeto que importamos en una variable, en este caso es un constructor vacio, con esto ya lo podemos utilizar

    xhttp.open('GET', urlApi, true); //con esto abrimos una solicitud, primer parametro petición REST(get, post, put, delte, etc), el segundo
    //la api donde solicitar el request, el terceroindica si vamos a utilizar asincronismo

    //aquí creamos una funcion anonima para verificar que todo haya salido bien, esto gracias a onreadystatechange, esta es llamada cada vez que ready state cambie
    xhhtp.onreadystatechange = function (event) {
        //cuando la operación ha sido completada, validamos el estado para manejar los errores
        if(xhhtp.readyState === 4){
            //validamos la respuesta del servidor, estas pueden ser:
            //100-199 -> respuestas informativas; 200-299 -> respuestas satisfactorias; 300-399 -> Redirecciones; 400-499 -> errores del cliente; 500-599 -> errores de servidores
            if(xhhtp.status === 200){
                //ahora podemos invocar al callback 
                callback(null, JSON.parse(xhttp.responseText)); //el primer parametro, es para errores, el segundo usamos el json parse para convertir el texto en un JSON
            }
        }else{
            // Para manejar en caso de error
            const error = new Error('Error: ' + urlApi);
            return callback(error, null);
        }
    }
    //para que ejecute toda la lógica
    xhttp.send();
}