# Doubly Linked List
### Table of Contents
- [Pushing](#pushing)


---

```js
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.pre  = null;
    }
}
```
```js
class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length=0;
    }
}
```
## PUSHING
Adding a node to the end of the Doubly Linked List


## Pushing pseudocode
- Create a new node with the value passed to the function
- If the head property is null set the head and tail to be the newly created node 
- If not, set the next property on the tail to be that node
- Set the previous property on the newly created node to be the tail
- Set the tail to be the newly created node
- Increment the length
- Return the Doubly Linked List
```js
push(value){
        let newNode = new Node(value);
        if(this.length===0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.pre = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
}
```

---

## POPPING
Removing a node from the end of the Doubly Linked List

## Popping pseudocode
- If there is no head, return undefined
- Store the current tail in a variable to return later
- If the length is 1, set the head and tail to be null
- Update the tail to be the previous Node.
- Set the newTail's next to null
- Decrement the length
- Return the value removed
