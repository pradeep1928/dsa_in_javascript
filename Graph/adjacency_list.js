
/* The code is creating an adjacency list representation of a graph. The object `adjacencyList`
represents a graph with three vertices A, B, and C, and edges connecting them. For example, vertex A
is connected to vertex B, vertex B is connected to vertices A and C, and vertex C is connected to
vertex B. The keys of the object represent the vertices, and the values are arrays of the vertices
that the key vertex is connected to. */
const adjacencyList = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['B']
}

console.log(adjacencyList['B']);