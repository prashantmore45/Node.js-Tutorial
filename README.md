# 🚀 Node.js Tutorial: Mini-Projects and Backend Examples

![Node.js](https://img.shields.io/badge/Node.js-20%2B-brightgreen?logo=node.js) ![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?logo=javascript) ![License](https://img.shields.io/badge/License-MIT-blue)

> A hands-on Node.js learning path covering core modules, async patterns, and a full-stack capstone project.

---

## 📋 Description

This repo walks through Node.js from first principles — built-in modules (`fs`, `os`, `path`, `http`, `events`, streams), both module systems (CommonJS & ESM), and five CLI mini-projects, finishing with a full-stack URL Shortener backed by MongoDB.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Runtime | Node.js 20+ |
| Language | JavaScript (ESM & CommonJS) |
| Database | MongoDB (URL Shortener only) |
| Key packages | `chalk`, `dotenv`, `mongodb`, `zod` |

---

## ⚙️ Setup

### Prerequisites
- **Node.js 20+** · npm · MongoDB (URL Shortener only)

### Clone

```bash
git clone https://github.com/prashantmore45/Node.js-Tutorial.git
cd Node.js-Tutorial
```

### Install dependencies (per project)

| Project | Directory | Command |
|---|---|---|
| Random Joke Fetcher | `#miniProject03` | `npm install chalk` |
| Currency Converter | `#miniProject04` | `npm install chalk dotenv` |
| Weather App | `#miniProject05` | `npm install dotenv` |
| URL Shortener | `URL_Shortner_Project` | `npm install mongodb dotenv zod` |

### Environment variables

Create a `.env` file inside each project that requires one:

**`#miniProject04/.env`**
```
apikey=YOUR_EXCHANGERATE_API_KEY
```

**`#miniProject05/.env`**
```
API_KEY=YOUR_OPENWEATHERMAP_API_KEY
```

**`URL_Shortner_Project/.env`**
```
PORT=3000
MONGO_URI=mongodb://localhost:27017
DB_NAME=urlshortener
```

---

## 🚀 Usage

### Concept examples (no install needed)

```bash
node app.js                                    # globals demo
node Modules/OSModule/os.js
node Modules/PathModule/path.js
node Modules/FileSystemModule/sync.js          # also: async.js, promises.js, AsyncAwait.js
node Modules/ExportandRequire/app.js
node ESmodule/app.js
node HTTP_Module/server.js                     # → http://localhost:3000
node Events/app.js
node streams/code.js
```

### Mini-projects

```bash
cd '#miniProject01' && node code.js   # CLI To-Do List
cd '#miniProject02' && node code.js   # CLI File Creator
cd '#miniProject03' && node code.js   # Random Joke Fetcher
cd '#miniProject04' && node code.js   # Currency Converter  (needs .env)
cd '#miniProject05' && node code.js   # Weather App         (needs .env, Node 18+)
```

### URL Shortener (capstone)

```bash
cd URL_Shortner_Project
node code.js          # → http://localhost:3000
```

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

---

## 👤 Author

**Prashant More** · GitHub: [prashantmore45](https://github.com/prashantmore45)
