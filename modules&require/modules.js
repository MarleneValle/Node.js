//Split code into multiple different file and import and export element from those files
// keep our code much more
// - modular
// -reusable
// - and much easier to maintain

const { people, ages } = require("./people");
console.log(people, ages);

//Node comes with Modules build into it like 'os' (operating system)
const os = require("os");
console.log(os.platform(), os.homedir());

//file system core module
//to read files, writing files, delete files,  directories ans deleting files
