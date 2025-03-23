import express from 'express';
import {
  loginController,
  registerController,
  logoutController,
  refreshController,
} from '../controllers/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { loginSchema, registerSchema } from '../validation/user.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = express.Router();

const jsonParser = express.json();

router.post(
  '/register',
  jsonParser,
  validateBody(registerSchema),
  ctrlWrapper(registerController),
);

router.post(
  '/login',
  jsonParser,
  validateBody(loginSchema),
  ctrlWrapper(loginController),
);

router.post('/logout', ctrlWrapper(logoutController));

router.post('/refresh', ctrlWrapper(refreshController));

export default router;
