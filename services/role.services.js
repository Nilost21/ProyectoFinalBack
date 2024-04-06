import Role from '../db/models/role.model.js';

const getAll = async () => {
  try {
    const res = await Role.find();
    return res;
  } catch (error) {
    throw error;
  }
};

const getById = async (id) => {
  try {
    const res = await Role.findOne({
      where: {
        _id: id,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

const getByName = async (name) => {
  try {
    const role = await Role.findOne({ name });
    return role;
  } catch (error) {
    throw error;
  }
};

export const roleService = {
  getAll,
  getById,
  getByName
};