const fs = require('fs');
const EventEmitter = require('events');
const { userInfo } = require('os');

const emitter = new EventEmitter();
const File = 'eventcounts.json';

let eventcounts = {};

if (fs.existsSync(File)) {
    eventcounts = JSON.parse(fs.readFileSync(File));
} else {
    eventcounts = {
        'user-login': 0,
        'user-purchase': 0,
        'profile-update': 0,
        'user-logout': 0
    }
}

function saveCounts() {
    fs.writeFileSync(File, JSON.stringify(eventcounts, null, 2));
}

emitter.on("user-login", (username) => {
    eventcounts["user-login"]++;
    saveCounts();
    console.log(`${username} logged in!`);
});

emitter.on("user-purchase", (username, item) => {
    eventcounts["user-purchase"]++;
    saveCounts();
    console.log(`${username} purchased ${item}!`);
});

emitter.on("profile-update", (username, field) => {
    eventcounts["profile-update"]++;
    saveCounts();
    console.log(`${username} updated their ${field}!`);
});

emitter.on("user-logout", (username) => {
    eventcounts["user-logout"]++;
    saveCounts();
    console.log(`${username} logged out!`);
});

emitter.on("summary", () => {
    console.log(eventcounts);
});


emitter.emit("user-login", "Prashant");
emitter.emit("user-purchase", "Prashant", "Laptop");
emitter.emit("profile-update", "Prashant", "email");
emitter.emit("user-logout", "Prashant");

emitter.emit("summary");