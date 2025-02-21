const fs = require('node:fs/promises');

fs.unlink('file.txt')
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
