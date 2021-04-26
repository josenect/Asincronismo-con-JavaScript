const somethingwillHappen = () => {

    return new Promise((resolve,reject) => {
        if(true){
            resolve('Heyyy')
        } else {
            reject('Whoooops')
        }
    })
};

somethingwillHappen()
.then(response => {console.log(response)})
.catch(err => console.error(err))

const somethingwillHappen1 = () => {

    return new Promise((resolve,reject) => {
        if(true){

            setTimeout(() => {
                resolve('Resueltoo toma tu data');
            },5000)
            
        } else {
            
            const error = new Error ('tienes un Error');
            reject(error)
        }
    })
};

somethingwillHappen1()
.then(response => {console.log(response)})
.catch(err => console.error(err))

//ejecucion de dos Promise y agreupacion de resultado 
Promise.all([somethingwillHappen() , somethingwillHappen1()])
.then(response => {
    console.log('Array of results',response);
}).catch(err => {
    console.error(err);
})