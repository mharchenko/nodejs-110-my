import express from 'express';
import {
  getStudentController,
  getStudentsController,
  deleteStudentsController,
  createStudentsController,
  replaceStudentsController,
  updateStudentsController,
} from '../controllers/students.js';

import { isValidId } from '../middlewares/isValidId.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  studentValidSchema,
  updateStudentValidSchema,
} from '../validation/student.js';

const router = express.Router();

const jsonParser = express.json();

router.get('/', ctrlWrapper(getStudentsController));

router.get('/:id', isValidId, ctrlWrapper(getStudentController));

router.delete('/:id', isValidId, ctrlWrapper(deleteStudentsController));

router.post(
  '/',
  jsonParser,
  validateBody(studentValidSchema),
  ctrlWrapper(createStudentsController),
);

router.put(
  '/:id',
  isValidId,

  jsonParser,
  validateBody(studentValidSchema),
  ctrlWrapper(replaceStudentsController),
);

router.patch(
  '/:id',
  isValidId,
  jsonParser,
  validateBody(updateStudentValidSchema),
  ctrlWrapper(updateStudentsController),
);

export default router;
