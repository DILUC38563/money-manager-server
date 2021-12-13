import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
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

const transactions = mongoose.model("transactions", transactionSchema);


export default transactions;
