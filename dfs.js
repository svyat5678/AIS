function dfs(graph, startNode) {
    let visited = [];
    let pathLength = 0;

    
    function Util(node, count) {
    
        visited.push(node);
    
        if (node === endNode) {
            pathLength = count;
        }
        
        let neighbors = graph[node];
        for (let i = 0; i < neighbors.length; i++) {
            if (!visited.includes(neighbors[i])) {
                Util(neighbors[i], count + 1);
            }
        }
    }
    
    Util(startNode,0);
    return pathLength;
}
    
    
    // Пример графа новый
    let graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
    }; //комментари

    let pathLength = dfs(graph, 'A', 'F');
    console.log("Length of path from A to F: " + pathLength);
