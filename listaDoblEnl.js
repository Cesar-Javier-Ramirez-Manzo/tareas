let node1={
    value: 'This is node 1',
    next:null,
    prev:null
}
let node2={
    value:'This is node 2',
    next:null,
    prev:null
}
let node3={
    value: 'This is node 3',
    next:null,
    prev:null
}

node1.next=node2
node2.next=node3
node3.next=node1

node1.prev=node3
node2.prev=node1
node3.prev=node2