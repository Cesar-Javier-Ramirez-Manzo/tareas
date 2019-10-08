function InitR(r,co){
   
    let mat=new Array(co)
    mat[0,1,2]=new Array(r)
    
    for(var i=0;i<r;i++){
        mat[i] = []
        for(var c=0;c<co;c++){
            mat[i][c]=Math.random()
        }
    }
    
    return mat
    }
    
    console.log(InitR(8,8))