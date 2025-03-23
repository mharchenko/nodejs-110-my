import express from 'express';

import { auth } from '../middlewares/auth.js';
import studentsRoutes from './students.js';
import authRoutes from './auth.js';

const router = express.Router();

router.use('/auth', authRoutes);

router.use('/students', auth, studentsRoutes);

export default router;
