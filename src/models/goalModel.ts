import mongoose, { Schema, Document } from 'mongoose';

interface IGoal extends Document {
  user: mongoose.Schema.Types.ObjectId;
  text: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const goalSchema: Schema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
);

const Goal = mongoose.model<IGoal>('Goal', goalSchema);
export default Goal;
