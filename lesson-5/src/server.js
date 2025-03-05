import 'dotenv/config';
import app from './app.js';

import { initDataBaseConnection } from './db.js';

const PORT = process.env.PORT || 9090;

async function bootstrap() {
  try {
    await initDataBaseConnection();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
