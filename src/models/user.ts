import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
  creation_date: { type: Date, default: Date.now },
  data: [],
});

export const User = mongoose.model('User', UserSchema);
