// EXAMINE THE DOCUMENT OBJECT
// console.dir(document) // show everything about document, tree

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);

// document.all[10].textContent = "Hello"; // Not a good way to select element

// console.log(document.forms);
// console.log(document.links);


// GETELEMENTBYID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";

// headerTitle.innerHTML = '<h3>Hello</h3>';

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello";
// // 操作前端样式
// items[1].style.fontWeight = 'bold'; 

// // items.style.backgroundColor = "grey"; // wrong

// for(var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = "#f4f4f4";
// }
// items[1].style.backgroundColor = "yellow";

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello";

// // 操作前端样式
// li[1].style.fontWeight = 'bold'; 
// li[1].style.backgroundColor = "yellow";
// for(var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = "#f4f4f4";
// }

/* query selector */
// var header = document.querySelector('#main-header');
// header.style.boarderBottom = "solid 4px #ccc";

// var input = document.querySelector('input');
// input.value = "Hello World"; // 直接修改input框的数值
// var submit = document.querySelector('input[type="submit"]')
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var item = document.querySelector('.list-group-item:last-child');
// item.style.color = 'blue';

// var item = document.querySelector('.list-group-item:nth-child(2)')
// item.style.color = "coral";


// /* query selector all */
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = "Hello";
// titles[1].textContent = "World";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// // odd.style.backgroundColor = 'gray';
// console.log(odd);
// odd.forEach(function(item){
// 	item.style.backgroundColor = "#f4f4f4";
// });

// even.forEach(function(item) {
// 	item.style.backgroundColor = '#ccc';
// });

/* 遍历DOM */

// parentNode
var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode);

// parentElement -- 一般等价于parentNode
// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement);

// childNodes -- 不建议使用，因为会把换行作为text元素，推荐使用children
// console.log(itemList.childNodes)
// console.log(itemList.children);
// console.log(itemList.children[1].textContent);
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstChild -- 无用
// console.log(itemList.firstChild)

// // firstElementChild -- 推荐
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "First";

// // lastChild -- 无用
// console.log(itemList.lastChild)

// // lastElementChild -- 推荐
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Last";

// nextSibling -- 还是不推荐，有换行内容
// console.log(itemList.nextSibling);

// // nextElementSibling -- 推荐
// console.log(itemList.nextElementSibling);

// previousSibling -- 无用
// console.log(itemList.previousSibling);

// previousElementSibling -- 推荐
// console.log(itemList.previousElementSibling);

// 创建元素
// div
// var newDiv = document.createElement('div')

// // add class
// newDiv.className = 'hello'
// newDiv.id = 'hello1'
// newDiv.setAttribute('title', 'Hello Div')

// // 创建Text node
// var newDivText = document.createTextNode('Hello World');
// // 加到div
// newDiv.appendChild(newDivText)
// var container = document.querySelector('header .container')
// var h1 = document.querySelector('header h1')

// newDiv.style.fontSize = '30px'
// container.insertBefore(newDiv, h1);

// console.log(newDiv)


// 事件 -- 非常重要

var button = document.getElementById('button')
button.addEventListener('click', buttonClick);

function buttonClick(e) {
	console.log("Button Clicked");
	document.getElementById('header-title').textContent = "Changed";
	document.querySelector('#main').style.backgroundColor = '#f4f4f4';
	console.log(e)
	console.log(e.target) // 拿到的是button对象
	console.log(e.target.id)
	console.log(e.target.className)

	console.log(e.type) // click事件
	console.log(e.clientX) //点击时X坐标
	console.log(e.clientY)

	console.log(e.altKey);
	console.log(e.ctrlKey);
	console.log(e.shiftKey);

}

var button = document.getElementById('button')
var box = document.getElementById('box')
var output = document.getElementById('output')

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

var select = document.querySelector('select');


itemInput.addEventListener('keydown', runEvent) // 输入框的响应事件
itemInput.addEventListener('keyup', runEvent)
itemInput.addEventListener('keypress', runEvent)

itemInput.addEventListener('focus', runEvent) // 输入框被点亮
itemInput.addEventListener('blur', runEvent) // 输入框失焦

itemInput.addEventListener('cut', runEvent) // 从输入框剪切事件
itemInput.addEventListener('paste', runEvent) // 向输入框粘贴事件

itemInput.addEventListener('input', runEvent) // 任何与输入相关的都是在这个事件类别内

button.addEventListener('click', runEvent)
button.addEventListener('dblclick', runEvent)
button.addEventListener('mousedown', runEvent)
button.addEventListener('mouseup',runEvent)
box.addEventListener('mouseenter',runEvent)
box.addEventListener('mouseleave',runEvent)
box.addEventListener('mouseover', runEvent)
box.addEventListener('mouseout', runEvent)
box.addEventListener('mousemove',runEvent)

select.addEventListener('change', runEvent) // 选择新的选项会出发改变事件
select.addEventListener('input', runEvent) // 和change事件几乎一致

form.addEventListener('submit', runEvent) // 表单的提交事件

function runEvent(e) {
	e.preventDefault();// 禁止闪现特征
	console.log('EVENT TYPE: ', e.type);
	console.log(e.target.value)

	output.innerHTML = '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY + '</h3>'
	document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}





