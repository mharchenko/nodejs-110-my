import express from 'express';

import Student from './models/student.js';

const app = express();

app.get('/students', async (req, res) => {
  const students = await Student.find();

  res.json(students);
});

app.get('/students/:id', async (req, res) => {
  //   console.log(req.params);
  const { id } = req.params;
  const student = await Student.findById(id);

  if (student === null) {
    res.status(404).send('Student not found');
  }

  res.json(student);
});

export default app;

// mongodb+srv://mharchenko:VflFhYzuslkohH2w@cluster0.p6aqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
