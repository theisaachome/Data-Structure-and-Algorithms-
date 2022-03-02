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
    get(index){
        let count =0;
        let current = null;
        if(index < 0 || index >= this.length)return null;
        if(index <= this.length / 2){
            count =0;
            current = this.head;
            while(count !==index){
                current = current.next;
                count ++;
            }
        }else{
            count = this.length -1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count --;
            }
        }
        return current;
    }

    set(index,value){
        let foundNode = this.get(index);
        if(foundNode !== null){
            foundNode.value = value;
            return true;
        }
        return false;
    }

    insert(index,value){
        if(index<0 || index > this.length) return false;
        if(index ===0 )return !!this.unshift(value);
        if(index === this.length) return !!this.push(value);

        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;

        let newNode = new Node(value);

        beforeNode.next = newNode, newNode.prev = beforeNode;
        afterNode.prev = newNode, newNode.next = afterNode;

        this.length ++;

        return true;
    }
}

let list = new DoublyLinkedList();
list.push(10);
list.push(20);

// 10 20 30 (50) 40 