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

```js
  pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
```
---
## **`Shifting`**
- Removing a new node from the beginning of the Linked List!

## **`Shifting pseudocode`**
- If there are no nodes, return undefined
- Store the current head property in a variable
- Set the head property to be the current head's next property
- Decrement the length by 1
- Return the value of the node removed
```js
  shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
```

---
## **`Unshifting pseudocode`**

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the newly created node's next property to be the current head property on the list
- Set the head property on the list to be that newly created node
- Increment the length of the list by 1
- Return the linked list

```js
unshift(val){
    var newNode = new Node(val);
    if(!this.head) {
        this.head = newNode;
        this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
}
```

```js
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
```

---

## **`Set`**

Changing the value of a node based on it's position in the Linked List.

## **`Set pseudocode`**

- This function should accept a value and an index.

- Use your get function to find the specific node.

- If the node is not found, return false.

- If the node is found, set the value of that node to be the value passed to the function and return true.

```js
set(index, val){
    var foundNode = this.get(index);
    if(foundNode){
        foundNode.val = val;
        return true;
    }
    return false;
}
```

---

## **`Insert`**

Adding a node to the Linked List at a specific position.


## **`Insert pseudocode`**

 - If the index is less than zero or greater than the length, return false.

 - If the index is the same as the length, push a new node to the end of the list.

 - If the index is 0, unshift a new node to the start of the list.

 - Otherwise, using the get method, access the node at the index - 1.

 - Set the next property on that node to be the new node.

 - Set the next property on the new node to be the previous next.

 - Increment the length.

 - Return true.

 ```js
insert(index, val){
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);
    
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
}
 ```
 ---
## **`Remove`**
Removing a node from the Linked List at a specific position.

### **`Remove pseudocode`**
- If the index is less than zero or greater than the length, return undefined
- If the index is the same as the length-1, pop
- If the index is 0, shift
- Otherwise, using the get method, access the node at the index - 1
- Set the next property on that node to be the next of the next node
- Decrement the length
- Return the value of the node removed