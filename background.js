browser.runtime.onMessage.addListener(async (msg) => {
    if (msg.toContentScript) {
        const [tab] = await browser.tabs.query({
            active: true,
            currentWindow: true
        });
        browser.tabs.sendMessage(tab.id, msg.toContentScript);
    }
});
