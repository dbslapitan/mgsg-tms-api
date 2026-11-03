import mongoose from 'mongoose';

export const connectDB = async () => {

  console.log('Connecting to MongoDB...');
  try {

    mongoose.connection.on("connected", () => {
      console.log('MongoDB connected...');
    });

    mongoose.connection.on("error", (err) => {
      console.error('MongoDB connection error:', err);
    });
    
    await mongoose.connect(process.env.MONGO_URI || '');
    
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};