// Clac the area of rectangle
let len = 3;
let wed = 6; 
let area = len * wed;
console.log(`The area of the rectangle: ${area}`);

// Temp converter 
let celsius = 40;
let fahrenheit = (celsius * (9/5)) +32 
console.log(`The ${celsius}C is ${fahrenheit}F`);
celsius = (fahrenheit -32) / 1.8;
console.log(`The ${fahrenheit}F is ${celsius}C`);

// calc sum
let Numbers = [23,54,32,87,47]
let sum = 0;
for(let i = 0; i<=Numbers.length;i++){
    sum += Numbers[i];
}
console.log(`The sum = ${sum}`);

// Reverse the array
Numbers = [1,2,3,4,5,6,7,8,9,10];
Numbers = Numbers.reverse();
console.log(`The Reversed Numbers: ${Numbers}`);


// Stars 
let num = 5;
let stars = ""
for(let i = 0; i<num; i++){
    for(let j = 0; j<=i; j++){
        stars += "* ";
    }
    stars += "\n";
}
console.log(`${stars}`);