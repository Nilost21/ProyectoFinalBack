import { authService } from '../services/auth.services.js';
import { userService } from '../services/user.services.js';
import { roleService } from '../services/role.services.js';

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
    // Verifica si ya existe un usuario con rol ADMIN
    const adminRole = await roleService.getByName("ADMIN");
    if (!adminRole) return console.log("No se encontró el rol ADMIN.");

    // Chequeo si existe algun usuario con rol ADMIN
    const existingAdmin = await userService.getUserByRoleId(adminRole._id);
    if (existingAdmin.length > 0) return console.log("Ya existe un usuario ADMIN:", existingAdmin);

    // Si no hay usuario con rol ADMIN, crea uno
    const adminData = {
      username: "admin",
      email: "admin@elitebody.com",
      password: "adminPassword",
      role: adminId
    };

    const createdAdmin = await authService.createAdminUser(adminData);
    res.status(201).json({ message: "Usuario ADMIN creado con éxito.", user: createdAdmin });
  } catch (error) {
    console.error("Error al crear usuario ADMIN:", error);
  }
};

export {
  signin,
  signup,
  createAdminUser
};
