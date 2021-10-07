// character Escaping
let str = "my name is \"mohammad\" and it\'s my car"
console.log(str)

// set var in str
let age = 20
let varr = `my sebtence is ${str} and age is ${age+ 2}`
console.log(varr)

console.log(varr.charAt(2)) //harfe 3om 
console.log(varr[3])

console.log(varr.indexOf("is" ,10)) //search kon az char 10om be bad is ro

console.log(varr.lastIndexOf("is" ,10)) // az akhar az 10 be ghabl egard

console.log(varr.includes("sebtence")) // is sebtence defined in varr?


console.log(varr.startsWith("sebtence")) 

console.log(varr.endsWith("sebtence"))

console.log(varr.substring(3)) //azharfe 3 be bad hame ro migire
console.log(varr.substring(3,10)) //azharfe 3 ta 10 ro migire

console.log(varr.repeat(3)) //repeat varr 3 times
console.log(varr.substring(3).repeat(2))

console.log(varr.concat("3","is a","g")) //etesal