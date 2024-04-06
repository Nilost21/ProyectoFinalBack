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

const asignRoles = async () => {
  try {
    const users = await User.find();
    const userRole = await Role.findOne({ _id: 2 });

    const usersWithoutRole = users.filter(user => !user.role)
    if (usersWithoutRole.length > 0) {
      await Promise.all(usersWithoutRole.map(async user => {
        user.role = userRole;
        await user.save();
      }))
      console.log('Roles asignados correctamente a los usuarios sin rol.');
    } else {
      console.log('Todos los usuarios tienen un rol asignado.');
    }
  } catch (error) {
    console.error('Error al asignar roles a los usuarios:', error);
  }
};


export default seed;