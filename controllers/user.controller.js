import { response } from 'express';
import { userService } from '../services/user.services.js';

const getAll = (req, res, next) => {
  userService.getAll()
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((err) => {
      console.log(err);
      next(err);
    })
};

const getById = (req, res, next) => {
  userService.getById(req.params.id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      next(err);
    })
};

const deleteUser = (req, res, next) => {
  userService.deleteUser(req.params._id)
    .then(() => {
      res.status(200).json({ success: true, message: "User deleted successfully" })
    })
    .catch((err) => {
      next(err);
    })
};

const updateUser = (req, res, next) => {
  userService.updateUser(req.params._id, req.body)
    .then((response) => {
      res.status(200).json({ success: true, message: "User updated successfully", user: response })
    })
    .catch((err) => {
      next(err);
    })
};

export {
  getAll,
  getById,
  deleteUser,
  updateUser
};
