const fetchData = require('../utils/fetchData'); // importa el modulo creado en utils
let API = 'https://rickandmortyapi.com/api/character/';



const doSomething = async (url_api)=> {
    try{
        const data = await fetchData(url_api); // hasta que no termine la promesa no continua en ese scope 
        console.log(data.info.count)
        const personaje = await fetchData(url_api+data.results[0].id);
        console.log(personaje.name)
        const personajeOrigin = await fetchData(personaje.origin.url);
        console.log(personajeOrigin.dimension)

    }catch(error){
        console.log(error)   //  imprime algun error de alguna promesa
     }
    
    }
    doSomething(API)
/// fin curso