const fetchData = require('../utils/fetchData'); // importa el modulo creado en utils
let API = 'https://rickandmortyapi.com/api/character/';

// Promesas 
fetchData(API)
.then(data => {
    console.log(data.info.count)
    return fetchData (API+data.results[0].id)    //retorna la nueva peticion 
    
})
.then(data => {
    console.log(data.name)
    return fetchData (data.origin.url)  //retorna la nueva peticion 
}).then(data => {
    console.log(data.dimension)
    
})
.catch(err => console.log(err))   //recoje el err que genere alguna peticion