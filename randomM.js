class Matrix{
    constructor(x,y){
        this.x=x
        this.y=y
    }
    InitR(){
   
        let mat=new Array(this.y)
        mat[0,1,2]=new Array(this.x)
        
        for(var i=0;i<this.x;i++){
            mat[i] = []
            for(var c=0;c<this.y;c++){
                mat[i][c]=Math.random()
            }
        }
        
        return mat
        }
        getRow(){

        }
        getCow(){

        }
        isSquared(){

        }
        isSymetr(){

        }
        isIdentity(){

        }
}
var x=new class Matrix(3,3)
console.log(x.InitR())