//File system 'fs' core module
//to read files, writing files, delete files and create directories

const fs = require("fs");

//READING FILES
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("last line");

// WRITING FILES
// fs.writeFile("./docs/blog1.txt", "Hello! New text", () => {
//   console.log("File was written");
// });

// fs.writeFile("./docs/blog2.txt", "Create a new file", () => {
//   console.log("New file created and written");
// });

//CREATING AND REMOVING  DIRECTORIES
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted!");
  });
}

//delete files
const fileTodelete = "./docs/deleteme.txt";
if (fs.existsSync(fileTodelete)) {
  fs.unlink(fileTodelete, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
