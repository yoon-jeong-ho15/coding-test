function solution(name, yearning, photo) {
    var answer = [];
    let map = new Map();
    for(let i=0;i<name.length;i++){
        map.set(name[i],yearning[i]);
    }
    
    for(let i=0;i<photo.length;i++){
        const p = photo[i];
        let s = 0;
        for(let person of p){
            if(map.has(person)){
               s += map.get(person);
            }
        }
        answer.push(s);
    }
    return answer;
}

console.log(solution(["may", "kein", "kain", "radi"],[5, 10, 1, 3],[["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]));