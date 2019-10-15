
class Node{
    constructor(d){
        this.data=d
        this.next=null
    }
 
}
var n1=new Node(1)
var n2=new Node(2)
var n3=new Node(3)
var n4=new Node(4)
class List{
    constructor(a,d){
        this.h=a
        this.t=d
        this.h.next=this.t
        this.size=2
    }
    insertH(a){
        a.next=this.h
        this.h=a
       this.size++
    }
    insertT(a){
        this.t.next=a
        this.t=a
        this.size++
    }
    size(){
        return this.size
    }
    deleteH(){

    }
    deleteT(){

    }
    toString(){

    }
}
let l1=new List(n1,n2)