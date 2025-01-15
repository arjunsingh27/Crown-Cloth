import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/crowncloths`, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("Error connecting to the database", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;