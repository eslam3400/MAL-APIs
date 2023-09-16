import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGO_URI!)
  .then(x => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

export default mongoose;
