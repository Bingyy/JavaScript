### JS之队列操作 -- 用数组仿真

@(JavaScript)



```javascript
function nextInLine(arr, item) {
  // Your code here
  arr.push(item); // 加入到后面
  item = arr.shift(); // 从头释放一个元素

  return item;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
```



