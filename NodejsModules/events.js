const EventEmitter=require('events')
const myEvent=new EventEmitter

//withgout parameters
myEvent.on('event',()=>{
    console.log('Event without parameters')
})
myEvent.emit('event')

//create an event
myEvent.on('greet',(name)=>{
    console.log(`Hello ${name}`)
})

myEvent.on('bye',(name)=>{
    console.log(`Bye ${name}`)
})

//release (emit)
myEvent.emit('greet','John')
myEvent.emit('bye','Harry')

//with evetListeners
const greetListener=(name)=>{
    console.log(`Hi ${name}`)
}
myEvent.addListener('greeting',greetListener)
myEvent.emit('greeting','Sam')
myEvent.emit('greeting','Abc')

//remove eventListener
myEvent.removeListener('hello',greetListener)
console.log('remove listener')
myEvent.emit('hello','Alice')

//once
myEvent.once('hi',greetListener)
myEvent.emit('hi','Charlie')
myEvent.emit('hi','peter')