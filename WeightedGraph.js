class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(this.adjacencyList[vertex]) return false;
        this.adjacencyList[vertex] = [];
        return true;
    }
    addEdge(v1, v2, w){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) return false;
        this.adjacencyList[v1].push({vertex:v2, weight:w});
        this.adjacencyList[v2].push({vertex:v1, weight:w});
        return true;
    }
    removeEdge(vertex1, vertex2){
        if( !(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) ) return false;
        var newArr1 = this.adjacencyList[vertex1].filter(
            v => v.vertex !== vertex2
        );
        var newArr2 = this.adjacencyList[vertex2].filter(
            v => v.vertex !== vertex1
        );
        this.adjacencyList[vertex1] = newArr1;
        this.adjacencyList[vertex2] = newArr2;
        return true;
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return false;
        for(let adjVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex, adjVertex);
        }
        delete this.adjacencyList[vertex];
        return true;
    }
    DFS_Rec(start){
        var visited = {};
        var result = [];
        var adjacencyList = this.adjacencyList;

        (function helper(vertex){
            if(!vertex) return;
            result.push(vertex);
            visited[vertex] = true;
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    helper(neighbor);
                }
            })
        })(start);

        return result;
    }
    DFS_It(start){
        var temp_stack = [start];
        var visited = {};
        var result = [];
        while(temp_stack.length){
            let vertex = temp_stack.pop();
            if(!visited[vertex]){
                result.push(vertex);
                visited[vertex] = true;
                this.adjacencyList[vertex].forEach(neighbor => temp_stack.push(neighbor));
            }
        }
        return result;
    }
    BFS(start){
        var temp_queue = [start];
        var visited = {};
        var result = [];
        while(temp_queue.length){
            let vertex = temp_queue.shift();
            if(!visited[vertex]){
                result.push(vertex);
                visited[vertex] = true;
                this.adjacencyList[vertex].forEach(neighbor => temp_queue.push(neighbor));
            }
        }
        return result;
    }
    Dijkstra(start, end){
        /* Initialize objects and priority queue */
        var p_queue = new PriorityQueue();
        var visited = [];
        var distances = {};
        var previous = {};
        for(let vertex in this.adjacencyList){
            if(vertex === start) {
              distances[vertex] = 0;
              p_queue.enqueue(vertex, 0);
            }
            else distances[vertex] = Infinity;
            previous[vertex] = null;
        }

        /* While there's anything in the queue (vertices still need to be visited) */
        while(p_queue.values.length){

          /* Extract the vertex with the lowest priority */
          let current_vertex = p_queue.dequeue().value;
          if(current_vertex === end) break; // if its the end vertex, we're done!
          visited.push(current_vertex);  // mark as visited

          /* Loop over all his adjacenct vertices (those who weren't visited yet) */
          for(let edge of this.adjacencyList[current_vertex]){
            if(!visited.includes(edge.vertex)){ 
               /* Calculate the distance from starting vertex */
              let dist = edge.weight + distances[current_vertex];

              /* If the distance is smaller than the previous, update variables */
              if(dist < distances[edge.vertex]){
                distances[edge.vertex] = dist;
                p_queue.enqueue(edge.vertex, dist);
                previous[edge.vertex] = current_vertex;
              }
           }
          }
        }
        /* Show shortest path from start to end */
        var aux = [end];
        let prev = previous[end];
        while(prev !== null){
          aux.push(prev);
          prev = previous[prev];
        }
        aux.reverse();
        var path = aux.join('-');
        var result = [path, distances[end]];
        return result;
    }
}

function swap(array, idx1, idx2){
    var aux = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = aux;
}

class Node{
    constructor(value, priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(value, priority){
        var newNode = new Node(value, priority);
        this.values.push(newNode);
        var currentIndex = this.values.indexOf(newNode);
        while(currentIndex > 0){
            let parentIndex = Math.floor((currentIndex-1)/2);
            if(this.values[parentIndex].priority > this.values[currentIndex].priority){
                swap(this.values, currentIndex, parentIndex);
                currentIndex = parentIndex;
            }
            else break;
        }
        return this.values;
    }
    dequeue(){
        if(this.values.length === 0) return null;
        if(this.values.length === 1) return this.values.pop();
        swap(this.values, 0, this.values.length - 1);
        var removedNode = this.values.pop();
        var length = this.values.length;
        var current = 0;
        var child1 = 1;
        var child2 = 2;
        while(true){
            let troca = false;
            if(child1 < length && child2 < length){
                if(this.values[child1].priority < this.values[current].priority || this.values[child2].priority < this.values[current].priority){
                    if(this.values[child1].priority < this.values[child2].priority){
                        swap(this.values, current, child1);
                        current = child1;
                    } 
                    else{
                        swap(this.values, current, child2);
                        current = child2;
                    }
                    troca = true;
                }
            }
            else if(child1 < length && child2 >= length){
                if(this.values[child1].priority < this.values[current].priority){
                    swap(this.values, current, child1);
                    current = child1;
                    troca = true;
                }
            }
            else break;
            if(!troca) break;
            child1 = current*2 + 1;
            child2 = current*2 + 2;
        }
        return removedNode;
    }
}

var g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
