import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import transactions from "./routes/transactions.js";
import weeklyTransaction from "./routes/weeklyTransaction.js";
import monthlyTransaction from "./routes/monthlyTransaction.js";


const app = express();
dotenv.config();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/transactions", transactions);
app.use("/weeklytransaction", weeklyTransaction);
app.use("/monthlytransaction", monthlyTransaction);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
