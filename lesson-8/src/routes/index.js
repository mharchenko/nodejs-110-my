import express from 'express';
import studentsRoutes from './students.js';
const router = express.Router();

router.use('/students', studentsRoutes);

export default router;
