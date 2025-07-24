// Create the context menu
chrome.contextMenus.create({
  id: "character-counter",
  title: "Show Character Count",
  contexts: ["selection"]
});

// Listen for menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "character-counter") {
    // Send message to content script: Show popup
    chrome.tabs.sendMessage(tab.id, { action: "showCharCountPopup" });
  }
});