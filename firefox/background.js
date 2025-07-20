// Create the context menu
browser.contextMenus.create({
  id: "character-counter",
  title: "Show Character Count",
  contexts: ["selection"]
});

// Listen for menu clicks
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "character-counter") {
    // Send message to content script: Show popup
    browser.tabs.sendMessage(tab.id, { action: "showCharCountPopup" });
  }
});