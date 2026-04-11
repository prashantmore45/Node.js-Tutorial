# 🚀 Node.js Tutorial: Mini-Projects and Backend Examples

![Node.js](https://img.shields.io/badge/Node.js-20%2B-brightgreen?logo=node.js) ![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?logo=javascript) ![License](https://img.shields.io/badge/License-MIT-blue)

> A hands-on learning path through Node.js — from core built-in modules and async patterns all the way to a full-stack capstone project with MongoDB.

---

## 📚 Table of Contents

1. [Overview](#-overview)
2. [Repository Map](#-repository-map)
3. [Global Entry Point](#-global-entry-point-appjs)
4. [Core Modules](#-core-modules)
   - [CommonJS: Export & Require](#commonjs-export--require)
   - [File System Module](#file-system-module)
   - [OS Module](#os-module)
   - [Path Module](#path-module)
5. [ES Modules](#-es-modules)
6. [HTTP Module](#-http-module)
7. [Events](#-events)
8. [Streams](#-streams)
9. [Mini-Projects](#-mini-projects)
   - [#1 — CLI To-Do List](#1--cli-to-do-list)
   - [#2 — CLI File Creator](#2--cli-file-creator)
   - [#3 — Random Joke Fetcher](#3--random-joke-fetcher)
   - [#4 — Currency Converter](#4--currency-converter)
   - [#5 — Weather App](#5--weather-app)
10. [Capstone: URL Shortener](#-capstone-url-shortener)
11. [Concept Mapping Table](#-concept-mapping-table)
12. [Getting Started](#-getting-started)
13. [Contributing](#-contributing)
14. [Author](#-author)

---

## ✨ Overview

This repository is a practical, example-driven learning path for mastering Node.js. It is organized in three layers:

1. **Concept folders** — focused deep-dives into individual built-in modules and patterns (`Modules/`, `ESmodule/`, `HTTP_Module/`, `Events/`, `streams/`)
2. **Mini-projects** — small CLI and API apps that combine multiple concepts (`#miniProject01` – `#miniProject05`)
3. **Capstone project** — a complete full-stack URL shortener backed by MongoDB (`URL_Shortner_Project/`)

**Prerequisites**

| Requirement | Notes |
|---|---|
| Node.js **20+** | Node 20.11+ for `import.meta.dirname` (streams); Node 18+ for native Fetch (project 5) |
| npm | Bundled with Node.js |
| MongoDB | Only required for the URL Shortener capstone |
| ExchangeRate API key | Only required for mini-project 4 |
| OpenWeatherMap API key | Only required for mini-project 5 |

---

## 🗺️ Repository Map

```
Node.js-Tutorial/
├── app.js                          ← global / globalThis / module / process demo
├── Nodejs_Master_Revision_Notes.txt
│
├── Modules/                        ← CommonJS deep-dive
│   ├── ExportandRequire/
│   │   ├── math.js                 ← module.exports patterns
│   │   └── app.js                  ← require() patterns
│   ├── FileSystemModule/
│   │   ├── sync.js                 ← synchronous fs
│   │   ├── async.js                ← callback-based fs
│   │   ├── promises.js             ← fs.promises + .then()/.catch()
│   │   └── AsyncAwait.js           ← fs.promises + async/await
│   ├── OSModule/
│   │   └── os.js
│   └── PathModule/
│       └── path.js
│
├── ESmodule/                       ← ES Module (import/export) demo
│   ├── math.js
│   └── app.js
│
├── HTTP_Module/                    ← Native HTTP server
│   └── server.js
│
├── Events/                         ← EventEmitter pattern
│   ├── app.js
│   └── eventcounts.json
│
├── streams/                        ← ReadStream / WriteStream
│   ├── code.js
│   ├── input.txt
│   └── output.txt
│
├── #miniProject01/code.js          ← CLI To-Do List
├── #miniProject02/code.js          ← CLI File Creator
├── #miniProject03/code.js          ← Random Joke Fetcher
├── #miniProject04/code.js          ← Currency Converter
├── #miniProject05/code.js          ← Weather App
│
└── URL_Shortner_Project/           ← Capstone: Full-stack URL Shortener
    ├── code.js                     ← HTTP server + routing
    ├── config/
    │   ├── db-client.js            ← MongoDB singleton
    │   └── env.js                  ← Zod env validation
    ├── public/
    │   ├── index.html
    │   └── style.css
    └── data/links.json
```

---

## 🌐 Global Entry Point (`app.js`)

The root `app.js` is the simplest possible Node.js script — it shows the four fundamental global objects available in every Node.js process.

```js
// app.js
global.console.log("subscribe");

globalThis.console.log("Prashant More");

globalThis.console.log(module);   // prints the Module wrapper object

console.log(globalThis.process);  // prints the Process object
```

```bash
node app.js
```

> **What you learn:** `global` and `globalThis` are the Node.js equivalents of `window` in the browser. Every file also has its own `module` object, and `process` gives you access to environment variables, arguments, and runtime info.

---

## 📦 Core Modules

### CommonJS: Export & Require

**Folder:** `Modules/ExportandRequire/`

Node.js's original module system. `math.js` demonstrates all three export styles:

```js
// math.js — three CommonJS export patterns

// 1. Single export
module.exports = add;

// 2. Named property exports
module.exports.add = add;
module.exports.mult = mult;

// 3. Object export (most common)
module.exports = { add, subs, mult, div };
```

`app.js` shows all corresponding `require()` patterns:

```js
// app.js — four require() patterns

// Single
const add = require("./math");

// Destructured (named)
const { add, mult } = require("./math");

// Full destructure
const { add, subs, mult, div } = require("./math");

// Namespace object
const math = require("./math");
console.log(math.add(5, 10));
```

```bash
cd Modules/ExportandRequire
node app.js
```

---

### File System Module

**Folder:** `Modules/FileSystemModule/`

This folder contains four files that teach the same five `fs` operations (`write`, `read`, `append`, `delete`, `rename`) using progressively more modern async patterns:

| File | Style | Key API |
|---|---|---|
| `sync.js` | Synchronous (blocking) | `fs.writeFileSync`, `fs.readFileSync`, … |
| `async.js` | Callback-based async | `fs.writeFile(path, data, cb)`, … |
| `promises.js` | Promise chains | `fs.promises.writeFile(…).then(…).catch(…)` |
| `AsyncAwait.js` | `async/await` | `await fs.promises.writeFile(…)` inside `async` function |

**Synchronous** (`sync.js`):
```js
const data = fs.readFileSync(filePath, "utf-8");
console.log(data);
```

**Callback** (`async.js`):
```js
fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) console.log(err);
    else console.log(data);
});
```

**Promise chain** (`promises.js`):
```js
fs.promises
    .readFile(filePath, "utf-8")
    .then((data) => console.log(data))
    .catch((err) => console.log("Error reading file:", err));
```

**Async/await** (`AsyncAwait.js`):
```js
const readFileExample = async () => {
    try {
        const data = await fs.promises.readFile(filePath, "utf-8");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};
readFileExample();
```

```bash
cd Modules/FileSystemModule
node sync.js
node async.js
node promises.js
node AsyncAwait.js
```

> **What you learn:** The four files form a deliberate teaching sequence — they show *why* async patterns exist (sync blocks the thread) and the evolution from callbacks → promises → async/await.

---

### OS Module

**Folder:** `Modules/OSModule/`

```js
// os.js
const os = require("os");

console.log("Platform:",         os.platform());
console.log("User:",             os.userInfo());
console.log("CPU Architecture:", os.arch());
console.log("Free Memory:",      os.freemem());
console.log("Total Memory:",     os.totalmem());
console.log("System Uptime:",    os.uptime());
console.log("Home Directory:",   os.homedir());
console.log("Temporary Dir:",    os.tmpdir());
console.log("OS Type:",          os.type());
// Also available (commented out in source):
// os.hostname(), os.networkInterfaces(), os.cpus()
```

```bash
cd Modules/OSModule
node os.js
```

---

### Path Module

**Folder:** `Modules/PathModule/`

```js
// path.js
const path = require("path");

const filepath = path.join("students", "folder", "data.txt");
// → students/folder/data.txt

const parseData   = path.parse(filepath);   // { root, dir, base, ext, name }
const resolvePath = path.resolve(filepath); // absolute path
const extname     = path.extname(filepath); // ".txt"
const basename    = path.basename(filepath);// "data.txt"
const dirname     = path.dirname(filepath); // "students/folder"

console.log({ parseData, resolvePath, extname, basename, dirname });
```

```bash
cd Modules/PathModule
node path.js
```

---

## 📐 ES Modules

**Folder:** `ESmodule/`

The modern JavaScript module system, now fully supported in Node.js. Compare with the CommonJS approach above.

```js
// math.js — named ES Module exports
export { add, subs, mult, div };
```

```js
// app.js — named ES Module imports
import { add, subs, mult, div } from "./math.js";

console.log(add(34, 116));   // 150
console.log(subs(55, 45));   // 10
```

> **Note:** To use `import`/`export` syntax, the folder must either contain a `package.json` with `"type": "module"` or files must use the `.mjs` extension.

```bash
cd ESmodule
node app.js
```

---

## 🌐 HTTP Module

**Folder:** `HTTP_Module/`

Building a web server with *zero* dependencies — just Node.js's built-in `http` module.

```js
// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<h1 style="color: blue;">I am Prashant More Web Developer</h1>`);
    } else if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This is the About Page.");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

server.listen(3000, () => console.log(`Listening on PORT 3000`));
```

```bash
cd HTTP_Module
node server.js
# Open http://localhost:3000  →  home page
# Open http://localhost:3000/about  →  about page
# Open http://localhost:3000/xyz  →  404
```

> **What you learn:** Manual routing via `req.url`, setting response headers with `res.writeHead`, and how a Node.js server process stays alive by listening for incoming connections.

---

## ⚡ Events

**Folder:** `Events/`

Node.js's `EventEmitter` is the backbone of its event-driven architecture. This example simulates a user session lifecycle and **persists event counts to a JSON file** across runs.

```js
// app.js
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register listeners
emitter.on("user-login", (username) => {
    eventcounts["user-login"]++;
    saveCounts();                        // writes to eventcounts.json
    console.log(`${username} logged in!`);
});

emitter.on("user-purchase", (username, item) => {
    eventcounts["user-purchase"]++;
    saveCounts();
    console.log(`${username} purchased ${item}!`);
});

// Emit events
emitter.emit("user-login", "Prashant");
emitter.emit("user-purchase", "Prashant", "Laptop");
emitter.emit("summary");               // prints running totals
```

```bash
cd Events
node app.js
# Run again — counts in eventcounts.json keep accumulating
```

> **What you learn:** `emitter.on(event, listener)` registers a handler; `emitter.emit(event, ...args)` triggers it synchronously. The `eventcounts.json` file shows how to persist lightweight state without a database.

---

## 🌊 Streams

**Folder:** `streams/`

Streams let you process data chunk-by-chunk instead of loading an entire file into memory. This example reads `input.txt` in **16-byte chunks** and writes each chunk to `output.txt`.

```js
// code.js
import { createReadStream, createWriteStream } from 'fs';

const readStream  = createReadStream(inputFilePath,  { encoding: 'utf8', highWaterMark: 16 });
const writeStream = createWriteStream(outputFilePath);

readStream.on('data', (chunk) => {
    console.log("Buffer (chunk):", Buffer.from(chunk));
    console.log('Received chunk:', chunk);
    writeStream.write(chunk);
});

readStream.on('end', () => {
    console.log('No more data to read.');
    writeStream.end();
});

// Equivalent one-liner (commented out in source):
// readStream.pipe(writeStream);
```

> **Node.js version:** `import.meta.dirname` (used for file path resolution) requires **Node.js 20.11+**.

```bash
cd streams
node code.js
# output.txt will contain a copy of input.txt
```

> **What you learn:** `highWaterMark` controls chunk size (16 bytes here, to make buffering visible). The `'data'`, `'end'`, and `'error'` events let you handle streaming manually; `.pipe()` is the convenient shortcut.

---

## 🛠️ Mini-Projects

All mini-projects use **ES Modules** (`import`/`export`). Each folder needs a `package.json` with `"type": "module"` (or rename `code.js` to `code.mjs`) to run without errors.

---

### #1 — CLI To-Do List

**Folder:** `#miniProject01/`  
**Concepts:** `readline`, in-memory state, recursive callbacks

```js
// code.js (excerpt)
import readline from "readline";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const todos = [];

const showMenu = () => {
    console.log("\n1: Add a Task");
    console.log("2. View Tasks");
    console.log("3. Exit");
    rl.question("Choose an Option: ", handleInput);
};

showMenu();
```

```bash
cd '#miniProject01'
node code.js
```

---

### #2 — CLI File Creator

**Folder:** `#miniProject02/`  
**Concepts:** Chained `readline.question` prompts, `fs.writeFile` (async/callback)

```js
// code.js (excerpt)
import readline from 'readline';
import file from "fs";

const fileCreation = () => {
    rl.question("Enter Your Filename: ", (filename) => {
        rl.question("Enter file Content: ", (content) => {
            file.writeFile(`${filename}.txt`, content, (err) => {
                if (err) console.error(`Error: ${err.message}`);
                else console.log(`File "${filename}.txt" created successfully!`);
                rl.close();
            });
        });
    });
};
```

```bash
cd '#miniProject02'
node code.js
```

---

### #3 — Random Joke Fetcher

**Folder:** `#miniProject03/`  
**Concepts:** Built-in `https.get`, streaming response chunks, JSON parsing, `chalk` for colored output  
**Dependencies:** `chalk`

```js
// code.js (excerpt)
import https from "https";
import chalk from "chalk";

https.get('https://official-joke-api.appspot.com/random_joke', (response) => {
    let data = '';
    response.on('data', (chunk) => { data += chunk; });
    response.on('end', () => {
        const joke = JSON.parse(data);
        console.log(chalk.red(joke.setup));
        console.log(chalk.blue.bgRed.bold(joke.punchline));
    });
});
```

```bash
cd '#miniProject03'
npm install chalk
node code.js
```

---

### #4 — Currency Converter

**Folder:** `#miniProject04/`  
**Concepts:** External REST API with authentication, `dotenv` for secrets, `readline` for input, currency math  
**Dependencies:** `chalk`, `dotenv`

**Setup:** Create a `.env` file in the folder:

```env
apikey=YOUR_EXCHANGERATE_API_KEY
```

Get a free key at [exchangerate-api.com](https://www.exchangerate-api.com/).

```js
// code.js (excerpt)
import dotenv from 'dotenv';
dotenv.config();

const url = `https://v6.exchangerate-api.com/v6/${process.env.apikey}/latest/USD`;

https.get(url, (response) => {
    // ... accumulate chunks ...
    response.on('end', () => {
        const rates = JSON.parse(data).conversion_rates;
        rl.question('Enter the amount in USD: ', (amount) => {
            rl.question('Enter the target currency (e.g., INR, EUR): ', (currency) => {
                const rate = rates[currency.toUpperCase()];
                console.log(chalk.green(`${amount} USD = ${(amount * rate).toFixed(2)} ${currency}`));
                rl.close();
            });
        });
    });
});
```

```bash
cd '#miniProject04'
npm install chalk dotenv
node code.js
```

---

### #5 — Weather App

**Folder:** `#miniProject05/`  
**Concepts:** Native `fetch` API (no third-party HTTP client), `readline/promises`, top-level `await`, `async/await` error handling  
**Dependencies:** `dotenv`  
**Minimum Node.js version:** 18+ (for native `fetch`)

**Setup:** Create a `.env` file in the folder:

```env
API_KEY=YOUR_OPENWEATHERMAP_API_KEY
```

Get a free key at [openweathermap.org](https://openweathermap.org/api).

```js
// code.js (excerpt)
import dotenv from 'dotenv';
dotenv.config();

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`;
    try {
        const response = await fetch(url);          // native fetch — no axios needed!
        if (!response.ok) throw new Error('City not found.');
        const data = await response.json();
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Description: ${data.weather[0].description}`);
    } catch (error) {
        console.log(error);
    }
};

const city = await rl.question('Enter a city name: '); // top-level await
await getWeather(city);
rl.close();
```

```bash
cd '#miniProject05'
npm install dotenv
node code.js
```

---

## 🏗️ Capstone: URL Shortener

**Folder:** `URL_Shortner_Project/`

A complete full-stack application built with **zero web frameworks** — only Node.js built-ins and a MongoDB driver.

### Architecture

```
Browser  →  GET /            → serves index.html (static file)
         →  POST /shorten    → inserts { shortCode, url, clicks } into MongoDB
         →  GET /links       → returns all links as JSON
         →  GET /:shortCode  → looks up shortCode, increments clicks, 302 redirects
```

### Key Concepts

| Concept | Where |
|---|---|
| Manual HTTP routing (GET + POST) | `code.js` lines 29–82 |
| Serving static files with `fs/promises.readFile` | `code.js` lines 9–17 |
| MongoDB CRUD (`insertOne`, `findOne`, `updateOne`, `find`) | `code.js` lines 35–77 |
| Crypto short-code generation | `code.js` line 68: `crypto.randomBytes(4).toString("hex")` |
| HTTP 302 redirect | `code.js` line 46: `res.writeHead(302, { Location: link.url })` |
| Click-count tracking (`$inc`) | `code.js` line 44 |
| `zod` schema validation for `.env` | `config/env.js` lines 6–10 |
| MongoDB singleton connection | `config/db-client.js` |
| Vanilla JS frontend (`fetch` + DOM) | `public/index.html` |

### Setup

**1. Create a `.env` file** in `URL_Shortner_Project/`:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017
DB_NAME=urlshortener
```

**2. Install dependencies:**

```bash
cd URL_Shortner_Project
npm install mongodb dotenv zod
```

**3. Run:**

```bash
node code.js
# Open http://localhost:3000
```

> If any `.env` variable is missing or invalid, the server exits immediately with a descriptive Zod validation error (see `config/env.js`).

---

## 🗂️ Concept Mapping Table

| Node.js Concept | File(s) |
|---|---|
| `global` / `globalThis` / `process` / `module` | `app.js` |
| CommonJS exports (`module.exports`) | `Modules/ExportandRequire/math.js` |
| CommonJS imports (`require()`) | `Modules/ExportandRequire/app.js` |
| ES Module exports (`export {}`) | `ESmodule/math.js` |
| ES Module imports (`import {}`) | `ESmodule/app.js` |
| Synchronous `fs` | `Modules/FileSystemModule/sync.js` |
| Callback-based async `fs` | `Modules/FileSystemModule/async.js` |
| Promise-chain async `fs` | `Modules/FileSystemModule/promises.js` |
| `async/await` with `fs.promises` | `Modules/FileSystemModule/AsyncAwait.js` |
| `os` built-in module | `Modules/OSModule/os.js` |
| `path` built-in module | `Modules/PathModule/path.js` |
| Native HTTP server + routing | `HTTP_Module/server.js`, `URL_Shortner_Project/code.js` |
| `EventEmitter` (custom events) | `Events/app.js` |
| Readable/Writable streams | `streams/code.js` |
| `readline` interactive CLI | `#miniProject01/code.js`, `#miniProject02/code.js` |
| `https.get` + streaming chunks | `#miniProject03/code.js`, `#miniProject04/code.js` |
| Native `fetch` + top-level `await` | `#miniProject05/code.js` |
| `dotenv` / environment variables | `#miniProject04/`, `#miniProject05/`, `URL_Shortner_Project/` |
| MongoDB driver (CRUD) | `URL_Shortner_Project/code.js`, `config/db-client.js` |
| `zod` env validation | `URL_Shortner_Project/config/env.js` |
| `crypto` (random bytes) | `URL_Shortner_Project/code.js` |
| HTTP 302 redirect | `URL_Shortner_Project/code.js` |

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/prashantmore45/Node.js-Tutorial.git
cd Node.js-Tutorial
```

### 2. Run concept examples (no dependencies)

Most concept folders (`Modules/`, `ESmodule/`, `HTTP_Module/`, `Events/`) have no npm dependencies and can be run immediately:

```bash
node Modules/OSModule/os.js
node HTTP_Module/server.js
node Events/app.js
```

### 3. Install dependencies for projects that need them

| Project | Directory | Install command |
|---|---|---|
| Random Joke Fetcher | `#miniProject03` | `npm install chalk` |
| Currency Converter | `#miniProject04` | `npm install chalk dotenv` |
| Weather App | `#miniProject05` | `npm install dotenv` |
| URL Shortener | `URL_Shortner_Project` | `npm install mongodb dotenv zod` |

### 4. Set up `.env` files where required

| Project | Variable | Description |
|---|---|---|
| `#miniProject04` | `apikey` | ExchangeRate-API key |
| `#miniProject05` | `API_KEY` | OpenWeatherMap API key |
| `URL_Shortner_Project` | `PORT` | Server port (e.g. `3000`) |
| `URL_Shortner_Project` | `MONGO_URI` | MongoDB connection string |
| `URL_Shortner_Project` | `DB_NAME` | Database name |

### 5. ES Module folders

The following folders use `import`/`export` syntax and require `"type": "module"` in a local `package.json` (or renaming `.js` to `.mjs`):

`ESmodule/`, `#miniProject01/` – `#miniProject05/`, `URL_Shortner_Project/`, `streams/`

---

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements or additional examples, feel free to fork the repository and submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## 👤 Author

**Prashant More**  
GitHub: [prashantmore45](https://github.com/prashantmore45)

