import { constants } from 'node:buffer';
import * as fs from 'node:fs/promises';
import path from 'node:path';

/**
 *@returns {Promises <Array<{id: string, name: string, ...}>}
 */

async function readContacts() {
  const data = await fs.readFile(path.resolve('db.json'), {
    encoding: 'utf-8',
  });
  //   console.log(JSON.parse(data));
  return JSON.parse(data);
}

/**
 *@param {Array<{id: string, name: string, ...}>} contacts
 *@returns {Promises <void>}
 */

async function writeContacts(contacts) {
  await fs.writeFile(
    path.resolve('db.json'),
    JSON.stringify(contacts, undefined, 2),
  );
}

//Add new contact//
readContacts().then(async (contacts) => {
  contacts.push({
    id: '6d15c557-3759-471c-99f7-2fd698143074',
    name: 'Jean Reno',
    phone: '+380979979797',
    email: 'reno@mail.net',
    job: 'Actor',
  });
  writeContacts(contacts);
});
