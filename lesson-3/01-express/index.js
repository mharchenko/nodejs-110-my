import express from 'express';

const app = express();

app.get('/', (req, res) => {
  //   console.log(req.headers);
  res.send('Hello world!');
  // res.send({ message: 'Hello world!' });
  //   res.json({ message: 'Hello world!' });
  //   res.json(null);
  res.send(null);
});

app.post('/', (req, res) => {
  res.send('Abracadabra!!!');
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
