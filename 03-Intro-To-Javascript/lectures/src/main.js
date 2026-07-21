
const numbers = [1,20, 15, 33, 5, 3,4, 100]

function logItems(item) {
    console.log(item)
}

function loopingHighOrderFunction(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

// loopingHighOrderFunction(numbers, logItems);

// arrow functions
const greet = () => {

}

// forEach method
numbers.forEach((n) => console.log(n))

let totalAddition = 0;
numbers.forEach((n) => totalAddition += n)
console.log(totalAddition)
// reduce method
    const totalSum = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
    console.log(totalSum)

    const students = ["Harry", "Tom", "Jane"];

    const studentString = students.reduce((accumulator, currentStudent, currentIndex, array) => {
        if(currentIndex === array.length - 1) {
            return (accumulator += `${currentStudent}`);
        }
        return accumulator += `${currentStudent}, `
    }, "");
    console.log(studentString)

// sort method
students.sort()
console.log(students)

numbers.sort((a, b) => b - a)
console.log(numbers)
// map method

// filter method

// find method

// some method

// every method



