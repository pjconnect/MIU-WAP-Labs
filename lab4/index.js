//1
function max(a, b){
    return a>b ? a :b;
}
// console.log(max(10, 11));

//2
function maxOfThree(a, b, c) {
    const arr = [a, b, c];
    let max = -Infinity;
    for(n of arr){
        if(max < n){
            max = n;
        }
    }

    return max;
}
// console.log(maxOfThree(10, 11, 99));

//3
function isVowel(a){
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    return vowel.includes(a.toLowerCase());
}
// console.log(isVowel("A"));

//4
function sum(...a){
    let total = 0;
    for(n of a){
        total += n;
    }
    return total;
}
function multiply(...a){
    let total = 1;
    for(n of a){
        total *= n;
    }
    return total;
}
// console.log(sum(5, 6), multiply(5, 6));

//5
function reverse(a){
    return a.split('').reverse().join('');
}

//6
function findLongestWord(words){
    let maxWord = "";
    words.forEach(word => {
        if(word.split('').length > maxWord.split('').length){
            maxWord = word;
        }
    })

    return maxWord;
}

//7
function findLongestWord(words, minChar){
    let minCharArr = [];
    words.forEach(word => {
        if(word.split('').length > minChar){
            minCharArr.push(word);
        }
    })

    return minCharArr;
}
// console.log(findLongestWord(["ABCDE", "A", "B", "FFFFFFFFF"], 4));

//8
function computeSumOfSquares(nums){
    return nums.reduce((total, num) => (total + Math.pow(parseFloat(num), 2)), 0);
}
// console.log(computeSumOfSquares([2, 3]));

//9
function printOddNumbersOnly(nums){
    const onlyOdd = [];
    for(n of nums){
        if(n % 2 === 0){
            onlyOdd.push(n);
        }
    }
    console.log(onlyOdd);
    return onlyOdd;
}
// printOddNumbersOnly([2,3,4,5,6,7,8,9,10]);

//10
function computeSumOfSquaresOfEvensOnly(nums){
    const onlyOdd = [];
    for(n of nums){
        if(n % 2 === 0){
            onlyOdd.push(n);
        }
    }

    var total = 0;
    for(n of onlyOdd){
        total += Math.pow(n ,2);
    }

    console.log(total);
    return total;
}
// computeSumOfSquaresOfEvensOnly([21,3,4,5,6])

//11
function sumF(...a){
    return a.reduce((a, b) => a+b);
}
function multiplyF(...a){
    return a.reduce((a, b) => a*b);
}

//12
function printFibo(n, a, b) {
    let fibo = [];
    fibo[0] = a;
    fibo[1] = b;
  
    for (let i = 2; i < n; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    console.log(fibo.join(", "));
}
// printFibo(10, 0, 1);

