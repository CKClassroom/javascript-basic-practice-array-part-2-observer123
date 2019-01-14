/* 
   條件: 題目 2 ~ 7 的操作都不能修改到 題目 1 建立的陣列
*/

// 1. 建立一個長度 50，數值介於 40~100 的陣列 (亂數產生) (Array)
const numbers = [];
while (numbers.length < 50) {
  const num = Math.round(Math.random() * 60 + 40);
  numbers.push(num);
}
console.log(numbers);
// 2. 篩選出大於 60 的結果
let greaterThanSixty = numbers.filter(item => item > 60);
console.log(greaterThanSixty);

// 3. 找出最大值
let maxNum = Math.max(...numbers);
console.log(maxNum);

// 4. 計算全部數值的合計數
let numSum = numbers.reduce( (prev, curr) => prev + curr );
console.log(numSum);

// 5. 找出最小值
let minNum = Math.min(...numbers);
console.log(minNum);

// 6. 全部開根號並乘上 10
function sqrtMult10(numbers) {
  var newNumbers = [];
  numbers.forEach(element => { newNumbers.push(Math.sqrt(element) * 10) });
  return newNumbers;
}
console.log(sqrtMult10(numbers));

// 7. 請依數值大小排序，由大而小
console.log(numbers.sort((a, b) => b - a));
// numArray.sort((a, b) => a - b); // For ascending sort
// numArray.sort((a, b) => b - a); // For descending sort