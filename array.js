
//1. Just show the strings in a new array.

let A = [50, 107, 'jack', 83, 'killer', 'son', true];
let stringArray = A.filter(element => typeof element === 'string');
console.log(stringArray);


// 2. Create a new array from numbers and sort them.


let a = [50, 107, 'jack', 83, 'killer', 'son', true];
let numberArray = a.filter(element => typeof element === 'number');
numberArray.sort((a, b) => a - b);
console.log(numberArray);

// 3. Make the string array reverse.


stringArray.reverse();
console.log(stringArray);


// 4. Combine both array of numbers and strings.


let combinedArray = numberArray.concat(stringArray);
console.log(combinedArray);

// 5. Delete 3 items from the 6th item from the combined array.

combinedArray.splice(5, 3);
console.log(combinedArray);

// 6. Show elements from A which are less than 100.


let lessThan100 = A.filter(element => typeof element === 'number' && element < 100);
console.log(lessThan100);

// 7. From string array remove the last letter and add word 'str' before each of the


let modifiedStringArray = stringArray.map(element => 'str' + element.slice(0, -1));
console.log(modifiedStringArray);


