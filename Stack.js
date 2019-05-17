class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.size === 0) this.last = newNode;
        else newNode.next = this.first;
        this.first = newNode;
        return ++this.size;
    }
    pop(){
        if(this.size === 0) return null;
        var removedNode = this.first;
        if(this.size === 1){
            this.first = null;
            this.last = null;
        }
        else{
            this.first = removedNode.next;
            removedNode.next = null;
        }
        this.size--;
        return removedNode.value;
    }
}