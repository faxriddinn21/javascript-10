//  1-misol

// const students = [
//     { name: "Quincy", percent: 96 },
//     { name: "Jason", percent: 84 },
//     { name: "Alexis", percent: 100 },
//     { name: "Sam", percent: 65 },
//     { name: "Katie", percent: 90 },
//     { name: "Anna", percent: 75 },
//   ];
  
//   function getNamesWithGrade(baho) {
//     const gradeMapping = {
//       5: { min: 85, max: 100 },
//       4: { min: 70, max: 85 },
//       3: { min: 60, max: 70 },
//     };
  
//     return students
//       .filter(student => student.percent >= gradeMapping[baho].min && student.percent < gradeMapping[baho].max)
//       .map(student => ({ name: student.name, percent: student.percent, grade: baho }))
//       .map(student => student.name);
//   }
  
//   const result = getNamesWithGrade(5);
//   console.log(result);
  




//   2-misol

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const wordCount = animals.reduce((acc, animal) => {
//   acc[animal] = (acc[animal] || 0) + 1;
//   return acc;
// }, {});

// console.log(wordCount);





// 3-misol

// const inputArray = [1, 2, 3, 4, 5];

// const squaredArray = inputArray.map(element => element ** 2);

// console.log(squaredArray);




// 4-misol

// const inputArray = [1, -4, 12, 0, -3, 29, -150];

// const positiveNumbersSum = inputArray
//   .filter(number => number > 0)
//   .reduce((sum, number) => sum + number, 0);

// console.log(positiveNumbersSum);






// 5-misol

// const inputString = 'George Raymond Richard Martin';

// const initials = inputString
//   .split(' ')
//   .map(word => word[0])
//   .join('');

// console.log(initials);





// 6-misol

// const people = [
//   { name: 'John', age: 13 },
//   { name: 'Mark', age: 56 },
//   { name: 'Rachel', age: 45 },
//   { name: 'Nate', age: 67 },
//   { name: 'Jeniffer', age: 65 }
// ];

// people.sort((a, b) => a.age - b.age);

// const youngest = people[0];
// const oldest = people[people.length - 1];

// const ageDifference = oldest.age - youngest.age;

// console.log(ageDifference);







// 7-misol

// const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const evenNumbers = inputArray.filter(number => number % 2 === 0);
// const oddNumbers = inputArray.filter(number => number % 2 !== 0);

// console.log("Juft sonlar:", evenNumbers);
// console.log("Toq sonlar:", oddNumbers);






// 8-misol

// const inputArray = [1, 2, 3, 2, 4, 5, 3, 6, 7];

// const uniqueValues = inputArray.reduce((acc, current) => {
//   if (!acc.includes(current)) {
//     acc.push(current);
//   }
//   return acc;
// }, []);

// console.log(uniqueValues);







// 9-misol

// const products = [
//   { id: 3, name: 'Product C', price: 500, rating: 4.5, discount: 10 },
//   { id: 1, name: 'Product A', price: 300, rating: 3.8, discount: 5 },
//   { id: 4, name: 'Product D', price: 700, rating: 4.2, discount: 15 },
//   { id: 2, name: 'Product B', price: 400, rating: 4.0, discount: 8 },
// ];

// products.sort((a, b) => {
//   if (a.id !== b.id) return a.id - b.id;
//   if (a.name !== b.name) return a.name.localeCompare(b.name);
//   if (a.price !== b.price) return a.price - b.price;
//   if (a.rating !== b.rating) return b.rating - a.rating;
//   return b.discount - a.discount;
// });

// console.log(products);






// 10-misol

// const products = [
//   { id: 3, name: 'Product C', price: 500, rating: 4.5, discount: 10 },
//   { id: 1, name: 'Product A', price: 300, rating: 3.8, discount: 5 },
//   { id: 4, name: 'Product D', price: 700, rating: 4.2, discount: 15 },
//   { id: 2, name: 'Product B', price: 400, rating: 4.0, discount: 8 },
// ];

// products.sort((a, b) => b.rating - a.rating);

// const topRatedProduct = products[0];
// console.log(topRatedProduct);







// 11-misol

// const products = [
//   { id: 3, name: 'Product C', price: 500, rating: 4.5, discount: 10 },
//   { id: 1, name: 'Product A', price: 300, rating: 3.8, discount: 5 },
//   { id: 4, name: 'Product D', price: 700, rating: 4.2, discount: 15 },
//   { id: 2, name: 'Product B', price: 400, rating: 4.0, discount: 8 },
// ];

// // sort method
// products.sort((a, b) => a.price - b.price);

// const cheapestProduct = products[0];
// console.log(cheapestProduct);







// 12-misol

// const products = [
//   { id: 3, name: 'Product C', price: 500, rating: 4.5, discount: 10 },
//   { id: 1, name: 'Product A', price: 300, rating: 3.8, discount: 5 },
//   { id: 4, name: 'Product D', price: 700, rating: 4.2, discount: 15 },
//   { id: 2, name: 'Product B', price: 400, rating: 4.0, discount: 8 },
// ];

// // reduce method
// const totalPrices = products.reduce((sum, product) => sum + product.price, 0);

// console.log(totalPrices);







// 13-misol

// const products = [
//   { id: 3, name: 'Product C', price: 500, rating: 4.5, discount: 10 },
//   { id: 1, name: 'Product A', price: 300, rating: 3.8, discount: 5 },
//   { id: 4, name: 'Product D', price: 700, rating: 4.2, discount: 15 },
//   { id: 2, name: 'Product B', price: 400, rating: 4.0, discount: 8 },
// ];

// const productNames = products.map(product => product.name);

// console.log(productNames);








// 14-misol

// const products = [
//   { id: 3, name: 'Product C', price: 500, rating: 4.5, discount: 10 },
//   { id: 1, name: 'Product A', price: 300, rating: 3.8, discount: 5 },
//   { id: 4, name: 'Product D', price: 700, rating: 4.2, discount: 15 },
//   { id: 2, name: 'Product B', price: 400, rating: 4.0, discount: 8 },
// ];

// const productWithId5 = products.find(product => product.id === 5);

// if (productWithId5) {
//   const productName = productWithId5.name;
//   console.log(productName);
// } else {
//   console.log("Element with id 5 not found.");
// }






// 15-misol

// let products = [
//   {
//     id: 6,
//     name: "Smarthpone",
//     price: 12000,
//     rating: 4.5,
//     discount: 20,
//   },
//   {
//     id: 2,
//     name: "Acer",
//     price: 10000,
//     rating: 4.3,
//     discount: 10,
//   },
//   {
//     id: 1,
//     name: "Mac book",
//     price: 17000,
//     rating: 4.7,
//     discount: 40,
//   },
//   {
//     id: 4,
//     name: "HP",
//     price: 21000,
//     rating: 4.1,
//     discount: 30,
//   },
//   {
//     id: 5,
//     name: "Dell",
//     price: 35000,
//     rating: 4.9,
//     discount: 30,
//   },
// ];

// const productIdToRemove = 4;

// const filteredProducts = products.filter(product => product.id !== productIdToRemove);

// console.log(filteredProducts);






// 16-misol

// const inputString = "Harflar";

// const isOnlyLetters = inputString.split("").every(char => char.match(/[a-zA-Z]/));

// console.log(isOnlyLetters);






// 17-misol

// function getTruthyFalsy(arr) {
//   const truthyArray = arr.filter(item => item);
//   const falsyArray = arr.filter(item => !item);

//   return { truthy: truthyArray, falsy: falsyArray };
// }

// const inputArray = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];
// const result = getTruthyFalsy(inputArray);

// console.log(result);







// 18-misol

// function getWordLengths(str) {
//   const wordArray = str.split(" ");
//   const wordLengths = wordArray.map(word => word.length);
//   return wordLengths;
// }

// const inputString = "Men Abdulaziz Programmerman";
// const result = getWordLengths(inputString);

// console.log(result);






// 19-misol

// function hasEmptySpace(str) {
//   const words = str.split(" ");
//   return words.some(word => word === "");
// }

// const inputString = "Men Abdulaziz Programmerman";
// const result = hasEmptySpace(inputString);

// console.log(result);








// 20-misol

// function objectToStringArray(obj) {
//   return Object.entries(obj).map(([key, value]) => key + value);
// }

// const inputObject = { a: 2, b: 5, c: 7 };
// const result = objectToStringArray(inputObject);

// console.log(result);







// 21-misol

// function digitSum(number) {
//   if (number === 0) {
//     return 0;
//   } else {
//     return number % 10 + digitSum(Math.floor(number / 10));
//   }
// }

// const result = digitSum(12345);
// console.log(result);







// 22-misol

// const pupils = [
//   { name: "Elbek", percent: 95 },
//   { name: "Zafar", percent: 78 },
//   { name: "Aziz", percent: 83 },
//   { name: "Jasur", percent: 88 },
// ];

// const averagePercent = pupils.reduce((sum, pupil) => sum + pupil.percent, 0) / pupils.length;

// const pupilsWithAverage = pupils.map(pupil => ({ ...pupil, averagePercent }));

// console.log(pupilsWithAverage);






// 23-misol

// const grades = [
//   { name: "Fizika", grade: 92, kredit: 6 },
//   { name: "Matematika", grade: 85, kredit: 6 },
//   { name: "Tarix", grade: 78, kredit: 4 },
//   { name: "Dasturlash", grade: 95, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 68, kredit: 8 },
// ];

// const updatedGrades = grades.map(course => {
//   const { grade } = course;
//   let newGrade;

//   if (grade >= 90) {
//     newGrade = 5;
//   } else if (grade >= 80) {
//     newGrade = 4;
//   } else if (grade >= 70) {
//     newGrade = 3;
//   } else {
//     newGrade = 2;
//   }

//   return { ...course, newGrade };
// });

// console.log(updatedGrades);





// 24-misol

// const grades = [
//   { name: "Fizika", percent: 92 },
//   { name: "Matematika", percent: 85 },
//   { name: "Tarix", percent: 78 },
//   { name: "Dasturlash", percent: 95 },
//   { name: "Kibrxavfsizlik", percent: 68 },
// ];

// const updatedGrades = grades.map(course => {
//   const { percent } = course;
//   const isPassed = percent >= 70;
  
//   return { ...course, isPassed };
// });

// console.log(updatedGrades);








// 25-misol

const pupils = [
  { name: "Elbek", percent: 95 },
  { name: "Zafar", percent: 78 },
  { name: "Aziz", percent: 83 },
  { name: "Jasur", percent: 88 },
  { name: "Bobur", percent: 66 },
  { name: "Kamron", percent: 75 },
];

const result = pupils.reduce(
  (count, pupil) => {
    if (pupil.percent >= 70) {
      count.passed++;
    } else {
      count.failed++;
    }
    return count;
  },
  { passed: 0, failed: 0 }
);

console.log(result);
