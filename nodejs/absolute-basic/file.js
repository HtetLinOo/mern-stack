const fs = require("fs");

// File Read
fs.readFile("./docs/test.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

// Check File
if (!fs.existsSync("./docs/test.txt")) {
  // File Write
  fs.writeFile("./docs/test.txt", "Hello Node JS", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("writing files");
  });
} else {
  //delete file
  fs.unlink("./docs/test.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}

// Check Folder
if (!fs.existsSync("./test-folder")) {
  //Folder Create
  fs.mkdir("./test-folder", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
} else {
  //Folder Delete
  fs.rmdir("./test-folder", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Deleted folder");
  });
}
