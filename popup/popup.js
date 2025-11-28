const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const intervalInput = document.getElementById("interval");
const status = document.getElementById("status");

startBtn.onclick = () => {
    const intervalSec = Number(intervalInput.value);
    if (intervalSec < 1) return;

    status.textContent = `Running every ${intervalSec}s`;

    browser.runtime.sendMessage({
        toContentScript: {
            command: "start",
            interval: intervalSec * 1000
        }
    });
};

stopBtn.onclick = () => {
    status.textContent = "Stopped";

    browser.runtime.sendMessage({
        toContentScript: { command: "stop" }
    });
};
