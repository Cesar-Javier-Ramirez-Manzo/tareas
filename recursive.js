

function Tres(x){
    
    if(x>=0){
        
       return x
    }else{
        x=2*Tres(x)+3
    }
       
}
for(var i=0;i<10;i++){
    console.log(Tres(i))
}
