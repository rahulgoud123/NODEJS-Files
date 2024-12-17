const { error } = require('console')
const fs=require('fs')
const readableStream=fs.createReadStream('stream.txt')
readableStream.on('data',(chunk)=>{
    console.log(`Received ${chunk.length} bytes of data.`)
    console.log(chunk.toString())
})
readableStream.on('end',()=>{
    console.log('End of file.')
})
readableStream.on('error',(error)=>{
    console.error('Error reading file:',error)
})