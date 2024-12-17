const fs=require('fs')

//writing
fs.writeFile('Async.txt','This is Asynchronous File',(err)=>{
    if(err){
        console.log('Error',err)
    }else{
        console.log('File written successfully')
    }
})

//read
fs.readFile('file.txt','utf-8',(err,data)=>{
    if(err){
        console.log('Error',err)
    }else{
        console.log('Read File:',data)
    }
})

//append
fs.appendFile('Async.txt','\n Add some appended text',(err)=>{
    if(err){
        console.log('Error',err)
    }else{
        console.log('Append the file')
    }
})

//rename
fs.rename('Async.txt','renameAsync.txt',(err)=>{
    if(err){
        console.log('Error',err)
    }else{
        console.log('Rename Successfully')
    }
})

//delete
fs.unlink('file.txt',(err)=>{
    if(err){
        console.log('Error',err)
    }else{
        console.log('File deleted successfully')
    }
})