function solution(schedule) {
    var answer = -1;
    // console.log(schedule);
    let map = new Map();
    for(let i=0;i<5;i++){
        let classes = schedule[i];
        // console.log(classes);
        for(let clas of classes){
            // console.log(clas.length);
            if(clas.length>8){
                let time1 = clas.substr(3,5);
                let time2 = clas.substr(12, 5);

                let clas1 = {
                    day:clas.substr(0,2),
                    start:getTime(time1),
                    end: getTime(time1)+1.5,
                };
                let clas2 = {
                    day:clas.substr(9,2),
                    start:getTime(time2),
                    end: getTime(time2)+1.5,
                }
                let splitClass = {
                    type: 'split',
                    classes: [clas1, clas2]
                };
                if(map.has(i+1)){
                    map.get(i+1).push(splitClass);
                }else{
                    map.set(i+1,[splitClass]);
                }
            }else{
                let time1 = clas.substr(3,5);
                let clas1 = {
                    day:clas.substr(0,2),
                    start:getTime(time1),
                    end: getTime(time1)+3,
                };
                if(map.has(i+1)){
                    map.get(i+1).push(clas1);
                }else{
                    map.set(i+1,[clas1]);
                }
            }   
        }
    }
    // console.log(map);

    function backtrack(subj, arr){
        if(subj==6){
            return 1;
        }

        let count = 0;
        let cur = map.get(subj);
        // console.log(subj, cur);

        for(let selected of cur){
            let flag = true;
            for (let clas2 of arr){
                // console.log(clas2);
                ischecked = check(selected, clas2);
                if(!ischecked){
                    flag = false;
                    break;
                }
            }
            if(flag){
                arr.push(selected);
                count += backtrack(subj+1, arr);
                // console.log(count);
                arr.pop();
            }
        }

        return count;
    }

    function check(clas1, clas2){
        // console.log(clas1);
        // console.log(clas2);
        let clas_1 = clas1.type == 'split' ? clas1.classes : [clas1];
        let clas_2 = clas2.type == 'split' ? clas2.classes : [clas2];
        
        let result = true;
        for(let c1 of clas_1){
            for(let c2 of clas_2){
                if(c1.day == c2.day){
                    let result2 = c1.end <= c2.start || c2.end <= c1.start;
                    if(!result2){
                        result = false;
                        break;
                    }
                }
            }
        }
        return result;
    }

    let arr = [];
    answer = backtrack(1,arr);
    
    return answer;
}

function getTime(str){
    const hour = Number(str.substr(0, 2));
    const minute = str.substr(3, 2)=="00"?0:0.5;
    // console.log(hour+minute);
    return hour + minute
}

console.log(solution([
[ 'MO 12:00 WE 14:30', 'MO 12:00', 'MO 15:00', 'MO 18:00' ],
[ 'TU 09:00', 'TU 10:00', 'TU 15:00', 'TU 18:00' ],
[ 'WE 09:00', 'WE 12:00', 'WE 15:00', 'WE 18:00' ],
[ 'TH 09:30', 'TH 11:30', 'TH 15:00', 'TH 18:00' ],
[ 'FR 15:00', 'FR 15:00', 'FR 15:00', 'FR 15:00' ]
]));