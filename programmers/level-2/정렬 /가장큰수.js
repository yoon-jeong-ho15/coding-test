function solution(numbers) {
    var answer = '';
    let arr = [];
    // numbers.sort((a,b)=>{
    //     let bstr = ""+b+a;
    //     let astr = ""+a+b;
    //     return bstr-astr;
    // })

    for(let i=0;i<numbers.length-1;i++){
        for(let j=0;j<numbers.length-1;j++){
            let num1 = ""+numbers[j]+numbers[j+1];
            let num2 = ""+numbers[j+1]+numbers[j];
            // console.log(num1,num2);
            if(num2>num1){
                let temp = numbers[j];
                numbers[j]= numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }
    console.log(numbers);
    // console.log(arr);
    // answer = numbers.join("");
    return answer;
}

// console.log(solution([6,10,2]));
console.log(solution([3,30,34,5,9]));
