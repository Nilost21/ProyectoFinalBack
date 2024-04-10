import { authService } from '../services/auth.services.js';
import { userService } from '../services/user.services.js';

const signin = (req, res, next) => {
  const { email, password } = req.body;
  authService.signin(email, password)
    .then(({ user, token }) => {
      res.cookie('access_token', token, { httpOnly: true })
      res.status(200).json({ success: true, user, token })
    })
    .catch((err) => {
      console.log(err);
      next(err);
    })
};

const signup = (req, res, next) => {
  const user = req.body;
  authService.signup(user)
    .then((response) => {
      res.status(201).json({ success: true, message: "User created successfully", user: response });
    })
    .catch((err) => {
      next(err)
    })
};

const createAdminUser = async (req, res, next) => {
  try {
    const existingAdmin = await userService.getAdminUser();

    if (!existingAdmin) {
      const adminData = {
        username: process.env.ADMIN_USERNAME,
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
      }
      const createdAdmin = await authService.createAdminUser(adminData);
      console.log("ADMIN user created successfully.", createdAdmin)
    } else {
      console.log("An ADMIN user already exists:", existingAdmin);
    }
  } catch (error) {
    console.error("Error creating ADMIN user:", error);
  }
};

export {
  signin,
  signup,
  createAdminUser
};
