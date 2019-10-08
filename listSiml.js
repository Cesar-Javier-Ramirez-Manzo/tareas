let node1={
    value: 'this is node 1',
    next:null
}
let node2={
    value:'This is node 2',
    next:null
}
let node3={
    value: 'This is node 3',
    next:null
}
var z=0
node1.next=node2
node2.next=node3
//let arr=[node1,node2,node3]
for(var i=0;i<3;i++){
    if(i=0){
        z=node1.next
        
    }
    if(z!=null){
        console.log(z)
        z=z.next
    }else{
        break
    }
}

