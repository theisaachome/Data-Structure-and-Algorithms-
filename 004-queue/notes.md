# QUEUES

## Table of Contents

- [What is a Queue](#what-is-a-queue)
- [A Queue Class](#a-queue-class)
- [Enqueue](#queues)
- [Dequeue](#dequeue)
- [BIG O of QUEUES](#big-o-of-queues)

---

## **What is a Queue**
A FIFO data structure!
First In First Out


### WE'VE SEEN THIS BEFORE
Queues exist everywhere! Think about the last time you waited in line....  

### How do we use them in programming?  
- Background tasks  
- Uploading resources  
- Printing / Task processing

## A Queue Class

```js
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}
```
```js
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
```
---

## Enqueue
Adding to the beginning of the Queue!

Remember, queues are a FIFO data structure

## Enqueue Pseudocode
- This function accepts some value
- Create a new node using that value passed to the function
- If there are no nodes in the queue, set this node to be the first and last property of the queue
- Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
- Increment the size of the queue by 1

```js
enqueue(value){
    let newNode = new Node(value);
    if(!this.first){
        this.first = newNode;
        this.last = newNode;
    }else{
        this.last.next = newNode;
        this.last = newNode;
    }
    return ++this.size;
}
```

---

## Dequeue
Removing from the beginning of the Queue!  
Remember, queues are a FIFO data structure

## Dequeue pseudocode
- If there is no first property, just return null
- Store the first property in a variable
- See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null
- If there is more than 1 node, set the first property to be the next property of first 
- Decrement the size by 1
- Return the value of the node dequeued

```js
dequeue(){
    if(!this.first)return null;
    let temp = this.first;
    if(this.first === this.last){
        this.last = null;
    }
    this.first = this.first.next;
    this.size --;
    return temp.value;
}
```

## BIG O of QUEUES
- Insertion -   O(1)  
- Removal -   O(1)  
- Searching -   O(N)  
- Access -   O(N)