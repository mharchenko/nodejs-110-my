import express from 'express';

const app = express();

// app.use((req, res, next) => {
//   //   res.send('Uga-ga-ga');
//   console.log('Ogo-go');
//   next();
// });

// app.use((req, res, next) => {
//   //   res.send('Uga-ga-ga');
//   console.log('Ogo-go1');
//   next();
// });

// app.use((req, res, next) => {
//   //   res.send('Uga-ga-ga');
//   console.log('Ogo-go2');
//   next();
// });

// app.use((req, res, next) => {
//   //   res.send('Uga-ga-ga');
//   console.log('Ogo-go3');
//   next();
// });

// app.use((req, res, next) => {
//   const { key } = req.query;
//   //   console.log(req.query);

//   if (key !== '1532') {
//     return res.status(401).send({ message: 'Please provide valid APIkey!' });
//   }
//   next();
// });

function checkApiKey(req, res, next) {
  {
    const { key } = req.query;
    //   console.log(req.query);

    if (key !== '1532') {
      return res.status(401).send({ message: 'Please provide valid APIkey!' });
    }
    next();
  }
}

// app.use(checkApiKey);

function middleware(req, res, next) {
  console.log('Middleware');
  next();
}

// app.get('/', (req, res) => {
//   res.send('Hello middleware and  hedgehog!');
// });

const bigMiddleware = [checkApiKey, middleware, middleware, middleware];

app.get('/', bigMiddleware, (req, res) => {
  res.send('Hello middleware and  hedgehog!');
});

// app.use((req, res, next) => {
//   //   res.send('Uga-ga-ga');
//   console.log('Ogo-go4');
//   next();
// });

app.post('/', (req, res) => {
  res.send('Hello hedgehogик - тру-ля-ля!');
});

app.listen(8080, () => {
  console.log('Server started on port 8080 - Uy-ahh!!!');
});
