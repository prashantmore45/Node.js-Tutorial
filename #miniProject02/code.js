import readline from 'readline';
import file from "fs";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const fileCreation = () => {
    rl.question("Enter Your Filename: ", (filename) => {
        rl.question("Enter file Content: ", (content) => {
            file.writeFile(`${filename}.txt`, content, (err) => {
                if (err) {
                    console.error(`Error writing the file: , ${err.message}`);
                } else {
                    console.log(`File "${filename}.txt" created succesfully!`);
                }

                rl.close();
            })
        })
    })
};

fileCreation();