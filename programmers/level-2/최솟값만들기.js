// https://school.programmers.co.kr/learn/courses/30/lessons/12941

// 정확성 16/16, 효율성 0/4
function solution2(A, B) {
    var answer = 0;
    const arr1 = [];
    const arr2 = [];

    for (const a of A) {
        // console.log(a);
        let inserted = false;
        for (let i = 0; i < arr1.length; i++) {
            if (a < arr1[i]) {
                arr1.splice(i, 0, a);
                inserted = true;
                break;
            }
        }
        if (!inserted) arr1.push(a);
    }

    for (const b of B) {
        // console.log(b);
        let inserted = false;
        for (let i = 0; i < arr2.length; i++) {
            if (b < arr2[i]) {
                arr2.splice(i, 0, b);
                inserted = true;
                break;
            }
        }
        if (!inserted) arr2.push(b);
    }

    for (let i = 0; i < arr1.length; i++) {
        answer += arr1[i] * arr2[arr2.length - 1 - i];
    }

    return answer;
}

function solution3(A, B) {
    var answer = 0;
    const arr1 = mergeSort(A);
    const arr2 = mergeSort(B);

    function mergeSort(arr) {
        if (arr.length == 1) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));

        const temp = [];

        let i = 0;
        let j = 0;
        while (i < left.length && j < right.length) {
            const n = left[i];
            const m = right[j];
            if (n > m) {
                temp.push(n);
                i++;
            }
            if (m >= n) {
                temp.push(m);
                j++;
            }
        }

        while (i < left.length) {
            temp.push(left[i]);
            i++;
        }
        while (j < right.length) {
            temp.push(right[j]);
            j++;
        }

        return temp;
    }

    console.log(arr1, arr2);

    for (let i = 0; i < arr1.length; i++) {
        answer += arr1[i] * arr2[arr2.length - 1 - i];
    }

    return answer;
}

function solution(A, B) {
    const arr1 = [...A].sort((a, b) => a - b);
    const arr2 = [...B].sort((a, b) => a - b);

    let answer = 0;
    for (let i = 0; i < arr1.length; i++) {
        answer += arr1[i] * arr2[arr2.length - 1 - i];
    }

    return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]));
// console.log(solution([1,2],[3,4]));
