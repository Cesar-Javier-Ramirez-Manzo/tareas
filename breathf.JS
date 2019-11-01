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
var n6=new Node(6)
var n7=new Node(7)


n1.sonL=n2
n1.sonR=n3
n2.sonL=n4
n2.sonR=n5
n3.sonL=n6
n3.sonR=n7


function breath(n){
    let a=[n]
   function br(a){
       let a1=a
       init=0
    for(var i=init;i<a1.length;i++){
        a.push(a1[i].sonL)
        init++
        a.push(a1[i].sonR)
        init++
    }
    
   }
   br(a)

}
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




