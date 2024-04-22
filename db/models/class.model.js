import mongoose from 'mongoose';
const { Schema } = mongoose;

const classSchema = new Schema(
  {
    _id: {
      type: Schema.Types.ObjectId,
      auto: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
      required: true,
    },
    date: {
      type: Date, 
      required: true,
    },
    hour: {
      type: Date, 
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Class = mongoose.model('Class', classSchema);

export default Class;
