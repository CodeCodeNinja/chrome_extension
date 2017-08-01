import forStackOverflow from './site_specific_scripts/forStackOverflow';

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.text === forStackOverflow.reportText) {
    sendResponse(document.all[0]
      .querySelector(forStackOverflow.topicQuerySelector).innerText);
  }
});

chrome.browserAction.onClicked.addListener((activeTab) => {
  let newURL = "http://codecode.ninja";
  chrome.tabs.create({ url: newURL });
});