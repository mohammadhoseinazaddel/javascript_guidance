console.log("live server") //plugin
let a= null
console.log(typeof a) //type
let e= 2e6
console.log(e)
e=2e-6 //pow
console.log(e)

let c=4; let d=5;
let answer = c++ * d++  //answer=4*5
let answer1 = ++c * ++d //answer=6*7
let answer2 = c++ * --d //answer=6*6
console.log(answer)
console.log(answer1)
console.log(answer2) 

let b= Number.isInteger(5)
console.log(b)

console.log(typeof NaN)

console.log(Number.isFinite( -Infinity))

console.log(Number.isNaN( 2- 'ff'))

let adad= 2000000000
console.log(adad.toExponential())
console.log(200000..toExponential()) //namayi
console.log(200000 .toExponential()) //namayi
console.log(200000.0.toExponential()) //namayi
console.log((200000).toExponential()) //namayi

adad= 22.123456
console.log(adad.toFixed(3)) //3 ragham ashar

adad= 22.123456
console.log(adad.toPrecision(3)) //3 ragham manidar 
