class Node{
    constructor(val){
        this.val  = val;
        this.next= val;
    }
}

class SinglyLinkList{
    constructor(){
        this.head=null;
        this.tail = null;
        this.length=0;
    }
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
    pop(){
        if(!this.head)return undefined;

        var current = this.head;
        var newTail = current;
        while(current.next){ // Loop through the list until you reach the tail
            newTail = current;
            current =current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length===0){
            this.head = null;
            this.tail =null;
        }
        return current;
    }
}

var list = new SinglyLinkList();