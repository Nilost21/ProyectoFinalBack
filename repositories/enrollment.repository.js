import Enrollment from '../db/models/enrollment.model.js';
import GymClass from '../db/models/class.model.js';
import User from '../db/models/user.model.js';

const getAll = async () => {
  try {
    const res = await Enrollment.find();
    return res;
  } catch (error) {
    throw error;
  }
};

const newEnrollment = async (enrollmentData) => {
  try {
    const existingEnrollment = await Enrollment.findOne({
      user: enrollmentData.user,
      gymClass: enrollmentData.gymClass,
    });
    if (existingEnrollment) {
      throw new Error('El usuario ya está inscrito en esta clase.');
    }
    const classDate = await GymClass.findById(enrollmentData.gymClass);
    const dateAndTime = classDate.dateAndTime;
    const res = new Enrollment({
      user: enrollmentData.user,
      gymClass: enrollmentData.gymClass,
      dateAndTime: dateAndTime,
    });
    console.log("newEnrollment", res);
    await res.save();
    return res;
  } catch (error) {
    throw error;
  }
};

const getUserEnrollments = async (userId) => {
  try {
    console.log("hola", userId);
    let userEnrollments = await Enrollment.find({ user: userId });
    const className = await getClassNameForEnrollments(userEnrollments);
    const teacher = await getClassTeacherForEnrollments(userEnrollments);

    userEnrollments = userEnrollments.map((enrollment, index) => ({
      ...enrollment.toObject(),
      className: className[index],
      teacher: teacher[index],
    }));
    console.log("userEnrollments", userEnrollments);
    return userEnrollments;
  } catch (error) {
    throw new Error('Error fetching user enrollments: ' + error.message);
  }
};

const getEnrollmentsForToday = async () => {
  try {
    const currentDate = new Date();
    const startOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);
    const endOfDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59, 999);

    let enrollmentsForToday = await Enrollment.find({
      dateAndTime: {
        $gte: startOfDay,
        $lte: endOfDay
      }
    });

    // Obtener los nombres de usuario para las inscripciones del día actual
    const userNames = await getUserNamesForEnrollments(enrollmentsForToday);
    const className = await getClassNameForEnrollments(enrollmentsForToday);
    const teacher = await getClassTeacherForEnrollments(enrollmentsForToday);

    enrollmentsForToday = enrollmentsForToday.map((enrollment, index) => ({
      ...enrollment.toObject(),
      className: className[index],
      teacher: teacher[index],
      userName: userNames[index]
    }));
    return enrollmentsForToday;
  } catch (error) {
    throw new Error('Error fetching enrollments for the current day: ' + error.message);
  }
};

const getClassNameForEnrollments = async (enrollments) => {
  try {
    const classIds = enrollments.map(enrollment => enrollment.gymClass);
    const classes = await GymClass.find({ _id: { $in: classIds } }, 'name');
    const classNames = enrollments.map(enrollment => {
      const cls = classes.find(cls => cls._id.equals(enrollment.gymClass));
      return cls ? cls.name : 'Unknown name';
    });
    return classNames;
  } catch (error) {
    throw new Error('Error fetching class info for enrollments: ' + error.message);
  }
};

const getClassTeacherForEnrollments = async (enrollments) => {
  try {
    const classIds = enrollments.map(enrollment => enrollment.gymClass);
    const classes = await GymClass.find({ _id: { $in: classIds } }, 'teacher');
    const classTeachers = enrollments.map(enrollment => {
      const cls = classes.find(cls => cls._id.equals(enrollment.gymClass));
      return cls ? cls.teacher : 'Unknown Teacher';
    });
    return classTeachers;
  } catch (error) {
    throw new Error('Error fetching class teachers for enrollments: ' + error.message);
  }
};

const getUserNamesForEnrollments = async (enrollments) => {
  try {
    const userIds = enrollments.map(enrollment => enrollment.user);
    const users = await User.find({ _id: { $in: userIds } }, 'name lastname');
    const userNames = enrollments.map(enrollment => {
      const user = users.find(user => user._id.equals(enrollment.user));
      return user ? `${user.name} ${user.lastname}` : 'Unknown User';
    });
    return userNames;
  } catch (error) {
    throw new Error('Error fetching user names for enrollments: ' + error.message);
  }
};

const deleteEnrollment = async (id) => {
  try {
    const res = await Enrollment.findByIdAndDelete(id);
    return res;
  } catch (error) {
    throw error;
  }
};

export const enrollmentRepository = {
  getAll,
  newEnrollment,
  getUserEnrollments,
  getEnrollmentsForToday,
  deleteEnrollment
};
