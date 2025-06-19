/**
 * @param {string} s
 * @return {number}
 */

//107ms
var romanToInt_ = function(s) {
	let arr = [];
	let answer = 0;

	for(const ch of s){
		switch(ch){
			case "I":
				arr.push(1);
				break;
			case "V":
				arr.push(5);
				break;
			case "X":
				arr.push(10);
				break;
			case "L":
				arr.push(50);
				break;
			case "C":
				arr.push(100);
				break;
			case "D":
				arr.push(500);
				break;
			case "M":
				arr.push(1000);
				break;
		}
	} 
	console.log(arr);

	for(let i=0;i<arr.length;i++){
		if(arr[i+1] && arr[i]<arr[i+1]){
			answer -= arr[i];
		}else{
			answer += arr[i];
		}
	}

	return answer;
};

// 클로드 정답
// 방법 1: 맵 사용 + 한 번의 순회
// 5ms
var romanToInt = function(s) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];
        
        if (next && current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    
    return result;
};

// 방법 2: 역순 순회 (더 직관적)
// 2ms
var romanToIntReverse = function(s) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    
    let result = 0;
    let prevValue = 0;
    
    // 뒤에서부터 순회
    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanMap[s[i]];
        
        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
        
        prevValue = currentValue;
    }
    
    return result;
};

// 방법 3: 특별한 케이스 먼저 처리
// 11ms
var romanToIntSpecialCases = function(s) {
    const romanMap = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000,
        // 특별한 케이스들을 미리 정의
        'IV': 4, 'IX': 9, 'XL': 40, 'XC': 90,
        'CD': 400, 'CM': 900
    };
    
    let result = 0;
    let i = 0;
    
    while (i < s.length) {
        // 2글자 조합 먼저 확인
        if (i + 1 < s.length && romanMap[s.substr(i, 2)]) {
            result += romanMap[s.substr(i, 2)];
            i += 2;
        } 
        // 1글자 처리
        else {
            result += romanMap[s[i]];
            i += 1;
        }
    }
    
    return result;
};

// 성능 테스트 함수
function performanceTest() {
    const testCases = ['III', 'LVIII', 'MCMXC', 'MCDXLIV'];
    const methods = [
        { name: '방법 1 (맵 + 한번순회)', fn: romanToInt },
        { name: '방법 2 (역순순회)', fn: romanToIntReverse },
        { name: '방법 3 (특별케이스)', fn: romanToIntSpecialCases },
        { name: '방법 4 (함수형)', fn: romanToIntConcise }
    ];
    
    testCases.forEach(testCase => {
        console.log(`\n테스트: ${testCase}`);
        methods.forEach(method => {
            const result = method.fn(testCase);
            console.log(`${method.name}: ${result}`);
        });
    });
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
