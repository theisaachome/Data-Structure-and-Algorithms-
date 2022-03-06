# Stack
## Table of Content

- [What is a stack](#what-is-a-stack)


---


## WHAT IS A STACK?


The last element added to the stack will be the first element removed from the stack


## **Last In -> First Out**


## HOW IS IT USED?
Think about a stack of plates, or a stack of markers, or a stack of....anything.
As you pile it up the last thing (or the topmost thing) is what gets removed first.


## WHERE STACKS ARE USED
Managing function invocations
Undo / Redo
Routing (the history object) is treated like a stack!


## A STACK CLASS


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

## **PUSHING**
Add a value to the top of the stack!

## **PUSHING PSEUDOCODE**
- The function should accept a value
- Create a new node with that value
- If there are no nodes in the stack, set the first and last property to be the newly created node 
- If there is at least one node, create a variable that stores the current first property on the stack
- Reset the first property to be the newly created node
- Set the next property on the node to be the previously created variable
- Increment the size of the stack by 1

```js

```