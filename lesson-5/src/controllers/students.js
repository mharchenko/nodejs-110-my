import { getStudents, getStudent } from '../services/students.js';

export async function getStudentsController(req, res, next) {
  const students = await getStudents();
  // undefined();

  res.json(students);
}

export async function getStudentController(req, res, next) {
  const { id } = req.params;
  const student = await getStudent(id);

  if (student === null) {
    res.status(404).send('Student not found');
  }

  res.json(student);
}
