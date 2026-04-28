chrome.alarms.create('showOverlay', { periodInMinutes: 20 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'showOverlay') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['content.js']
      });
    });
  }
});