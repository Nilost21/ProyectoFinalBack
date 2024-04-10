import Role from './models/role.model.js';
import User from './models/user.model.js';

const seed = async () => {
  try {
    // Verifica si existen roles en la base de datos
    const existingRoles = await Role.find();

    // Si no hay roles en la base de datos, inserta los roles predeterminados
    if (existingRoles.length === 0) {
      await Role.create({ name: "ADMIN" });
      await Role.create({ name: "USER" });
      console.log('Roles insertados correctamente.');
    } else {
      console.log('Roles ya existen en la base de datos.');
    }
  } catch (error) {
    console.error('Error al insertar roles:', error);
  }
};

export default seed;