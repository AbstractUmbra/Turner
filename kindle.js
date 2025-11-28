let timer = null;

function turnPage() {
    document.dispatchEvent(
        new KeyboardEvent("keydown", {
            key: "ArrowRight",
            bubbles: true
        })
    );
}

function start(intervalMs) {
    if (timer) return;
    timer = setInterval(turnPage, intervalMs);
}

function stop() {
    clearInterval(timer);
    timer = null;
}

browser.runtime.onMessage.addListener((msg) => {
    if (msg.command === "start") start(msg.interval);
    if (msg.command === "stop") stop();
});
