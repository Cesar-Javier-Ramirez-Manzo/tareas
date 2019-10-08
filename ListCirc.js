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

node1.next=node2
node2.next=node3
node3.next=node1