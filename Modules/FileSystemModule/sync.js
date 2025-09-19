const fs = require("fs");
const path = require("path");

// 1.Write File >  fs.writeFileSync(filePath, data, options): Writes data to a file.

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);
console.log(filePath);

const writeFile = fs.writeFileSync(
    fileName, 
    "This is the initial Data", 
    "utf-8"
);

console.log(writeFile);


// 2.Read File >  fs.readFileSync(filePath, options) : Reads a file's content and returns it as a strings or buffer.

const readFile = fs.readFileSync(filePath, "utf-8");

console.log(readFile);


// 3.Append File >  fs.appendFileSync(filePath, data, options) : Appends data to a file. If file does not exist, it creates the file.

const appendFile = fs.appendFileSync(filePath, "\nThis is the updated Data", "utf-8");

console.log(appendFile);



// 4.Delete File >  fs.unlinkSync(filePath) : Delete a file by its path

const deleteFile = fs.unlinkSync(filePath);

console.log(deleteFile);


// 5.Rename File >  fs.renameSync(oldPath, newPath) : Renames a file from one name to another.

const newUpdatedFileName = "updatedTest.txt";
const newFilePath = path.join(__dirname, newUpdatedFileName);

const renameFile = fs.renameSync(filePath, newFilePath);

console.log(renameFile);