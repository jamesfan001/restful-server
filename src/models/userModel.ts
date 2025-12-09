
import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  OID: number;
  TableName: string;
  User?: string;
  FullName?: string;
  Pwd?: string;
  Level?: number;
  Showed?: boolean;
  Ext?: string;
  EMail?: string;
  StationID?: string;
  Payroll?: boolean;
}

const UserSchema: Schema = new Schema({
  OID: { type: Number, unique: true, required: true },
  TableName: { type: String, required: true, default: 'RESU' },
  User: { type: String, maxlength: 40 },
  FullName: { type: String, maxlength: 40 },
  Pwd: { type: String, maxlength: 20 },
  Level: { type: Number },
  Showed: { type: Boolean, default: false },
  Ext: { type: String, maxlength: 10 },
  EMail: { type: String, maxlength: 50 },
  StationID: { type: String, maxlength: 20 },
  Payroll: { type: Boolean, default: false },
});

export default mongoose.model<IUser>('User', UserSchema);
