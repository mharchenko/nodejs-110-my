import express from 'express';
import {
  getStudentController,
  getStudentsController,
  deleteStudentsController,
  createStudentsController,
  replaceStudentsController,
  updateStudentsController,
} from '../controllers/students.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = express.Router();

const jsonParser = express.json();

router.get('/', ctrlWrapper(getStudentsController));

router.get('/:id', ctrlWrapper(getStudentController));

router.delete('/:id', ctrlWrapper(deleteStudentsController));

router.post('/', jsonParser, ctrlWrapper(createStudentsController));

router.put('/:id', jsonParser, ctrlWrapper(replaceStudentsController));

router.patch('/:id', jsonParser, ctrlWrapper(updateStudentsController));

export default router;
