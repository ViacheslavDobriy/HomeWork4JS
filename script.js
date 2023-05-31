// Task 1

function fromZeroToTen() {
    for (let i = 0; i <= 10; i++) {
        if(i === 0) {
            console.log(`${i} - это ноль`);
        } else if (i%2 == 0) {
            console.log(`${i} - четное число`);
        } else console.log(`${i} - нечетное число`);
    }
}
fromZeroToTen();

// Task 2

let array2 = [1,2,3,4,5,6,7];

array2.splice(3,2);

console.log(array2);

// Task 3

let array3 = [];

function fillArray(arr) {
    for (let i = 0; i < 5; i++) {
        arr[i] = Math.floor(Math.random()*9);
    }
    return arr;
}

function summaryOfElem(arr) {
    let resultSum = 0;
    for (let i = 0; i < arr.length; i++) {
        resultSum = resultSum + arr[i];
    }
    return resultSum;
}

function minOfArray(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findThree(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 3) {
            return 'Three is here!';
        }
    }
    return 'There is no three!';
}

array3 = fillArray(array3);
console.log(array3);
console.log(`Summary is ${summaryOfElem(array3)}`);
console.log(`Minimum of this array is ${minOfArray(array3)}`);
console.log(findThree(array3)); 

// TASK 4

function drawRows() {
    let string = '';
    for (let i = 0; i <= 20; i++) {
        console.log(string);
        string = string + 'X';
    }
}

drawRows();