import jwt from 'jsonwebtoken';
import AuthorizationError from '../exceptions/AuthorizationError.js';

export const AdminPermission = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) return next(new AuthorizationError("Missing Authorization Token"));
  try {
    token = token.replace("Bearer ", "");
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = decode;
    if (user.isAdmin) {
      next();
    } else {
      throw new AuthorizationError("Forbidden");
    }
  } catch (error) {
    throw error;
  }
};