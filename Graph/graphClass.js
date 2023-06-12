
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) && 
            this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(`${vertex} --> ${[...this.adjacencyList[vertex]]}`);
        }
    }

}

const graph = new Graph();

/* `graph.addVertex('A');` is adding a new vertex with the label 'A' to the graph's `adjacencyList`
property. If the vertex already exists in the `adjacencyList`, it will not add it again. */
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

/* `graph.addEdge('A', 'B');` is adding an undirected edge between vertex 'A' and vertex 'B' in the
graph's `adjacencyList` property. It first checks if the vertices already exist in the
`adjacencyList`, and if not, adds them as new vertices. Then it adds each vertex to the other's
adjacency set, indicating that they are connected by an edge. */
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

/* `graph.display()` is a method that displays the graph's `adjacencyList` property in the console. It
iterates through each vertex in the `adjacencyList` and logs the vertex label followed by an arrow
pointing to an array of its adjacent vertices. */
graph.display();

/* `graph.hasEdge('A','C')` is checking if there is an undirected edge between
vertex 'A' and vertex 'C' in the graph's `adjacencyList` property. It does
this by checking if vertex 'A' has vertex 'C' in its adjacency set, and if
vertex 'C' has vertex 'A' in its adjacency set. If both conditions are
true, it returns `true`, indicating that there is an edge between the two
vertices. Otherwise, it returns `false`. */
console.log('hasEdge: ', graph.hasEdge('A','C'))

/* `graph.removeEdge('A', 'B')` is removing the undirected edge between vertex 'A' and vertex 'B' in
the graph's `adjacencyList` property. It does this by deleting each vertex from the other's
adjacency set, indicating that they are no longer connected by an edge. */
graph.removeEdge('A', 'B')

/* `graph.removeVertex('C')` is removing the vertex with the label 'C' from the graph's `adjacencyList`
property. It first checks if the vertex exists in the `adjacencyList`, and if so, removes all edges
connected to it by calling `this.removeEdge(vertex, adjacentVertex)` for each adjacent vertex.
Finally, it deletes the vertex from the `adjacencyList` using the `delete` keyword. */
graph.removeVertex('C')

graph.display();
