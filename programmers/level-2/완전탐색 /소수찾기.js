function solution(numbers) {
    var answer = 0;
    let result = new Set();
    let arr = [];
    for(let i=0;i<numbers.length;i++){
        arr.push(numbers[i]);
    }
    
    function backtrack(arr, l) {
        if (l == 1) {
            // console.log("l==1",arr);
            return arr.map(item => item);
        }
        
        let perms=[];
        for (let i = 0; i < arr.length; i++) {
            const cur = arr[i];
            const rem = arr.slice(0, i).concat(arr.slice(i + 1));
            const smallerPerms = backtrack(rem, l - 1);
            
            for (const perm of smallerPerms) {
                let num = cur+perm;
                perms.push(num);
            }
        }
        return perms;
    }
    
    for (let l = 1; l <= arr.length; l++) {
        const perms = backtrack(arr, l);
        for(let perm of perms){
            result.add(Number(perm));
        }
    }
    // console.log(result);

    for(let num of result){
        let count=0;
        let flag = true;
        for(let i=1;i*i<=num;i++){
            if(num==1){
                // console.log(num,"out");
                flag = false;
                break;
            }
            if(num%i==0){
                // console.log(i,num);
                count++;
            } 
            if(count>=2) {
                // console.log(num,"out");
                flag=false;
                break;
            }
        }
        if(flag && num!=0){
            // console.log(num,"in");
            answer++;
        }
    }
    return answer;
}
// console.log(solution("17"));
console.log(solution("011"));