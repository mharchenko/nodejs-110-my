import 'dotenv/config';
import app from './app.js';
import { getEnvVar } from './utils/getEnvVar.js';

import { initDataBaseConnection } from './db.js';

const PORT = getEnvVar('PORT', 9192);

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
