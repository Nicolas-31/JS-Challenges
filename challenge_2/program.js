
  /*recursive functions */
  /*Assignment_1 */
function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum ) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }
  console.log(rangeOfNumbers(1,5)) // [ 1, 2, 3, 4, 5 ]
  console.log(rangeOfNumbers(6,9)) // [ 6, 7, 8, 9 ]
  console.log(rangeOfNumbers(4,4)) // [ 4 ]

// countup function 
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

// Only change code below this line
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const countArray = countdown(n - 1);
      countArray.unshift(n);
      return countArray;
    }
  }
  // Only change code above this line
  console.log(countdown(5)); // [ 5, 4, 3, 2, 1 ]