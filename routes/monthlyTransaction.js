import express from "express";
import {
  getTransactions,
  addTransaction,
  deleteTransaction,
} from "../controllers/monthlyTransaction.js";

const router = express.Router();

router.get("/", getTransactions);
router.delete("/:id", deleteTransaction);
router.post("/", addTransaction);
export default router;
