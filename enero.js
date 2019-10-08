function year(y){
    if(bisi(y)==true){
        var x=(y+Math.floor((y-1)/4)-Math.floor((y-1/100))+Math.floor((y-1/400)))%7
    }else{
        var x=(y+Math.floor((y-1)/4)-Math.floor((y-1/100))+Math.floor((y-1/400)))%7
    }
    
                                      
    return x
}
function bisi(x){
    if((x%4)==0&&(x%100)!=0){
        return true
    }
    if((x%400)==0){
        return true
    }else{
    return false

    }
}

console.log(year(2000),year(2019),year(2020))