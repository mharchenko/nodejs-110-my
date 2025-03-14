import createHttpError from 'http-errors';

import {
  getStudents,
  getStudent,
  deleteStudent,
  createStudent,
  replaceStudent,
  updateStudent,
} from '../services/students.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';

export async function getStudentsController(req, res, next) {
  const { page, perPage } = parsePaginationParams(req.query);
  const response = await getStudents({ page, perPage });
  // undefined();

  // console.log({ page, perPage });

  res.json({
    status: 200,
    message: 'Students fetched successfully',
    data: response,
  });
}

export async function getStudentController(req, res, next) {
  const { id } = req.params;
  const student = await getStudent(id);

  if (student === null) {
    // res.status(404).send('Student not found');
    throw new createHttpError.NotFound('Student not found');
  }

  res.json({
    status: 200,
    message: 'Students fetched successfully',
    data: student,
  });
}

export async function deleteStudentsController(req, res) {
  const { id } = req.params;
  const result = await deleteStudent(id);

  // console.log(result);
  if (result === null) {
    // res.status(404).send('Student not found');
    throw new createHttpError.NotFound('Student not found');
  }

  res.json({
    status: 200,
    message: 'Student deleted  successfully',
    data: result,
  });
}

export async function createStudentsController(req, res) {
  const student = req.body;
  const result = await createStudent(student);
  // console.log(result);
  // res.end();
  res.status(201).json({
    status: 201,
    message: 'Student create  successfully',
    data: result,
  });
}

export async function replaceStudentsController(req, res) {
  const { id } = req.params;
  const student = req.body;
  const result = await replaceStudent(id, student);
  // console.log(result);
  // res.end();

  if (result.updatedExisting === true) {
    return res.json({
      status: 200,
      message: 'Student updated  successfully',
      data: result,
    });
  }

  res.status(201).json({
    status: 201,
    message: 'Student create  successfully',
    data: result.value,
  });
}

export async function updateStudentsController(req, res) {
  const { id } = req.params;
  const student = req.body;
  const result = await updateStudent(id, student);
  // console.log(result);
  // res.end();

  if (result === null) {
    // res.status(404).send('Student not found');
    throw new createHttpError.NotFound('Student not found');
  }

  res.json({
    status: 200,
    message: 'Student updated  successfully',
    data: result,
  });
}
