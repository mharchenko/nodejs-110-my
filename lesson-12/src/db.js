import mongoose from 'mongoose';

import { getEnvVar } from './utils/getEnvVar.js';

const DB_URL = getEnvVar('DB_URL');

//   'mongodb+srv://mharchenko:VflFhYzuslkohH2w@cluster0.p6aqd.mongodb.net/university?retryWrites=true&w=majority&appName=Cluster0';

export function initDataBaseConnection() {
  // console.log('Connecting to database:', DB_URL);
  return mongoose.connect(DB_URL);
}
// export async function initDataBaseConnection() {
//   try {
//     const connection = await mongoose.connect(DB_URL);
//     console.log('Database connected successfully');
//     return connection;
//   } catch (error) {
//     console.error('Database connection error:', error.message);
//     process.exit(1);
//   }
// }
