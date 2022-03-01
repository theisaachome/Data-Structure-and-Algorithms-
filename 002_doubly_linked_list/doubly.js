class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev= null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length=0;
    }
    push(value){
        let newNode = new Node(value);
        if(this.length===0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let poppedNode = this.taill;
        if(this.length ===1){
            this.head=null;
            this.tail=null;
        }else{
            this.tail = poppedNode.prev;
            this.tail.next =null;
            poppedNode.pre = null;
        }
        this.length --;
        return poppedNode;
    }
    shift(){
        if(this.length ===0) return undefined;
        let oldHead = this.head;
        if(this.length ===1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next =null;
        }
        this.length --;
        return oldHead;
    }
    unshift(value){
        let newNode = new Node(value);
        if(this.length ===0){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }
}

let list = new DoublyLinkedList();