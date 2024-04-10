import User from '../db/models/user.model.js';

const getAll = async () => {
  try {
    const res = await User
      .find({
        isActive: true
      }, '-password')
      .populate('role');
    return res;
  } catch (error) {
    throw error;
  }
};

const getById = async (id) => {
  try {
    const res = await User
      .findOne({
        _id: id,
        isActive: true
      }, '-password')
      .populate('role');
    return res;
  } catch (error) {
    throw error
  }
};

const getAdminUser = async () => {
  try {
    const res = await User
      .findOne({
        isAdmin: true
      });
    return res;
  } catch (error) {
    throw error;
  }
}

const deleteUser = async (id) => {
  try {
    await User.findByIdAndUpdate(id, { isActive: false });
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, userData) => {
  try {
    await User.findByIdAndUpdate({
      _id: id,
      isActive: true
    }, userData);
    return await getById(id);
  } catch (error) {
    throw error;
  }
};

export const userRepository = {
  getAll,
  getById,
  getAdminUser,
  deleteUser,
  updateUser,
};