const doSomeThinAsync = () => {

    return new Promise ((resolve,reject) => {
        if(true){
            setTimeout(() => { 
            resolve('resuelta');
        }, 5000)
        }else {
            reject(new Error ('Error'))
        }
    });
}

const doSomething = async ()=> {
const something = await doSomeThinAsync();
console.log(something)

}

doSomething()


const doSomething1 = async ()=> {

    try{
        const something = await doSomeThinAsync();
        console.log(something)
    }catch(error){

        console.log(error)
    
     }
    
    }
    doSomething1()
