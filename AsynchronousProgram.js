//Asynchronous programming
console.log('Start')

//Special function that allows you to schedule a callback function to be executed asynchronously on the next iteration of the event loop
process.nextTick(()=>console.log('Process next tick'))
setImmediate(()=>console.log('set immediate'))
setTimeout(()=>{
    console.log('set time out')
},0)
const intervalId=setInterval(()=>{
    console.log('set interval')
    clearInterval(intervalId)
},2000)
console.log('Stop')