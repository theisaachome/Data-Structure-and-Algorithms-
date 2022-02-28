class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.pre= null;
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
            newNode.pre = this.tail;
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
            this.tail = poppedNode.pre;
            this.tail.next =null;
            poppedNode.pre = null;
        }
        this.length --;
        return poppedNode;
    }
}

let list = new DoublyLinkedList();