// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling) {
    var answer = 0;
    const validSounds = ["aya","ye","woo","ma"];

    const result = [];
    for(let i=0;i<babbling.length;i++){
    	let word = babbling[i];
    	// console.log(word);
    	let okay = true;
    	let prevSound = "";
    	while(word.length>0){
    		let flag = false;
    		for(const sound of validSounds){
    			if(word.startsWith(sound)){
    				if(sound === prevSound){
    					break;
    				}
    				word = word.substring(sound.length);
    				prevSound = sound;
    				flag = true;
    			}
    		}
    		if(!flag){
    			okay = false;
    			break;
    		}
    	}
    	if(okay){
    		result.push(babbling[i]);
    	}

    }
    // console.log(result);
    return result.length;
}

// function solution(babbling) {
//     const validSounds = ["aya", "ye", "woo", "ma"];
//     let count = 0;
    
//     for (const word of babbling) {
//         if (canPronounce(word, validSounds)) {
//             count++;
//         }
//     }
    
//     return count;
// }

// function canPronounce(word, validSounds) {
//     let i = 0;
//     let prevSound = "";
    
//     while (i < word.length) {
//         let found = false;
        
//         // 현재 위치에서 시작하는 유효한 발음 찾기
//         for (const sound of validSounds) {
//             if (word.startsWith(sound, i)) {
//                 // 연속 발음 체크
//                 if (sound === prevSound) {
//                     return false;
//                 }
                
//                 prevSound = sound;
//                 i += sound.length;
//                 found = true;
//                 break;
//             }
//         }
        
//         // 어떤 유효한 발음도 찾지 못했다면 발음 불가능
//         if (!found) {
//             return false;
//         }
//     }
    
//     return true;
// }
// console.log(solution(["aya", "ye", "u", "maa"]));
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));
// console.log(solution(["yemaye"]));
