import express from 'express';
import {
  getStudentController,
  getStudentsController,
} from '../controllers/students.js';

const router = express.Router();

router.get('/', getStudentsController);

router.get('/:id', getStudentController);

export default router;
