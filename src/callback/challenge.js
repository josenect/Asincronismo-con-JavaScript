let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest ;// instancia para utilizar peticiones Api
let API = 'https://rickandmortyapi.com/api/character/';

// Funcion de llamado API
function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET',url_api, true)
    xhttp.onreadystatechange = function(event){
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error ('Error' + url_api)
                return callback(error, null)
            }
            
        }
    }
    
    xhttp.send()



}

// callback con datos d Api 3 llamadas a 3 recurso dentro de la api
fetchData(API,function(error1, data1){   // el segundo parametro es callback que se envia donde maneja el error y la data 
    if(error1) {
        return console.log(error1) ;  // si existe error acaba la ejecución con el error de la llamada
    } 
    console.log(data1.info.count)
    fetchData(API + data1.results[0].id,function(error2, data2){   // cambia la Api con el recurso que quiere
        if(error2) {
            return console.log(error2) ;
            
        }
        console.log(data2.name)
        fetchData(data2.origin.url,function(error3, data3){  // cambia la Api pasando un recurso de la data git
            if(error3) {
                return console.log(error2) ;
            }
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)

    
    
        })


    })




})
