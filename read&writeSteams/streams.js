const fs = require("fs");

const readStream = fs.createReadStream("../file-system/docs/blog3.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("../file-system/docs/blog4.txt");

//READ AN WRITE

// readStream.on("data", (chunk) => {
//   console.log("----NEW CHUNK---");
//   console.log(chunk);
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

// PIPING produces the same result as the read and writing combine
readStream.pipe(writeStream);
