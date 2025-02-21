const fs = require('node:fs/promises');

fs.readdir('.').then((data) =>
  console.log(data).catch((error) => console.log(error)),
);
