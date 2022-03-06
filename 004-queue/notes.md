# QUEUES

## Table of Contents

- [What is a Queue](#what-is-a-queue)
- [A Queue Class](#a-queue-class)

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
