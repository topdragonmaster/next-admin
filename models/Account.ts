import mongoose from "mongoose";
import Station from "./Station";

const AccountSchema = new mongoose.Schema(
  {
    station: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Station",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    brokerage: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Account = mongoose.models.Account || mongoose.model("Account", AccountSchema);

export default Account;
