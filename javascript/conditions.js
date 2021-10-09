let grad=20
if ( grad> 10){
    console.log(grad)
    if (grad>20){
        console.log("20 shodi")
    }
}
if( grad<= 8){
    console.log("oh oh")
}
else{
    console.log("har chi")
}

//ternary operator
(grad>10 && grad<=20) ? console.log('valid'): console.log("invalid")
let b=30, c
c= b >=0 ? b : -b  //c =|b|

//else if // if one of them get true others elif doenot operate

let grade= 20
if(grade >= 15){
    console.log('great')
}else if (grade >=10){
    console.log('nice')
}else if(grade >= 5){
    console.log('week')
}else{
    console.log('oh oh')
}

//switch  case 

let i=10
switch(i){
    case 10:
        console.log("10")
        break
    case 20:
        console.log("20")
        break
    default:
        console.log('great')
}

let mark =2
switch(true){
    case (mark >=0 && mark<5):
        console.log("week")
        break
    case (mark >=5 && mark<10):
        console.log("ohoh")
        break
    default:
        console.log('great')
}