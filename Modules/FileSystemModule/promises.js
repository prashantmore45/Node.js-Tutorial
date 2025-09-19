const fs = require("fs");
const path = require("path");

const fileName = "Promises.txt";
const filePath = path.join(__dirname, fileName);

/* File Directory */

const file = __dirname;

fs.promises
    .readdir(file)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));


/* Write a file : fs.promises.writeFile(path, data, options).then().catch(); */

fs.promises
.writeFile(filePath, "This is the initial Data.", 'utf-8')
.then(console.log("File has been Created Successfully"))
.catch((err) => console.log(err));


/* Read a file : fs.promises.readFile(path, options).then(data => ... ).catch(err => ...); */

fs.promises
.readFile(filePath, 'utf-8')
.then((data) => console.log(data))
.catch((err) => console.log("Error reading file:", err));


/* Append a file : fs.promises.appendFile(path, data, options).then().catch(); */

fs.promises
.appendFile(filePath, "\nThis is the updated Data.", "utf-8")
.then(console.log("File has been updated."))
.catch((err) => console.log(err));


/* Delete a file : fs.promises.unlink(path).then().catch(); */

fs.promises
.unlink(filePath)
.then(console.log("File has been deleted."))
.catch((err) => console.log(err));