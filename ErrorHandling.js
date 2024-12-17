/*There are two ways to handle error 1.Synchronous with try catch and 2.Asynchronous with Promises, Callbacks and async await */

//try catch
/*function throwError(){
    throw new Error('Something went wrong')
}
try{
    throwError()
}catch(err){
    console.log('Error:',err)
}*/

//Async Error
const fs=require('fs')

fs.readFile('nofile.txt','utf-8',(err,data)=>{
    if(err){
        console.log('Error',err)
    }else{
        console.log('Read file:',data)
    }
})