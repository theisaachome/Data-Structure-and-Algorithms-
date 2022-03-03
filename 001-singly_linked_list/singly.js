
class Node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

class SinglyList{
    constructor(){
        this.head=null;
        this.tail = null;
        this.length = 0;
    }
    //  add new item at the end of the list
    push(data){
        let newNode = new Node(data);
        if(this.length ===0){
            this.head= newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }
    pop(){
        if(this.length ===0)return undefined;
        let currentNode = this.head;
        let newTail = currentNode;
        while(currentNode.next){
            newTail = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length --;
        if(this.length ===0){
            this.head = null;
            this.tail = null;
        }
        return currentNode;
    }
}
//  10 20 

const list = new SinglyList();
list.push(10);
