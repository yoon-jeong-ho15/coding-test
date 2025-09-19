class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp(this.heap.length - 1);
    }

    pop() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown(0);
        return min;
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp(index) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[parent][0] <= this.heap[index][0]) break;
            [this.heap[parent], this.heap[index]] = [
                this.heap[index],
                this.heap[parent],
            ];
            index = parent;
        }
    }

    _heapifyDown(index) {
        const n = this.heap.length;
        while (true) {
            let smallest = index;
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            if (left < n && this.heap[left][0] < this.heap[smallest][0]) {
                smallest = left;
            }

            if (right < n && this.heap[right][0] < this.heap[smallest][0]) {
                smallest = right;
            }

            if (smallest === index) break;
            [this.heap[smallest], this.heap[index]] = [
                this.heap[index],
                this.heap[smallest],
            ];
            index = smallest;
        }
    }
}

// Function to construct adjacency
function constructAdj(edges, V) {
    // adj[u] = list of [v, wt]
    const adj = Array.from({ length: V }, () => []);
    // const adj = Array(V).fill().map(()=>[]); 와 같은 코드

    for (const edge of edges) {
        const [u, v, wt] = edge;
        adj[u].push([v, wt]);
        adj[v].push([u, wt]);
    }

    return adj;
}

// Returns shortest distances from src to all other vertices
function dijkstra(V, edges, src, target) {
    const adj = constructAdj(edges, V);
    // [
    //   [ [ 1, 4 ], [ 2, 8 ] ],
    //   [ [ 0, 4 ], [ 4, 6 ] ],
    //   [ [ 0, 8 ], [ 3, 2 ] ],
    //   [ [ 2, 2 ], [ 4, 10 ] ],
    //   [ [ 1, 6 ], [ 3, 10 ] ]
    // ]

    const minHeap = new MinHeap();

    const dist = Array(V).fill(Number.MAX_SAFE_INTEGER);
    const parent = Array(V).fill(-1); // 부모 노드 추적용

    minHeap.push([0, src]);
    // [0,0]

    dist[src] = 0;
    //[0, 9007199254740991, 9007199254740991,
    // 9007199254740991, 9007199254740991]

    while (minHeap.size() > 0) {
        const [d, u] = minHeap.pop();
        //[0,0]
        //[4,1]
        //[8,2]
        //[10,4]
        //[10,3]

        if (u === target) break;

        if (d > dist[u]) continue;

        for (const [v, weight] of adj[u]) {
            //u=0
            //adj[0] = [[ 1, 4 ],[ 2, 8 ]]
            //dist[u=0] = 0
            //dist[v=1] = max
            //dist[v=2] = max

            //u=1
            //adj[1] = [ [ 0, 4 ], [ 4, 6 ] ]
            //dist[u=1] = 4
            //dist[v=0] = 0
            //dist[v=4] = max

            //u=2
            //adj[2] = [[0,8],[3,2]]
            //dist[u=2] = 8
            //dist[v=0] = 0
            //dist[v=3] = max

            //u=4
            //adj[4] = [[1,6],[3,10]]
            //dist[u=4] = 10
            //dist[v=1] = 4
            //dist[v=3] = 10

            if (dist[v] > dist[u] + weight) {
                dist[v] = dist[u] + weight;
                parent[v] = u;
                minHeap.push([dist[v], v]);
                //u=0
                //parent[-1,0,-1,-1,-1]
                //minHeap = [[4,1]]
                //parent[-1,0,0,-1,-1]
                //minHeap = [[4,1],[8,2]]

                //u=1
                //parent[-1,0,0,-1,1]
                //minHeap = [[8,2],[10,4]]

                //u=2
                //parent[-1,0,0,2,1]
                //minHEap = [[10,4],[10,3]]

                //u=4
                //minHeap = [[10,3]]
            }
        }
    }

    // 경로 복원
    const path = [];
    let current = target;
    //current = 3

    if (dist[target] === Number.MAX_SAFE_INTEGER) {
        return { distance: -1, path: [] }; // 도달 불가능
    }

    while (current !== -1) {
        path.unshift(current);
        current = parent[current];
        //path = [3]
        //current = 2
        //path = [2,3]
        //curent = 0
        //path = [0,2,3]
        //current = -1
    }

    return { distance: dist[target], path: path };
}

// Driver code
const V = 5;

// edge list format: [u, v, weight]
const edges = [
    [0, 1, 4],
    [0, 2, 8],
    [1, 4, 6],
    [2, 3, 2],
    [3, 4, 10],
];

const result = dijkstra(V, edges, 0, 3);

// Print shortest distances in one line
console.log(`Distance: ${result.distance}`);
console.log(`Path: ${result.path.join(" -> ")}`);
