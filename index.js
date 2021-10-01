// 21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
        
let x = "John";
let y = "Doe";
console.log(x +' <> ' + y)

// 22) Create an object with properties such name, surname, email
let myDetails =  {
    name: "John",
    surname: "Nkor",
    email: "john@gmail.com",
}
console.log(myDetails)


// 23) Delete the email property from the previously created object
delete myDetails.email
console.log(myDetails)


// 24) Create an array with 10 strings in it

let myArray = []
for (let i = 0; i < 10; i++ ) {
    myArray.push("The created value is:" + i)
}

// 25) Print in the console every string from the previous array
for (let string of myArray) {
    console.log(string)
}

// 26) Create an array with 100 random numbers in it
let randomNumbers = [];
      for (let i = 0; i < 100; i++) {
        randomNumbers.push(Math.round(Math.random() * 100));
      }

      console.log(randomNumbers);

//   27) Write a function to get the maximum and minimum values from the previously created array
 function getMaxMin(numbers) {
        let max = numbers[0];
        let min = numbers[0];

        for (let number of numbers) {
          max = number > max ? number : max;
          min = number < min ? number : min;
        }

        return { max, min };
      }

      console.log(getMaxMin(randomNumbers));


// 28) Create an array of arrays, in which every array has 10 random numbers
        
      let arrayOfArrays = [];

      for (let i = 0; i < 10; i++) {
        let innerArray = [];
        for (let j = 0; j < 10; j++) {
          innerArray.push(Math.round(Math.random() * 10));
        }
        arrayOfArrays.push(innerArray);
      }

      console.log(arrayOfArrays);

// 29) Create a function that gets 2 arrays as parameters and returns the longest one

      function returnLongest(array1, array2) {
        return array1.length >= array2.length ? array1 : array2;
      }
      console.log(returnLongest([1, 2], [1, 2, 3]));

// 30) Create a function that gets 2 arrays of numbers as parameters and returns the one with the higher sum of values

      function returnLargestSum(array1, array2) {
        let sum1 = 0;

        for (let number of array1) {
          sum1 += number;
        }

        let sum2 = 0;

        for (let number of array2) {
          sum2 += number;
        }

        return sum1 >= sum2 ? sum1 : sum2;
      }

      console.log(returnLargestSum([100, 999], [10000, 2, 3, 4]));



       