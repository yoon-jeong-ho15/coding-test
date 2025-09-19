const source = `4 4
####
#JF#
#..#
#..#`;

function solution() {
    const input = source.split("\n");
    const [R, C] = input[0].split(" ").map(Number);

    const maze = [];
    let jihun = null;
    const fires = [];

    // 미로 입력 받기
    for (let i = 1; i <= R; i++) {
        const row = input[i].split("");
        maze.push(row);

        for (let j = 0; j < C; j++) {
            if (row[j] === "J") {
                jihun = [i - 1, j];
                row[j] = ".";
            } else if (row[j] === "F") {
                fires.push([i - 1, j]);
            }
        }
    }

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    // 불의 확산 시간을 미리 계산
    const fireTime = Array(R)
        .fill(null)
        .map(() => Array(C).fill(Infinity));
    const fireQueue = [...fires];

    // 초기 불 위치들의 시간은 0
    for (const [r, c] of fires) {
        fireTime[r][c] = 0;
    }

    let time = 0;
    while (fireQueue.length > 0) {
        const size = fireQueue.length;

        for (let i = 0; i < size; i++) {
            const [r, c] = fireQueue.shift();

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 &&
                    nr < R &&
                    nc >= 0 &&
                    nc < C &&
                    maze[nr][nc] !== "#" &&
                    fireTime[nr][nc] === Infinity
                ) {
                    fireTime[nr][nc] = time + 1;
                    fireQueue.push([nr, nc]);
                }
            }
        }
        time++;
    }

    // 지훈이의 이동
    const queue = [jihun.concat(0)]; // [r, c, time]
    const visited = Array(R)
        .fill(null)
        .map(() => Array(C).fill(false));
    visited[jihun[0]][jihun[1]] = true;

    while (queue.length > 0) {
        const [r, c, t] = queue.shift();

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            const nt = t + 1;

            // 미로를 벗어나면 탈출 성공
            if (nr < 0 || nr >= R || nc < 0 || nc >= C) {
                return nt;
            }

            // 이동 가능한 조건들
            if (
                nr >= 0 &&
                nr < R &&
                nc >= 0 &&
                nc < C &&
                !visited[nr][nc] &&
                maze[nr][nc] === "." &&
                nt < fireTime[nr][nc]
            ) {
                visited[nr][nc] = true;
                queue.push([nr, nc, nt]);
            }
        }
    }

    return "IMPOSSIBLE";
}

console.log(solution());
