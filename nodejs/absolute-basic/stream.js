const fs = require("fs");

const readStream = fs.createReadStream("./docs/large.txt");
const writeStream = fs.createWriteStream("./docs/large-write.txt");

// normal way
readStream.on("data", (data) => {
  writeStream.write(data.toString());
  writeStream.write("---chunk---");
});

//PIPE
readStream.pipe(writeStream);
