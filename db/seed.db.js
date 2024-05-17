import Role from './models/role.model.js';

const seed = async () => {
  try {
    const existingRoles = await Role.find();
    if (existingRoles.length === 0) {
      await Role.create({ name: "ADMIN" });
      await Role.create({ name: "USER" });
      console.log('Roles inserted successfully.');
    } else {
      console.log('Roles already exist in the database.');
    }
  } catch (error) {
    console.error('Error inserting roles:', error);
  }
};

export default seed;