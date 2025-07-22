function solution(maze,target){
	let result = [];
	const maxRow = maze.length-1;
	const maxCol = maze[0].length-1;
	// console.log(maxRow,maxCol);
	const direction=[[0,1],[0,-1],[1,0],[-1,0]];

	function backtrack(r,c,path,visited){
		if(r==target[0] && c==target[1]){
			path.push([r,c]);
			result.push([...path]);
			return;
		}

		const cur = maze[r][c];
		if(cur==1){
			return;
		}

		path.push([r,c]);
		visited.add(`${r},${c}`);

		// console.log(path);
		for(let dir of direction){
			const nr = r+dir[0];
			const nc = c+dir[1];
			if(nr<=maxRow && nr>=0 && nc<=maxCol && nc>=0){
				if(!visited.has(`${nr},${nc}`)){
					backtrack(nr,nc,path,visited);
				}	
			}
		}
		path.pop();
		visited.delete(`${r},${c}`);
	}

	backtrack(0,0,[],new Set());

	return result;
}

console.log(solution([[0,0,1,0],[0,1,0,0],[0,0,0,1],[1,0,0,0]],[3,3]));