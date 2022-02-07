## **What is a linked list?**

- A data structure that contains
  - a head,
  - tail and
  - length property.

---

## **`Singly Linked List`**

- Linked Lists consist of nodes, and each node has a value and a pointer to another node or null.

--- 

## Pushing

- Adding a new node to the end of the Linked List!

## Pushing pseudocode

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- Increment the length by one
- Return the linked list

```js
push(value){
    var newNode = new Node(value);
    if(!this.head){
        this.head=newNode;
        this.tail = newNode;
    }else{
        this.tail.next = newNode;
        this.tail= newNode;
    }
    this.length++;
    return this;
}
```

---
## **`Popping`**
- Removing a node from the end of the Linked List!
## **`Popping pseudocode`**
- If there are no nodes in the list, return undefined
- Loop through the list until you reach the tail
- Set the next property of the 2nd to last node to be null
- Set the tail to be the 2nd to last node
- Decrement the length of the list by 1
- if the length is zero set head and tail to null.
- Return the value of the node removed