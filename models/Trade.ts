import mongoose from "mongoose";

const TradeSchema = new mongoose.Schema({
  stockCode: {
    type: String,
    required: true,
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['buy', 'sell'],
    required: true,
  },
  expiration: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  }
});

const Trade =
  mongoose.models.Trade || mongoose.model("Trade", TradeSchema);

export default Trade;
