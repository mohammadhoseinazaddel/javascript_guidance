let a =['dd','ff','gg','uu']
let b =a.push('berr') // add berr at end of the list
console.log(a)
console.log(b)

b =a.pop()           // delet last
console.log(a)
console.log(b)


b =a.shift()        // delete first
console.log(a)
console.log(b)

b =a.unshift('hero') //hero at first add
console.log(a)
console.log(b)


// cnocat combine ow list

b= a.concat([1,2])
console.log(b)

//or

b= [...b,...[4,7]]
console.log(b)

console.log(a.join("+"))

b =a.slice(2,4)   //["gg","uu"] does not effect on base    
console.log(a)
console.log(b)

b =a.splice(2,4)   //["gg","uu"] delete from base too
console.log(a)
console.log(b)

b =a.splice(2,4,"cher","aln")   //["gg","uu"] delete from base too and add cher , aln
console.log(a)
console.log(b)

console.log(a.reverse())
console.log(a.sort())
console.log(a)
console.log(a.indexOf('ff'))

// do for 
for (let val in a){
    console.log("chi")
}