import mongoose, { Schema, Document } from 'mongoose';

interface IUSERX extends Document {
  _id: string; // Explicitly define the _id field
  name: string;
  email: string;
  password: string;
  remarks?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const USERXSchema: Schema = new Schema(
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

const USER = mongoose.model<IUSERX>('User', USERXSchema);
export default USER;
