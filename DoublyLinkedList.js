class Node{
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0) this.head = newNode;
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }
    pop(){
        if(this.length === 0) return undefined;
        var lastNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = lastNode.prev;
            this.tail.next = null;
            lastNode.prev = null;
        }
        this.length--;
        return lastNode.val;
    }
    shift(){
        if(this.length === 0) return undefined;
        var firstNode = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = firstNode.next;
            this.head.prev = null;
            firstNode.next = null;
        }
        this.length--;
        return firstNode.val;
    }
    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0) this.tail = newNode;
        else{
            this.head.prev = newNode;
            newNode.next = this.head;
        }
        this.head = newNode;
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var middle = Math.floor(this.length/2);
        if(index < middle){
        // TRAVERSE FROM THE BEGINNING
            var resultNode = this.head;
            for(let i=0; i<index; i++) 
                resultNode = resultNode.next;
        }
        else{
        // TRAVERSE FROM THE END
            var resultNode = this.tail;
            for(let i=this.length-1; i>index; i--)
                resultNode = resultNode.prev;
        }
        return resultNode;
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
            let previousNode = this.get(index-1);
            newNode.prev = previousNode;
            newNode.next = previousNode.next;
            previousNode.next = newNode;
            newNode.next.prev = newNode;
            this.length++;
        }
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        else if(index === 0) return this.shift();
        else if(index === this.length-1) return this.pop();
        else{
            let removedNode = this.get(index);
            removedNode.prev.next = removedNode.next;
            removedNode.next.prev = removedNode.prev;
            removedNode.prev = null;
            removedNode.next = null;
            this.length--;
            return removedNode.val;
        }
    }
    reverse(){
        if(this.length <= 1) return false;
        // SWTICH HEAD AND TAIL
        var aux = this.head;
        this.head = this.tail;
        this.tail = aux;
        // TRAVERSE LIST
        var currentNode = this.tail;
        while(currentNode !== null){
            let nextNode = currentNode.next;
            let aux = currentNode.prev;
            currentNode.prev = currentNode.next;
            currentNode.next = aux;
            currentNode = nextNode;
        }
        return true;
    }
}

var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);