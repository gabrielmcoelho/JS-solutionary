class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if (this.length === 0) this.head = newNode;
        else this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    pop(){
        if (this.length === 0) return undefined;
        var last = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null; 
        }
        else{
            let second_last = this.head;
            while(second_last.next !== last){
                second_last = second_last.next;
            }   
            second_last.next = null;
            this.tail = second_last;
        }
        this.length--;
        return last.val;
    }
    shift(){
        if(this.length === 0) return undefined;
        var first = this.head;
        this.head = this.head.next;
        first.next = null;
        this.length--;
        if(this.length === 0) this.tail = null;
        return first.val;
    }
    unshift(val){
        var newNode = new Node(val);
        if (this.length === 0) this.tail = newNode
        else newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var currentNode = this.head;
        for(let i=0; i<index; i++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    set(index, val){
        if(this.get(index) === null) return false;
        this.get(index).val = val;
        return true;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        else if(index === 0) this.unshift(val);
        else if(index === this.length) this.push(val);
        else{
            let newNode = new Node(val);
            let previous = this.get(index-1);
            newNode.next = previous.next;
            previous.next = newNode;
            this.length++;
        }
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        else if(index === 0) return this.shift();
        else if(index === this.length - 1) return this.pop();
        else{
            let removedNode = this.get(index);
            let previous = this.get(index-1);
            previous.next = removedNode.next;
            removedNode.next = null;
            this.length--;
            return removedNode.val;
        }
    }
    reverse(){
        if(this.length <= 1) return false;
        // SWITCH HEAD AND TAIL
        var aux = this.head;
        this.head = this.tail;
        this.tail = aux;
        // TRAVERSE LIST
        var previousNode = this.tail;
        var currentNode = previousNode.next; b
        while(currentNode !== null){
            let nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        this.tail.next = null;
        return true;
    }
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);