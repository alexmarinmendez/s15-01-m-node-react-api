import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userCollection = 'users'

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now,
    },
  });

mongoose.set("strictQuery", false);
const userModel = mongoose.model(userCollection, userSchema)

export default userModel