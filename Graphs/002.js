class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, new Set());
        }
    }

    addEdge(vertex, edge) {
        if (!this.adjacencyList.has(vertex)) {
            this.addVertex(vertex);
        }
        if (!this.adjacencyList.has(edge)) {
            this.addVertex(edge);
        }
        this.adjacencyList.get(vertex).add(edge);
    }

    insert(vertex, edge, isBidirectional) {
        this.addEdge(vertex, edge);
        if (isBidirectional) {
            this.addEdge(edge, vertex);
        }
    }

    BFS(startingVertex) {
        const visited = new Set();
        const queue = [startingVertex];
        visited.add(startingVertex);
        while (queue.length > 0) {
            const currentVertex = queue.shift();
            process.stdout.write(`${currentVertex} `)
            const neighbors = this.adjacencyList.get(currentVertex);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
        console.log();
    }

    DFS(startingVertex) {
        const visited = new Set();

        const traverse = (vertex) => {
            process.stdout.write(`${vertex} `)
            visited.add(vertex);

            const neighbors = this.adjacencyList.get(vertex);

            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    traverse(neighbor);
                }
            }
        };

        traverse(startingVertex);
        console.log();
    }
    removeVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) return;


        // Remove the vertex and its edges from the adjacency list
        this.adjacencyList.delete(vertex)
        for (let [v, edges] of this.adjacencyList) {
            edges.delete(vertex);
        }
    }



    display() {
        for (let [vertex, edges] of this.adjacencyList) {
            console.log(`${vertex}: ${[...edges].join(', ')}`);
        }
    }
}

const graph = new Graph();

graph.insert(1, 2, true);
graph.insert(1, 3, true);
graph.insert(2, 4, false);
graph.addVertex(10)
graph.insert(15, 10, true);
// graph.display();

console.log("BFS:");
graph.BFS(3);

// console.log("DFS:");
// graph.DFS(1);