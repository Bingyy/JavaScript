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



### 数组包含写法

用`arr.includes`方法，不是我想象的`contains`.

```javascript

var count = 0;
var list1 = [2,3,4,5,6];
var list2 = [7,8,9];
var list3 = [10,'J','Q','K','A'];

function cc(card) {
  var res = "";
  // Only change code below this line
  if (list1.includes(card)) {
    count++;
  }
  else if (list2.includes(card)) {
    count += 0; // 不变
  }
  else {
    count--;
  }
  
  if (count > 0 ) {
    res = count + " Bet";
  }
  else {
    res = count + " Hold";
  }
  return res;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');

```

**通过变量访问对象属性**

```javascript

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line

```

**删除属性**

```javascript

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"],
  "bark": "woof"
};

// Only change code below this line.
delete myDog.tails; // 这一句是关键

```

**检查对象是否包含某属性**

```javascript

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp]; # 注意此时传递捡来的key值是字符串~ 不可以用dot操作符号拿到对应的值
  }
  else {
    return "Not Found";
  }
  
}

// Test your code by modifying these values
checkObj("gift");

```



