const fs = require('node:fs/promises');

async function main() {
  //   const data = await fs.readFile('mix.txt', { encoding: 'utf-8' });
  //   const transformedData = data.toLowerCase();
  //   await fs.writeFile('mix.txt', transformedData);
  const data = await fs.readFile('mix.txt', { encoding: 'utf-8' });
  const world = data.replace(',', '').split(' ');
  return world.length;
}

main()
  .then(console.log)
  .catch((error) => console.log(error));
