import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  _id: string; // Explicitly define the _id field
  name: string;
  email: string;
  password: string;
  remarks?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    remarks: {
      type: String,
      default: 'No remarks',
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>('User', userSchema);
export default User;
