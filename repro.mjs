import signalExit from "signal-exit";

signalExit.load();
console.log("started (try quitting with CTRL-C)");
setTimeout(() => {}, 10_000);
