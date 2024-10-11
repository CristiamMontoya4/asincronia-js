//instalar npm i xmlhttprequest, para hacer uso de apis, en navegadores no es necesario
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;// require en este caso importa el modulo del id que le pasemos

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
    xhttp.onreadystatechange = function (event) {
        //cuando la operación ha sido completada, validamos el estado para manejar los errores
        if(xhhtp.readyState === 4){
            //validamos la respuesta del servidor, estas pueden ser:
            //100-199 -> respuestas informativas; 200-299 -> respuestas satisfactorias; 300-399 -> Redirecciones; 400-499 -> errores del cliente; 500-599 -> errores de servidores
            if(xhhtp.status === 200){
                //ahora podemos invocar al callback 
                callback(null, JSON.parse(xhttp.responseText)); //el primer parametro, es para errores, el segundo usamos el json parse para convertir el texto en un JSON
            }else{
            // Para manejar en caso de error
            const error = new Error('Error: ' + urlApi);
            return callback(error, null);
            }
        }
    }
    //para que ejecute toda la lógica
    xhttp.send();
}

//llamamos a fetchData, le pasamos un string con la url, como segundo parametro una función
fetchData(`${API}/products`, function(error1, data1){
    //En caso de un error detenemos la ejecución y devolvemos el error
    if(error1)return console.error(error1);
    //en caso de no haber error, hacemos otro llamado a la api, pero especificando un producto, utilizando la información del primer llamado
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        //En este caso cancelamos la operación si hay un error
        if(error2) return console.error(error2); 
        //si no hay errores
        fetchData(`${API}/categories/${data2?.category.id}`, function (error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        }); // usamos el opcional chaining, accede a la propiedad de un objeto o llama a 
        //una función. Si el objeto al que se accede o la función a la que se llama con este operador es undefinedo null, la expresión se acorta y se evalúa como undefineden lugar de generar un error.
    });
});