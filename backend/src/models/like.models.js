import { Schema, model } from 'mongoose';

const likeSchema = new Schema(
  {
    video: {
      type: Schema.Types.ObjectId,
      ref: 'Video',
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
    likedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const Like = model('Like', likeSchema);
