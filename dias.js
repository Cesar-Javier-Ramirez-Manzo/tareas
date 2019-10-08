let x=new Array(52)



for(var i=0;i<=52;i++){
    x[i]=new Array('lunes','martes','miercoles','jueves','viernes','sabado','domingo')
}

function day(a){
    var b=a%7
    console.log(x[0,b])
    return b
}
console.log(day(1776))