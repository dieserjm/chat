// Copyright 2019 dieserjm All rights reserved.

document.addEventListener('DOMContentLoaded', function() {
 var checkPageButton = document.getElementById('click');
  checkPageButton.addEventListener('click', function() {
   chrome.tabs.getSelected(null, function(tab) {
    window.open('https://www.dieserjm.cf/p/rechtliches.html', '_blank');
   });
 }, false);
}, false);