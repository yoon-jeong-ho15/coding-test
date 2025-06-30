function solution2(cards1, cards2, goal) {
    var answer = "Yes";
    let max = cards1.length > cards2.length? cards1.length : cards2.length;
    let j = 0;
    for(let i=0;i<max;i++){
        // console.log(`i : ${i}, j : ${j}`);
        if(goal[j] == cards1[i]){
            j++;
            if(cards2[i]){
                if(goal[j] != cards2[i]){
                    return "No";
                }
                else{
                    j++;
                }
            }
        }else if(goal[j]== cards2[i]){
            j++;
            if(cards1[i]){
                if(goal[j] != cards1[i]){
                    return "No";
                }
                else{
                    j++;
                }
            }
        }else{
            return "No";
        }
    }
    return answer;
}

function solution(cards1, cards2, goal){
    let answer = "Yes";
    for(let i=0; i<goal.length;i++){
        let word = goal[i];
        // console.log(word);
        if(cards1[0]==goal[i]){
            cards1 = cards1.splice(1);
            // console.log(cards1);
        }else if(cards2[0]==goal[i]){
            cards2 = cards2.splice(1);
            // console.log(cards2);
        }else{
            return "No";
        }
    }

    return answer;
}

console.log(solution(["i", "drink", "water"],["want", "to"],["i", "want", "to", "drink", "water"]));
