import mongoose from 'mongoose';
const { Schema } = mongoose;

const roleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Role = mongoose.model('Role', roleSchema);

export default Role;