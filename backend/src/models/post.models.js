import { Schema, model } from 'mongoose';

const postSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Post = model('Post', postSchema);
