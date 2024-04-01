import { authService } from '../services/auth.services.js';

const signin = (req, res, next) => {
  const { email, password } = req.body;
  authService.signin(email, password)
    .then(({ user, token }) => {
      res.cookie('access_token', token, { httpOnly: true })
      res.status(200).json({ success: true, user })
    })
    .catch((err) => {
      console.log(err);
      next(err);
    })
};

const signout = (req, res, next) => {
  try {
    res.clearCookie('access_token');  // Limpiar cualquier token de sesión o información de autenticación.
    res.status(200).json({ success: true, message: 'Sesión cerrada exitosamente' });
  } catch (error) {
    next(error);
  }
};

const signup = (req, res, next) => {
  const user = req.body;
  authService.signup(user)
    .then((response) => {
      res.status(201).json({ success: true, message: 'User created successfully', user: response });
    })
    .catch((err) => {
      next(err)
    })
};

export {
  signin,
  signout,
  signup,
};
