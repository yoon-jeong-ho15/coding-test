function solution(bridge_length, weight,truck_weights) {
    var answer = 0;
    let onBridge =new Array(bridge_length).fill(0);

    let sec = 0;

    while(truck_weights.length>0){
        sec++;
        onBridge.shift();
        let w = 0;
        for(let i=0;i<onBridge.length;i++){
            w += onBridge[i];
        }
        // console.log("w",w);
        let current = truck_weights[0];
        if (w+current <= weight){
            let car = truck_weights.shift();
            onBridge.push(car);
        }else{
            onBridge.push(0);
        }
        // console.log(onBridge);
    }
    answer = sec + bridge_length;
    return answer;
}

// console.log(solution(2,10,[7,4,5,6]));
// console.log(solution(100,100,[10]));
// console.log(solution(100,100,[10,10,10,10,10,10,10,10,10,10]));