/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	let answer = true;
	let s = x+"";

	for(let i=0;i<s.length;i++){
		if(s[i] != s[s.length-1-i]) return false;
	}
	return answer;
};

console.log(isPalindrome(10));