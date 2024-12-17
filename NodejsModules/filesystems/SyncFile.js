const fs=require('fs')

//sync files
fs.writeFileSync('Sync.txt',"This is a Synchronous file")
console.log('file written successfully')

//read
const data=fs.readFileSync('Sync.txt','utf-8')
console.log('File is reading:',data)

//append
fs.appendFileSync('Sync.txt','\n This is an appended text synch')
console.log('Text is appended')

//rename file
fs.renameSync('Sync.txt','newSync.txt')
console.log('File is renamed')

//delete
fs.unlinkSync('read.txt')
console.log('file is deleted')