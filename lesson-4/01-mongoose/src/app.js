import express from 'express';

const app = express();

app.get('/students', (req, res) => {
  res.send('Students');
});

app.get('/students/:id', (req, res) => {
  //   console.log(req.params);
  const { id } = req.params;
  res.send(`Student ${id}`);
});

export default app;
