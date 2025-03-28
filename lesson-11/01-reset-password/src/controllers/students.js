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
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export async function getStudentsController(req, res) {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);

  const filter = parseFilterParams(req.query);

  // const filter = parseFilterParams(req.query) || {}; // Гарантуємо, що filter завжди буде об'єктом

  const response = await getStudents({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
    userId: req.user.id,
  });

  res.json({
    status: 200,
    message: 'Students fetched successfully',
    data: response,
  });
}

export async function getStudentController(req, res) {
  const { id } = req.params;
  const student = await getStudent(id);

  if (student === null) {
    throw new createHttpError.NotFound('Student not found');
  }

  if (student.userId.toString() !== req.user.id.toString()) {
    throw new createHttpError.NotFound('Student is not found!');
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
  // const student = req.body;
  const student = {
    ...req.body,
    userId: req.user.id,
  };

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
      data: result.value,
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
