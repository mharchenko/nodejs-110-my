const fs = require('node:fs/promises');

fs.rename('texttext.txt', 'texttext123.txt')
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
