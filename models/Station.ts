import mongoose from "mongoose";

const stationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const Station =
  mongoose.models.Station || mongoose.model("Station", stationSchema);

export default Station;
