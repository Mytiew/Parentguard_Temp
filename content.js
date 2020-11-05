var position = $(window).scrollTop();
var preventWay;
var isAdviced;
var isAccessed;
var isUnliked;
likedpage = [];
all = [];

window.onload = likedPage();
function likedPage() {
  if (
    window.location.href == "https://www.facebook.com/pages/?category=liked"
  ) {
    var templistpage = document.getElementsByClassName(
      "uiList uiCollapsedList uiCollapsedListHidden _7ywh _509- _4ki"
    );
    var listpageid = templistpage[0].id;
    var idforlistpage = String(listpageid);
    var listLikedPages = document.getElementById(idforlistpage);
    var items = listLikedPages.getElementsByTagName("li");

    for (var i = 0; i < items.length; i++) {
      var item = items[i].getElementsByTagName("a");
      if (item[1] == undefined) continue;
      var str = item[1].getAttribute("href").split("/");
      var page = str[3];

      var str1 = item[1].getElementsByTagName("span");
      var pagename = str1[0].innerText;

      var str2 = item[0].getElementsByTagName("img");
      var img = str2[0].src;

      var score = Math.floor(Math.random() * 85) + 15;

      likedpage.push([page, pagename, img, score]);
    }
    chrome.runtime.sendMessage({ content: likedpage, type: "monitor" });
  }
}

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > position) {
    posts = document.querySelectorAll('div[data-ad-comet-preview="message"]');
    comments = document.querySelectorAll(
      "div.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.c1et5uql"
    );

    // console.log(posts)
    // console.log(comments)

    for (var i = 0; i < posts.length; i++) {
      if (!all.includes(posts[i])) {
        all.push(posts[i]);
        req(posts[i]);
      }
    }

    for (var i = 0; i < comments.length; i++) {
      if (!all.includes(comments[i])) {
        all.push(comments[i]);
        req(comments[i]);
      }
    }

    position = scroll + 1500;
  }
});

function req(el) {
  currentURL = window.location.href;
  if (preventWay == undefined) preventWay = "censor";
  classify(el, preventWay, currentURL);
}

function classify(el, preventWay, url) {
  const api_url = "http://localhost:5000";
  if (preventWay === "paraphrase") {
    $.post(`${api_url}/para`, { javascript_data: el.innerText }, (data) => {
      el.innerText = data;
      //  el.style.backgroundColor = 'yellow'
    });
  } else if (preventWay === "censor") {
    console.log(preventWay);
    $.post(`${api_url}/`, { javascript_data: el.innerText }, (data) => {
      if (data === "True") {
        el.style.backgroundColor = "transparent";
        el.style.textShadow = "0 0 5px rgba(0,0,0,0.5)";
        al = el.querySelectorAll("*");
        for (var i = 0; i < al.length; i++) {
          al[i].style.color = "transparent";
          al[i].style.backgroundColor = "transparent";
          al[i].style.textShadow = "0 0 5px rgba(0,0,0,0.5)";
        }
      }
    });
  }

  //   $.post(
  //     api_url,
  //     {
  //       javascript_data: el.innerText,
  //     },
  //     function (data) {
  //       if (data) {
  //         if (preventWay == "censor") {
  //           el.style.backgroundColor = "transparent";
  //           el.style.textShadow = "0 0 5px rgba(0,0,0,0.5)";
  //           al = el.querySelectorAll("*");
  //           for (var i = 0; i < al.length; i++) {
  //             al[i].style.color = "transparent";
  //             al[i].style.backgroundColor = "transparent";
  //             al[i].style.textShadow = "0 0 5px rgba(0,0,0,0.5)";
  //           }
  //         } else if (preventWay == "paraphrase") {
  //           $.post(
  //             `${api_url}/para`,
  //             {
  //               javascript_data: el.innerText,
  //             },
  //             function (data) {
  //               el.innerText = data;
  //               el.style.backgroundColor = "yellow";
  //             }
  //           );
  //         }

  //         if (isAdviced == undefined) isAdviced = true;
  //         if (isAdviced == true) adviceFeature(url);

  //         if (isAccessed == undefined) isAccessed = true;
  //         if (isAccessed == true) TooMuchAccessFeature(url);

  //         if (isUnliked == undefined) isUnliked = true;
  //         if (isUnliked == true) UnlikePageFeature(url);
  //       }
  //     }
  //   );
}

chrome.extension.onMessage.addListener(function (
  message,
  sender,
  sendResponse
) {
  //This is where the stuff you want from the background page will be
  preventWay = message.stuff;
  isAdviced = message.stuff1;
  isAccessed = message.stuff2;
  isUnliked = message.stuff3;
});

countPostPage = 0;
countPostTimeline = 0;
function adviceFeature(currentUrl) {
  if (currentUrl != "https://www.facebook.com/") {
    countPostPage++;
    if (countPostPage == 3) {
      url_img = "https://pbs.twimg.com/media/DeSW1YzUwAA7TPx.jpg";
      img = '<img src="' + url_img + '">';
      text = "<h1>เพจนี้ไม่เหมาะกับหนูหรอกลูก ออกมาเถอะนะ ถือว่าแม่ขอ!!!</h1>";
      popup = window.open();
      popup.document.write(text + img);
    }
  } else {
    countPostTimeline++;
    if (countPostTimeline == 3) {
      url_img =
        "https://www.amarinbabyandkids.com/app/uploads/2017/06/%E0%B8%94%E0%B8%B8.jpg";
      img = '<img src="' + url_img + '">';
      text = "<h1>อ่านอะไรอยู่คะลูก แม่เห็นนะ เตือนแล้วนะคะลูกรัก</h1>";
      popup = window.open();
      popup.document.write(text + img);
    }
  }
}

countForNotifyPage = 0;
countForNotifyTimeline = 0;
function TooMuchAccessFeature(currentUrl) {
  if (currentUrl != "https://www.facebook.com/") {
    countForNotifyPage++;
    if (countForNotifyPage == 6) {
      chrome.runtime.sendMessage({ content: currentUrl, type: "m1" });
    }
  } else {
    countForNotifyTimeline++;
    if (countForNotifyTimeline == 6) {
      chrome.runtime.sendMessage({ content: currentUrl, type: "m2" });
    }
  }
}

countForUnlikePage = 0;
function UnlikePageFeature(currentUrl) {
  countForUnlikePage++;
  if (countForUnlikePage == 10) {
    if (currentUrl != "https://www.facebook.com/") {
      setTimeout(function () {
        hov = document.querySelector(
          'a[data-testid="page_profile_liked_button_test_id"]'
        );
        hov.click();
      }, 100);
      setTimeout(function () {
        leave_group = document.querySelector(
          'a[data-testid="page_unlike_item_test_id"]'
        );
        leave_group.click();
      }, 300);
      setTimeout(function () {
        close = document.querySelector(
          'a[data-testid="dialog_title_close_button"]'
        );
        close.click();
      }, 1000);
      setTimeout(function () {
        close = document.querySelector(
          'a[data-testid="dialog_title_close_button"]'
        );
        close.click();
      }, 1100);
      setTimeout(function () {
        close = document.querySelector(
          'a[data-testid="dialog_title_close_button"]'
        );
        close.click();
      }, 1200);

      setTimeout(function () {
        window.location.replace("https://www.facebook.com/");
      }, 100);
    }
  }
}
