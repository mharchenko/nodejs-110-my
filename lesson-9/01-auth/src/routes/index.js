import express from 'express';
import studentsRoutes from './students.js';
import authRoutes from './auth.js';

const router = express.Router();

router.use('/auth', authRoutes);

router.use('/students', studentsRoutes);

export default router;
