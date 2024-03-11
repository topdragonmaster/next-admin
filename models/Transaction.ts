import mongoose from "mongoose";
import Station from "./Station";

const TransactionSchema = new mongoose.Schema({
  stockCode: {
    type: String,
    required: true,
  },
  station: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Station",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['deposit', 'withdraw'],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
});

const Transaction =
  mongoose.models.Transaction || mongoose.model("Transaction", TransactionSchema);

export default Transaction;
