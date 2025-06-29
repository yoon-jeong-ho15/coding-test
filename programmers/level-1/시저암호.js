function solution(s, n) {
    const map ={
        "a":1, "b":2, "c":3, "d":4, "e":5,
        "f":6, "g":7, "h":8, "i":9, "j":10,
        "k":11, "l":12, "m":13, "n":14, "o":15,
        "p":16, "q":17, "r":18, "s":19, "t":20, 
        "u":21, "v":22, "w":23, "x":24, "y":25,
        "z":0
    }
    var answer = '';
    for(let i=0; i<s.length;i++){
        let ch = s[i];
        let isUpper = false;

        if (ch==" ") answer += " ";

        if (ch == ch.toUpperCase()) {
            isUpper = true;
            ch = ch.toLowerCase();
        }

        let a = (map[ch]+n)%26;
        let newChar = "";

        for(let k of Object.keys(map)){
            if(map[k]==a){
                newChar =  k;
            }
        }

        if(isUpper){
            answer += newChar.toUpperCase();
        }else{
            answer += newChar;
        }
    }
    return answer;
}

console.log(solution("aaaAA",25));