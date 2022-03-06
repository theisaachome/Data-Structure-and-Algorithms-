# QUEUES

## Table of Contents

- [What is a Queue](#what-is-a-queue)
- [A Queue Class](#a-queue-class)
- [Enqueue](#queues)

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