class Graph{
constructor(d,l){
this.d=d
this.l=l
}
addvertex(o){

}
addEdge(v1,v2){
    let contador=0
    while(v1.l!=null){
        contador++
        
    }
    v1.l[contador]=v2
}


}
let n1=new Graph(1,[])
let n2=new Graph(2,[])
let n3=new Graph(3,[])
let n4=new Graph(4,[])
n1.l[0]=n2
n2.l[0]=n3
n1.l[1]=n3
console.log(n1.l)
console.log(n2.l)
console.log(n3.l)