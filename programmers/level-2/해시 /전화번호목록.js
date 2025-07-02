//75퍼
function solution2(phone_book) {
    var answer = true;
    let str = "";
    let map = new Map();

    let min = 20;
    for(let i=0;i<phone_book.length;i++){
        let a = phone_book[i].length;
        min = a < min? a : min;
    }
    
    for(let i=0;i<min;i++){
        map.set(i,new Map());
        for(let j=0;j<phone_book.length;j++){
            let num = phone_book[j][i];
            let counts = map.get(i);
            let count=1;
            if(counts.has(num)){
                count = counts.get(num) +1;
            }
            counts.set(num,count);
            map.set(i,counts);
        }
    }
    // console.log(map);
    for(let counts of map.values()){
        for(let [num,count] of counts){
            if(count>=2)str+=num;
        }
    }   
    answer = phone_book.includes(str);
    return !answer;
}

//83퍼
//가장 짧은거가 꼭 접두어가 되리란 법이 없음.
function solution3(phone_book){
    let answer = true;
    let short = [];
    let min = 20;
    for(let i=0;i<phone_book.length;i++){
        let a = phone_book[i].length;
        min = a < min? a : min;
    }
    for(let i=0;i<phone_book.length;i++){
        if(phone_book[i].length==min){
            short.push(phone_book[i]);
        }
    }
    console.log(short, phone_book);
    while(short.length>0){
        let str = short.shift();
        console.log("str",str);
        for(let i=0;i<phone_book.length;i++){
            let phone = phone_book[i];
            if(phone!=str && phone.startsWith(str)){
                console.log(phone);
                answer = false;
                break;
            }
        }
    }

    return answer;
}

//해시
function solution(phone_book){
    let set = new Set(phone_book);
    
    for(let i=0;i<phone_book.length;i++){
        let phone = phone_book[i];
        for(let j=1;j<phone.length;j++){
            let str = phone.substr(0,j);
            if(set.has(str)){
                return false;
            }
        }
    }

    return true;
}

console.log(solution(["119", "97674223", "1195524421"]));
// console.log(solution(["123","456","789"]));
// console.log(solution(["12","123","1235","563","88"]));
// console.log(solution3(["111","222","333"]));
// console.log(solution3(["12","345","345678"]));