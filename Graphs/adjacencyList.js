class Graph{
    constructor() {
        this.adjacencyList={}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex]=new Set()
        }
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1)
        )
    }


    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex+'->'+[...this.adjacencyList[vertex]]);
        }
    }
}


const graph=new Graph()
graph.addVertex("a")
graph.addVertex("b")
graph.addVertex("c")

graph.addEdge("a","b")
graph.addEdge("b","c")


graph.display()


console.log(graph.hasEdge("a","b"));


graph.removeVertex("b")


graph.display()