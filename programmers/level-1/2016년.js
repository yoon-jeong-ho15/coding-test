function solution(a, b) {
    var answer = '';

    let year = 2016;
    let isLeapYear = false;
    if(year % 4 == 0){
        if(year % 400 == 0 || year % 100 != 0){
            isLeapYear = true;
        }
    }
    
    let days = 0

    const map = {
        0:"FRI", 1:"SAT", 2:"SUN",
        3:"MON", 4:"TUE", 5:"WED",
        6:"THU"
    }
    const monthMap={
        1:31, 2:isLeapYear?29:28, 3:31,
        4:30, 5:31, 6:30, 7:31, 8:31,
        9:30, 10:31, 11:30, 12:31
    }

    for(let i=1;i<a;i++){
        days += monthMap[i];
    }
    days += (b-1);
    console.log(days);
    answer = map[days%7];

    return answer;
}

console.log(solution(1,8));