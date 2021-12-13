import express from "express";
import MonthlyTransaction from "../models/MonthlyTransaction.js";

const router = express.Router();

export const getTransactions = async (req, res, next) => {
  try {
    const monthlytransactions = await MonthlyTransaction.find();
    return res.status(200).json({
      success: true,
      count: monthlytransactions.length,
      data: monthlytransactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

export const addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const monthlytransaction = await MonthlyTransaction.create(req.body);
    return res.status(201).json({
      success: true,
      data: monthlytransaction,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ message: error.message });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server error",
      });
    }
  }
};

export const deleteTransaction = async (req, res, next) => {
  try {
    const monthlytransaction = await MonthlyTransaction.findById(req.params.id);
    if (!monthlytransaction) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }
    await monthlytransaction.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server error",
    });
  }
};

export default router;
