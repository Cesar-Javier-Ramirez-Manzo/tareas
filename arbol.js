class Node{
    constructor(d){
        this.data=d
        this.sonR=null
        this.sonL=null
    }
 
}
var n1=new Node('root')//creacion de nodos
var n2=new Node(2)
var n3=new Node(3)
var n4=new Node(4)
var n5=new Node(5)

n1.sonL=n2
n1.sonR=n3
n3.sonL=n4
n3.sonR=n5



function recorrer(n){
    if(n.sonL==null){

        return console.log(n.data)
    }else{
        recorrer(n.sonL)
    }
    if(n.sonR==null){
        return console.log(n.data)
    }else{
        recorrer(n.sonR)
    }
    console.log(n.data)
    
}




