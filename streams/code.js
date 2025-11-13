import  { createReadStream, createWriteStream } from 'fs';
import path from 'path';


const inputFilePath = path.join(import.meta.dirname, 'input.txt');
const outputFilePath = path.join(import.meta.dirname, 'output.txt');

const readStream = createReadStream(inputFilePath, { encoding: 'utf8', highWaterMark: 16 });
const writeStream = createWriteStream(outputFilePath);


// Listen for data chunks
readStream.on('data', (chunk) => {
    console.log("Buffer (chunk):", Buffer.from(chunk));
    console.log('Received chunk:', chunk);
    writeStream.write(chunk);
});


// Handle end of stream
readStream.on('end', () => {
    console.log('No more data to read.');
    writeStream.end();
});


// readStream.pipe(writeStream);


// Handle errors
readStream.on('error', (err) => console.error('Error reading file:', err));
writeStream.on('error', (err) => console.error('Error writing file:', err));