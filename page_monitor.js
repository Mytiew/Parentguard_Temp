a = [];
b = [];
page = [];
page = [
  {
    name: "nongngneverdie",
    score: 87,
    pagename: "น้องง",
    image: '<img src="nongg.jpg" width="50">',
  },
];
page.push({
  name: "khaopodnews",
  score: 45,
  pagename: "ข่าวปด",
  image: '<img src="khaopod.jpg" width="50">',
});
page.push({
  name: "quoteV2",
  score: 65,
  pagename: "วิวาทะV2",
  image: '<img src="quotev2.jpg" width="50">',
});
page.push({
  name: "daghee",
  score: 78,
  pagename: "แดก",
  image: '<img src="daghee.jpg" width="50">',
});
page.push({
  name: "icepadie",
  score: 15,
  pagename: "",
  image: '<img src="padie.jpg" width="50">',
});
page.push({
  name: "MightyCaster",
  score: 30,
  pagename: "HeartRocker",
  image: '<img src="rocker.jpg" width="50">',
});

checkexistingpage = [];

document.getElementById("allPage").innerHTML = listAllPage();

function addToLikedPage(allpage) {
  for (var w = 0; w < allpage.length; w++) {
    if (!checkexistingpage.includes(allpage[w][0])) {
      page.push({
        name: allpage[w][0],
        score: allpage[w][3],
        pagename: allpage[w][1],
        image: '<img src="' + allpage[w][2] + '" width="50">',
      });
      checkexistingpage.push(allpage[w][0]);
    }
  }
  for (var j = 6; j < page.length; j++) {
    if (page[j].score >= 45) {
      var t = document.getElementById("customers");
      var r = t.insertRow(t.rows.length);
      r.id = page[j].name;
      var c1 = r.insertCell(0);
      var c2 = r.insertCell(1);
      var c3 = r.insertCell(2);
      var c4 = r.insertCell(3);
      c1.innerHTML = page[j].image + " " + page[j].name;
      c2.innerHTML = page[j].pagename;
      c3.innerHTML = page[j].score;
      c4.innerHTML = levelOfAbusive(page[j].score);
      document
        .getElementById(r.id)
        .addEventListener("click", linkToFacebookPage(page[j].name), false);
    } else {
      var t = document.getElementById("customers2");
      var r = t.insertRow(t.rows.length);
      r.id = page[j].name;
      var c1 = r.insertCell(0);
      var c2 = r.insertCell(1);
      var c3 = r.insertCell(2);
      var c4 = r.insertCell(3);
      c1.innerHTML = page[j].image + " " + page[j].name;
      c2.innerHTML = page[j].pagename;
      c3.innerHTML = page[j].score;
      c4.innerHTML = levelOfAbusive(page[j].score);
      document
        .getElementById(r.id)
        .addEventListener("click", linkToFacebookPage(page[j].name), false);
    }
  }
}
function levelOfAbusive(percentage) {
  if (percentage < 45)
    return (
      '<div id= "rectangle2" style="height:24px;width:100%"><div id="rectangleGreen" style="height:24px;width:' +
      percentage +
      '%"></div></div>'
    );
  else if (percentage > 45 && percentage < 70)
    return (
      '<div id= "rectangle2" style="height:24px;width:100%"><div id="rectangleYellow" style="height:24px;width:' +
      percentage +
      '%"></div></div>'
    );
  else
    return (
      '<div id= "rectangle2" style="height:24px;width:100%"><div id="rectangleRed" style="height:24px;width:' +
      percentage +
      '%"></div></div>'
    );
}

function listAllPage() {
  a.push(
    "<table id='customers' class='display' style='width:60%'; align='center'><thead><tr bgcolor='#FF0000'><th width='25%'>Pages</th><th width='20%'>Page's name</th><th width='25%'>Abusive scores in numeric</th><th width='50%'>Abusive  scores in bar chart</th></tr></thead><tbody>"
  );
  b.push(
    "<table id='customers2' class='display' style='width:60%'; align='center'><thead><tr bgcolor='#5ED4FB'><th width='25%'>Pages</th><th width='20%'>Page's name</th><th width='25%'>Abusive scores in numeric</th><th width='50%'>Abusive  scores in bar chart</th></tr></thead><tbody>"
  );

  var i;
  for (i = 0; i < page.length; i++) {
    if (page[i].score >= 45) {
      a.push(
        "<tr id='" +
          page[i].name +
          "'><th>" +
          page[i].image +
          " " +
          page[i].name +
          "</th><th>" +
          page[i].pagename +
          "</th><th>" +
          page[i].score +
          "<th>" +
          levelOfAbusive(page[i].score) +
          "</th></tr>"
      );
    } else {
      b.push(
        "<tr id='" +
          page[i].name +
          "'><th>" +
          page[i].image +
          " " +
          page[i].name +
          "</th><th>" +
          page[i].pagename +
          "</th><th>" +
          page[i].score +
          "<th>" +
          levelOfAbusive(page[i].score) +
          "</th></tr>"
      );
    }
  }
  a.push("</tbody><table>");
  b.push("</tbody><table>");
  return (
    a +
    "<br><h1 align='center' style='font-family: Rockwell; color:darkslategray'>Good Followed Pages Report</h1>" +
    b
  );
}

function linkToFacebookPage(pageName) {
  return function () {
    myFunction(pageName);
  };
}

for (var i = 0; i < page.length; i++) {
  document
    .getElementById(page[i].name)
    .addEventListener("click", linkToFacebookPage(page[i].name), false);
}

function myFunction(pageName) {
  window.open("https://www.facebook.com/" + pageName);
}
document.getElementById("customers").addEventListener("click", function () {
  $("#customers").DataTable({
    order: [2, "des"],
    destroy: true,
    searching: false,
    paging: false,
    info: false,
  });
});

document.getElementById("customers2").addEventListener("click", function () {
  $("#customers2").DataTable({
    order: [2, "asc"],
    destroy: true,
    searching: false,
    paging: false,
    info: false,
  });
});

chrome.runtime.onMessage.addListener(function (message) {
  if (message.type == "m1" || message.type == "m2") {
    sendMail(message.content);
  } else if (message.type == "monitor") {
    addToLikedPage(message.content);
  }
});

function sendMail(url) {
  if (url != "https://www.facebook.com/") {
    body = "ลูกคุณกำลังเข้าถึงข้อความที่ไม่เหมาะสมผ่านเว็บเพจนี้ " + url;
  } else {
    body = "ลูกคุณกำลังเข้าถึงข้อความที่ไม่เหมาะสมในขณะใช้งานเฟสบุ๊ค";
  }
  Email.send({
    Host: "smtp.gmail.com",
    Username: "manisa.sar@gmail.com",
    Password: "0616324963",
    To: "manisa.sar@gmail.com",
    From: "manisa.sar@gmail.com",
    Subject: "Caution!!",
    Body: body,
  });
}
