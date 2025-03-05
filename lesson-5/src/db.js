import mongoose from 'mongoose';

const DB_URL = process.env.DB_URL;

//   'mongodb+srv://mharchenko:VflFhYzuslkohH2w@cluster0.p6aqd.mongodb.net/university?retryWrites=true&w=majority&appName=Cluster0';

export function initDataBaseConnection() {
  return mongoose.connect(DB_URL);
}
