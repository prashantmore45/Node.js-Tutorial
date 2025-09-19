const os = require("os");
const { constrainedMemory } = require("process");


// 1. Get the platform  and User Info

console.log("Platform:", os.platform());
console.log("User:", os.userInfo());

// 2. Get the OS CPU architecture

console.log("CPU Architecture:", os.arch());

// 3. Get  free System memory

console.log("Free Memory:", os.freemem());

// 4. Get total system memory

console.log("Total Memory:", os.totalmem());

// 5. Get system uptime

console.log("System Uptime:", os.uptime());

// 6. Get the home directory

console.log("Home Directory:", os.homedir());

// 7. Get the name 

/* console.log("Host Name:", os.hostname()); */

// 8. Get tge Network interfaces 

/*  console.log("Network Interfaces:", os.networkInterfaces());  */

//9. Get the CPU information 

/*  console.log("CPU Inof:", os.cpus());  */

// 10. Get the temporary directory

console.log("Temporary Directory:", os.tmpdir());

// 11. Get operating system name

console.log("Operating System:", os.type());


