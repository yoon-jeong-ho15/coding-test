function solution(genres, plays) {
    var answer = [];
    let map = new Map();
    let genreCount = new Map();

    for(let i=0;i<genres.length;i++){
        let genre = genres[i];
        let play = plays[i];
        let song = {i, play};
        if(map.has(genre)){
            map.get(genre).push(song);
            play = genreCount.get(genre) + play;
            genreCount.set(genre,play);
        }else{
            map.set(genre,[song]);
            genreCount.set(genre, play);
        } 
    }
    // console.log(map);
    
    genreCount = [...genreCount.entries()].sort((a,b)=>{
        return b[1]-a[1];
    });
    // console.log(genreCount);
    
    for(let i=0;i<genreCount.length;i++){
        let arr = map.get(genreCount[i][0]);
        arr.sort((a,b)=>{
            return b.play-a.play;
        });
        // console.log(arr);
        let v = arr.length>2?2:arr.length;
        for(let j=0;j<v;j++){
            answer.push(arr[j].i);
        }
    }
    return answer;
}

console.log(solution(["classic", "pop", "classic", "classic", "pop"],[500, 600, 150, 800, 2500]));
