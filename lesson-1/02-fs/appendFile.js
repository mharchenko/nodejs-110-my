const fs = require('node:fs/promises');

fs.appendFile('appendFile.txt', 'I like Node.js!!!\n')
  .then(() => console.log('Done'))
  .catch((error) => console.log(error));
