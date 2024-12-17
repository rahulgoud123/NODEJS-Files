/*Buffer is a temporary memory storage that stores the data whe it is being moved from one place to another. It is like an array of integers.

The Buffer.copy() method simply copies all the values from the input buffer to another buffer.

The Buffer.includes() method checks whether the provided value is present or included in the buffer or not. 
The Buffer.alloc() method is used to create a new buffer object of the specified size. */

//Buffer.copy()
const {Buffer}=require('node:buffer')
let buffer1=Buffer.from('world')
let buffer2=Buffer.from('hello')
buffer1.copy(buffer2,3)
console.log(buffer2,toString())
buffer1.copy(buffer2,2)
console.log(buffer2,toString())
buffer1.copy(buffer2,1)
console.log(buffer2,toString())

//includes
const buffer=new Buffer('hello world')
console.log(buffer.includes('hello'))

//alloc
const buffer_alloc=Buffer.alloc(10)
console.log(buffer_alloc)

const buffer_alloc1=Buffer.alloc(5)
console.log(buffer_alloc1)