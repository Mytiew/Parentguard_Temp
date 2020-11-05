function getValue(t) {
  var isChecked = document.getElementById(t).checked;
  return isChecked;
}
function preventAbusive() {
  isCensor = document.getElementById("c01").checked;
  isParaphrase = document.getElementById("c02").checked;
  isNeither = document.getElementById("c03").checked;
  if (isCensor == true) {
    return "censor";
  } else if (isParaphrase == true) {
    return "paraphrase";
  } else {
    return "neither";
  }
}

document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.querySelector("button").addEventListener("click", onclick, false);
    function onclick() {
      isCensorCheck = preventAbusive();
      //       getValue("live_page_monitoring")
      isAdviceCheck = getValue("advice");
      //       getValue("notify_bullying")
      isAccessCheck = getValue("notify_abusive_access");
      isUnlikeCheck = getValue("unlike_abusive_page");
      chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
        chrome.tabs.sendMessage(tab[0].id, {
          stuff: isCensorCheck,
          stuff1: isAdviceCheck,
          stuff2: isAccessCheck,
          stuff3: isUnlikeCheck,
        });
      });
    }
  },
  false
);

function attach() {
  debugger;
  document.querySelector("button").addEventListener("click", onclick, false);
  function onclick() {
    isCensorCheck = preventAbusive();
    //       getValue("live_page_monitoring")
    isAdviceCheck = getValue("advice");
    //       getValue("notify_bullying")
    isAccessCheck = getValue("notify_abusive_access");
    isUnlikeCheck = getValue("unlike_abusive_page");
    chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
      chrome.tabs.sendMessage(tab[0].id, {
        stuff: isCensorCheck,
        stuff1: isAdviceCheck,
        stuff2: isAccessCheck,
        stuff3: isUnlikeCheck,
      });
    });
  }
}
// attach()

// document.addEventListener("DOMContentLoaded", function(event) {
//     //do work
//     attach()

//   });

//   $(document).ready(function(){
//     attach()

//     });
