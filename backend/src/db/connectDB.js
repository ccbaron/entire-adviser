import mongoose from 'mongoose';
import { env } from '../config/env.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(env.mongodbUri);

    console.log('MongoDB connection established');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    throw error;
  }
};
