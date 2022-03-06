# Stack
## Table of Content

- [What is a stack](#what-is-a-stack)
- [How is it used?](#how-is-it-used)
- [Where stacks are used](#where-stacks-are-used)
- [Stack class](#a-stack-class)
- [Stack Push ](#pushing)
- [Stack Pop](#pop)


---


## What is a Stack


The last element added to the stack will be the first element removed from the stack


## **Last In -> First Out**


## How is it used
Think about a stack of plates, or a stack of markers, or a stack of....anything.
As you pile it up the last thing (or the topmost thing) is what gets removed first.


## Where Stacks are Used
Managing function invocations
Undo / Redo
Routing (the history object) is treated like a stack!


## A Stack Class


```js
class Stack {
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

## **Pushing**
Add a value to the top of the stack!

## **Pushing Psueduocode**
- The function should accept a value
- Create a new node with that value
- If there are no nodes in the stack, set the first and last property to be the newly created node 
- If there is at least one node, create a variable that stores the current first property on the stack
- Reset the first property to be the newly created node
- Set the next property on the node to be the previously created variable
- Increment the size of the stack by 1

```js
 push(value){
        let newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last= newNode;
        }else{
            let temp= this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
```

---
