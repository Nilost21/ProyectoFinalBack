import mongoose from 'mongoose';
const { Schema } = mongoose;

const enrollmentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    gymClass: {
      type: Schema.Types.ObjectId,
      ref: 'GymClass'
    },
    dateAndTime: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

export default Enrollment;
