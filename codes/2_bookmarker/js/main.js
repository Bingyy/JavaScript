// 为表单添加监听事件
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e) {
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  if(!validateForm(siteName, siteUrl)) {
    return false;
  }

  var bookmark = {
    name: siteName,
    url: siteUrl
  };

  // console.log(bookmark);
  /*
  // 本地存储
  localStorage.setItem('test', 'hello world'); // 添加键值数据
  console.log(localStorage.getItem('test')); // 获取数据
  localStorage.removeItem('test'); // 移除数据
  console.log(localStorage.getItem('test'));
  */

  // 测试看看是否已经有这个数据
  if(localStorage.getItem('bookmarks') == null) {
    var bookmarks = []; 
    // 添加到数组
    bookmarks.push(bookmark);
    // 设置到localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    // 从本地存储拿出数据
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.push(bookmark);
    // 再存入到localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  // 页面重新加载
  // window.location.reload(); 

  // 表单重置 -- Submit后置空
  document.getElementById('myForm').reset();

  // 禁止默认的闪现行为 
  e.preventDefault(); 
}

function deleteBookmark(url) {
  // console.log(url);
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  for(var i = 0; i < bookmarks.length; i++) {
    if(bookmarks[i].url == url) {
      // 从数组中移除
      bookmarks.splice(i,1);
    }
  }
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  // re-fetch
  fetchBookmarks();
}

// Fetch bookmarks
function fetchBookmarks() {
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // console.log(bookmarks);
  var bookmarksResults = document.getElementById('bookmarksResults');
  bookmarksResults.innerHTML = "";

  for(var i = 0;i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    // 直接加的是HTML标记，前端自动显示
    bookmarksResults.innerHTML += '<div class="well">' + 
                                  '<h3>' + name +
                                  ' <a class="btn btn-default" target="_blank" href="https://' + url + '">Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h3>' + 
                                  '</div>';
  }
}

function validateForm(siteName, siteUrl) {
  // 验证是否两项都输入了
  if(!siteName || !siteUrl) {
    alert("Please fill in the form");
    return false;
  }

  // 验证URL是否正确
  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if(!siteUrl.match(regex)) {
    alert('Please use a valid URL!')
    return false;
  }
  return true;
}
