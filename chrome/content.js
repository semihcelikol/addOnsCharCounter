// Message listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "showCharCountPopup") {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const selectedText = selection.toString();
      const charCount = selectedText.length;

      // Create popup div
      const popup = document.createElement('div');
      popup.textContent = `Character Count: ${charCount}`;
      popup.style.position = 'absolute';
      popup.style.backgroundColor = '#fff';
      popup.style.border = '1px solid #ccc';
      popup.style.padding = '8px';
      popup.style.borderRadius = '4px';
      popup.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
      popup.style.zIndex = '9999';
      popup.style.fontSize = '14px';
      popup.style.color = '#333';

      // Calculate position: Based on selection's bounding rect
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      popup.style.top = `${rect.bottom + window.scrollY + 5}px`;  // Below with 5px gap
      popup.style.left = `${rect.left + window.scrollX}px`;      // Aligned to left

      // Append to page
      document.body.appendChild(popup);

      // Remove after 5 seconds
      setTimeout(() => {
        popup.remove();
      }, 5000);
    }
    sendResponse({ success: true });
  }
  return true;  // For async response
});