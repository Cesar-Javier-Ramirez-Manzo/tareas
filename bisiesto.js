function bisi(x){
    if((x%4)==0&&(x%100)!=0){
        return 'si'
    }
    if((x%400)==0){
        return 'si'
    }else{
    return 'no'

    }
}

console.log(bisi(-52))
console.log(bisi(1996))
console.log(bisi(2020))
console.log(bisi(2076))
console.log(bisi(3000))