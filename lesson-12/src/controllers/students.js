import * as fs from 'node:fs/promises';
import path from 'node:path';

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

import { getEnvVar } from '../utils/getEnvVar.js';
import { uploadToCloudinary } from '../utils/uploadToCloudinary.js';

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
  let avatar = null;

  if (getEnvVar('UPLOAD_TO_CLOUDINARY') === 'true') {
    const result = await uploadToCloudinary(req.file.path);
    avatar = result.secure_url;
    // console.log(result);
  } else {
    await fs.rename(
      req.file.path,
      path.resolve('src', 'uploads', req.file.filename),
    );

    avatar = 'http://localhost:9192/uploads/req.file.filename';
  }

  const student = {
    ...req.body,
    userId: req.user.id,
    avatar,
  };
  // console.log(req.file);

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
