const { error } = require("console");
const fs = require("fs");
const path = require("path");

const fileName = "asyncTest.txt";
const filePath = path.join(__dirname, fileName);
console.log(filePath);


// 1.Write File >  fs.writeFile(path, data, options, callback): Writes data to a file.

const writeFile = fs.writeFile(filePath, "This is the initial Data", "utf-8", (err) => {
    if (err) console.log(err);
    else console.log("File has been Saved");
});

console.log(writeFile);


// 2.Read File >  fs.readFile(path, options, callback(err, data)) : Reads a file's content and returns it as a strings or buffer.

const readFile = fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) console.log(err);
    else console.log(data);
});

console.log(readFile);


// 3.Append File >  fs.appendFile(filePath, data, options, callback) : Appends data to a file. If file does not exist, it creates the file.

const appendFile = fs.appendFile(filePath, "\nThis is the updated Data", "utf-8", (err) => {
    if (err) console.log(err);
    else console.log("File has been updated");
});

console.log(appendFile);



// 4.Delete File >  fs.unlink(filePath, callback) : Delete a file by its path

const deleteFile = fs.unlink(filePath, (err) => {
    if (err) console.log(err);
    else console.log("File has been Deleted");
});

console.log(deleteFile);


// 5.Rename File >  fs.rename(oldPath, newPath) : Renames a file from one name to another.

const newUpdatedFileName = "updatedAsyncTest.txt";
const newFilePath = path.join(__dirname, newUpdatedFileName);

console.log(newFilePath);

const renameFile = fs.rename(filePath, newFilePath, (err) => {
    if (err) console.log(err);
    else console.log("File has been Renamed");
});

console.log(renameFile);