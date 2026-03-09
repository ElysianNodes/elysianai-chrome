// Background script for ElysianAI Chrome extension
chrome.action.onClicked.addListener(async (tab) => {
  try {
    // Toggle the side panel
    await chrome.sidePanel.open({ tabId: tab.id });
  } catch (error) {
    console.error('Error opening side panel:', error);
  }
});

// Handle extension installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('ElysianAI Chrome extension installed');
});
