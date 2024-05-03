import jwt from 'jsonwebtoken';

export const isAccountOwner = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) throw new Error("Invalid Token");
  try {
    token = token.replace("Bearer ", "")
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = decode;
    if (user.isAdmin || user.id == req.params.id) {
      next();
    } else {
      throw new Error("Forbbiden! You are not the owner of this account");
    }
  } catch (error) {
    throw error;
  }
};