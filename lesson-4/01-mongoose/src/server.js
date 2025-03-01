import app from './app.js';

const PORT = process.env.PORT || 9090;

function bootstrap() {
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

bootstrap();
