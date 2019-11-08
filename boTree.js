class Number{
    constructor(n){
        this.n=n
        this.men=null
        this.may=null
    }
}
class Tree{
    constructor(r){
        this.root=r
        this.nRoot=this.root
    }
    insert(o){
        if(o.n<this.nRoot.n&&this.nRoot.men==null){
            this.nRoot.men=o
            return console.log('listo')
        }else if(o.n>this.nRoot.n&& this.nRoot.may==null){
            this.nRoot.may=o
            return console.log('listo')
        }
        if(o.n>this.nRoot.n){
            this.nRoot=this.nRoot.may
            this.insert(o)
        }else{
            this.nRoot=this.nRoot.men
            this.insert(o)
        }

    }
}

var n1=new Number(5)
var n2=new Number(6)
var n3=new Number(2)
var n4= new Number(12)

var t1= new Tree(n1)