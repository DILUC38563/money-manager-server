import mongoose from "mongoose";

const WeeklyTransactionSchema = mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add some text"],
  },
  amount: {
    type: Number,
    required: [true, "Please add a positive or negative Number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const weeklyTransactions = mongoose.model(
  "weeklytransactions",
  WeeklyTransactionSchema
);

export default weeklyTransactions;
