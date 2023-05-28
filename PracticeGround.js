class Graph{
    constructor() {
        this.adjacencyList={}
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, new Set());
        }
    }

    addEdge(vertex1,vertex2) {
        if (!this.adjacencyList.has(vertex1)) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList.has(vertex2)) {
            this.addVertex(vertex2)
        }
        this.adjacencyList.get(vertex1).add(vertex2)
    }

    insert(vertex, edge, isBidirectional) {
        this.addEdge(vertex, edge)
        if (isBidirectional) {
            this.addEdge(edge,vertex)
        }
    }



    BFS(startingVertex) {
        const visited = new Set()
        const queue = [startingVertex]
        visited.add(startingVertex)
        while (queue.length > 0) {
            const currentVertex = queue.shift()
            process.stdout.write(`${currentVertex}`)
            const neighbors = this.adjacencyList.get(currentVertex);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor)
                }
            }
        }
        console.log();
    }
    



}