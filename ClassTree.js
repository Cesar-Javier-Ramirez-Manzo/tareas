class Letter{
    constructor(letra){
        this.letter=letra
        this.l=null
        this.r=null
    }
}
class Tree{

    constructor(r){
        this.root=r
        this.nRoot=this.root
    }

    insert(o){
        ifthis.nRoot
        if(this.nRoot.l==null){
            this.nRoot.l=o
        }else if(this.nRoot.r==null){
            this.nRoot.r=o
        }
        if(this.nRoot.l!=null &&this.nRoot.r!=null){
            this.nRoot=o
            this.insert(this.nRoot.l)
        }else{
            this.insert(this.nRoot.r)
        }
        
    }
    

}

var l1= new Letter('a')
var l2= new Letter('b')
var l3= new Letter('c')
var l4= new Letter('d')
var l5= new Letter('e')




