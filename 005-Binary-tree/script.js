class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinearySearchTree {
    constructor(){
        this.root=null;
    }

    insert(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        }
        let currentRoot = this.root;
        while(true){
            if(value=== currentRoot.value) return undefined;
            if(value < currentRoot.value){
                 if(currentRoot.left ===null){
                     currentRoot.left = newNode;
                     return this;
                 }
                 currentRoot =currentRoot.left;
            }else{
                if(currentRoot.right === null){
                    currentRoot.right = newNode;
                    return this;
                } 
                currentRoot = currentRoot.right;
            }
        }
    }
    find(value){
        if(!this.root)return undefined;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(value < current.value){
             current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                found=true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(!this.root)return undefined;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(value < current.value){
             current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                return true;
            }
        }
        return false;
    }
}

//      10
//   5     13
// 2  7  11  16

var bst = new BinearySearchTree();
bst.insert(10)
bst.insert(5)
bst.insert(13)
bst.insert(11)
bst.insert(2)
bst.insert(16)
bst.insert(7)
