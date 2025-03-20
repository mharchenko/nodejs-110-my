import { registerUser, loginUser } from '../services/auth.js';

export async function registerController(req, res) {
  const user = await registerUser(req.body);
  res
    .status(201)
    .json({ status: 201, message: 'User register successfully', data: user });
}

export async function loginController(req, res) {
  const session = await loginUser(req.body.email, req.body.password);

  res.status(200).json({
    status: 200,
    message: 'User login successfully',
    data: { accessToken: session.accessToken },
  });
}
