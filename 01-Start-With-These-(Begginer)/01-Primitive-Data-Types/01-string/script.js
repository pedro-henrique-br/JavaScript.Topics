// String is a sequence of characters
// Used to form a "text" 

//Primitive String

const message = "Hello World";

//Object String
 
const otherMessage = new String ("Good Morning World")

// The message is a string
// And the otherMessage is a object
// But, both of the types have object properties

console.log(typeof otherMessage)
console.log(typeof message)


// length is the property

console.log(message.length)
console.log(otherMessage.length)

// Length return the size of characters of the value


// ToLocaleUpperCase is the Method

console.log(message.toLocaleUpperCase())
console.log(otherMessage.toLocaleUpperCase())

// ToLocaleUpperCase return a string with the characters in UpperCase
