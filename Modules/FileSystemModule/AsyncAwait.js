const fs = require("fs");
const path = require("path");

const fileName = "AsyncAawaitTest.txt";
const filePath = path.join(__dirname, fileName);


/* READ FOLDER */

const  file = __dirname;

const readFolder = async () => {
    try {
        const res = await fs.promises.readdir(file);
        console.log(res);
    } catch (error) {
        console.error(error);
    }; 
};

readFolder();


/* Write a file : await fs.promises.writeFile(path, data, options) */

const writeFileExample = async () => {
    try {
        await fs.promises.writeFile(filePath, 'this is the initial data', 'utf-8');
        console.log('File has been created');
    } catch (error) {
        console.error(error);
    }
};

writeFileExample();

/* Read a file : await fs.promises.readFile(path, options) */

const readFileExample = async () => {
    try {
        const data = await fs.promises.readFile(filePath, "utf-8");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

readFileExample();


/* Append a file : fs.promises.appendFile(path, data, options); */

const appendFileExample = async () => {
    try {
        await fs.promises.appendFile(filePath, '\nThis is the updated Data', 'utf-8');
        console.log('File has been updated')
    } catch (error) {
        console.error(error);
    }
};

appendFileExample();


/* Delete a file : fs.promises.unlink(path) */

const deleteFileExample = async () => {
    try {
        await fs.promises.unlink(filePath);
        console.log('file has been deleted!');
    } catch (error) {
        console.log(error);
    }
};

deleteFileExample();