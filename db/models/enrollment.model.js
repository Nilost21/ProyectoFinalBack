import mongoose from 'mongoose';
const { Schema } = mongoose;

const enrollmentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    class: {
      type: Schema.Types.ObjectId,
      ref: 'Class'
    }
  },
  { timestamps: true }
);

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

export default Enrollment;
