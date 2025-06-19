/**
 * @param {number} x
 * @return {boolean}
 */

// 8ms
var isPalindrome = function(x) {
	let answer = true;
	let s = x+"";

	for(let i=0;i<s.length;i++){
		if(s[i] != s[s.length-1-i]) return false;
	}
	return answer;
};


// 문자열로 변환하지 않고.
// 3ms
const func = (x)=>{
	if(x<0) return false;

	let original = x;
	let reversed = 0;

    while (x > 0) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return original === reversed;
}

console.log(isPalindrome(10));
console.log(func(10));