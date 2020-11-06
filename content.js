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
    data_logout = document.querySelectorAll(
      'div[data-ad-comet-preview="message"], div.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.c1et5uql, div[data-testid="post_message"], span._3l3x, div#u_0_0, span.fwb.fcg, a._6qw4, a#js_h._6qw4, div._3oba, div._1-h1._3q_l, div._1-h1._3q_m'
    );
    page_name_profile_logon = document.querySelectorAll(
      "#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.l9j0dhe7.dp1hu0rb.cbu4d94t.j83agx80 > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.taijpn5t.gs1a9yip.owycx6da.btwxx1t3.ihqw7lf3.cddn0xzi > div > div > div > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.g5gj957u.d2edcug0.hpfvmrgz.on77hlbc.buofh1pr.o8rfisnq.ph5uu5jm.b3onmgus.ihqw7lf3.ecm0bbzt > div > div > div:nth-child(1) > h2 > span > span"
    );
    page_name_post_logon = document.querySelectorAll(
      "#jsc_c_2g > div > a > strong > span"
    );
    page_name_comment_logon = document.querySelectorAll(
      "#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.l9j0dhe7.dp1hu0rb.cbu4d94t.j83agx80 > div.bp9cbjyn.j83agx80.cbu4d94t.d2edcug0 > div.rq0escxv.d2edcug0.ecyo15nh.hv4rvrfc.dati1w0a.cxgpxx05 > div > div.rq0escxv.l9j0dhe7.du4w35lb.qmfd67dx.hpfvmrgz.gile2uim.buofh1pr.g5gj957u.aov4n071.oi9244e8.bi6gxh9e.h676nmdw.aghb5jc5 > div.dp1hu0rb.d2edcug0.taijpn5t.j83agx80.gs1a9yip > div > div > div:nth-child(1) > div.du4w35lb.k4urcfbm.l9j0dhe7.sjgh65i0 > div > div > div > div > div > div > div > div > div > div:nth-child(2) > div > div:nth-child(4) > div > div > div.cwj9ozl2.tvmbv18p > ul > li > div:nth-child(1) > div > div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc > div:nth-child(1) > div.q9uorilb.bvz0fpym.c1et5uql.sf5mxxl7 > div > div > div:nth-child(2) > a > span > span"
    );
    page_name_scroll_logon = document.querySelectorAll(
      "#mount_0_0 > div > div:nth-child(1) > div.rq0escxv.l9j0dhe7.du4w35lb > div.rq0escxv.l9j0dhe7.du4w35lb > div > div > div.j83agx80.cbu4d94t.d6urw2fd.dp1hu0rb.l9j0dhe7.du4w35lb > div.l9j0dhe7.dp1hu0rb.cbu4d94t.j83agx80 > div.rq0escxv.lpgh02oy.du4w35lb.rek2kq2y > div > div > div > div.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.cbu4d94t.g5gj957u.d2edcug0.hpfvmrgz.rj1gh0hx.buofh1pr > div > div > div.rq0escxv.pmk7jnqg.du4w35lb.j83agx80.pfnyh3mw.i1fnvgqd.gs1a9yip.owycx6da.btwxx1t3.datstx6m.pedkr2u6.i42f9fw1.n1dktuyu.k4urcfbm.dvqrsczn.l23jz15m.d4752i1f > div > div > div > div > a > div.ow4ym5g4.auili1gw.rq0escxv.j83agx80.buofh1pr.g5gj957u.i1fnvgqd.oygrvhab.cxmmr5t8.hcukyx3x.kvgmc6g5.nnctdnn4.hpfvmrgz.qt6c0cv9.jb3vyjys.l9j0dhe7.du4w35lb.bp9cbjyn.btwxx1t3.dflh9lhu.scb9dxdr > div.ow4ym5g4.auili1gw.rq0escxv.j83agx80.buofh1pr.g5gj957u.i1fnvgqd.oygrvhab.cxmmr5t8.hcukyx3x.kvgmc6g5.tgvbjcpo.hpfvmrgz.qt6c0cv9.rz4wbd8a.a8nywdso.jb3vyjys.du4w35lb.bp9cbjyn.btwxx1t3.l9j0dhe7 > div > div > div > div > span > span"
    );
    page_name_logon_ = document.querySelectorAll(
      'div.gmql0nx0.l94mrbxd.p1ri9a11.lzcic4wl.aahdfvyu.hzawbc8m, strong, div[class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb mdeji52x e9vueds3 j5wam9gi lrazzd5p oo9gr5id"], span[class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql rrkovp55 a8c37x1j keod5gw0 nxhoafnm aigsh9s9 d9wwppkn fe6kdd0r mau55g9w c8b282yb mdeji52x e9vueds3 j5wam9gi lrazzd5p oo9gr5id"]'
    );

    data_logon = [
      ...page_name_profile_logon,
      ...page_name_post_logon,
      ...page_name_comment_logon,
      ...page_name_scroll_logon,
      ...page_name_logon_,
    ];

    fb_datas = [...data_logout, ...data_logon];
    fb_datas
      .filter((fb_data) => {
        return !all.includes(fb_data);
      })
      .map((fb_data) => {
        all.push(fb_data);
        req(fb_data);
      });

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
      el.style.backgroundColor = "yellow";
    });
  } else if (preventWay === "censor") {
    console.log(preventWay);
    $.post(`${api_url}/`, { javascript_data: el.innerText }, (data) => {
      console.log(`${el.innerText} is offensive = ${data}`);
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
