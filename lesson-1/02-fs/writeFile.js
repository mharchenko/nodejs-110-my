const fs = require('node:fs/promises');

fs.writeFile('write.txt', 'Hello Node.js!!!')
  .then((result) => console.log(result))
  //   .then(() => console.log('Done'))
  .catch((error) => console.log(error));
