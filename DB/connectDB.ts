import mongoose from "mongoose";

// connecting to database

const connectDB = async () => {
  const connectionUrl = process.env.MONGODB_URL;
  mongoose
    .connect(connectionUrl)
    .then(() => console.log(`Database connected successfully`))
    .catch((err) =>
      console.log("Getting Error from DB connection" + err.message)
    );
  mongoose.set("strictQuery", false);
};

export default connectDB;
