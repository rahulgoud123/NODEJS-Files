const path=require('path')

const filePath='D:\full stack\Back End\NodeJs\NodejsModules\filesystems\path.txt'
console.log(path.basename(filePath))

const dirPath='D:\full stack\Back End\NodeJs\NodejsModules\filesystems\path.txt'
console.log(path.dirname(dirPath))

const extPath='D:\full stack\Back End\NodeJs\NodejsModules\filesystems\path.txt'
console.log(path.extname(extPath))