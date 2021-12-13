import express from "express";
import WeeklyTransaction from "../models/WeeklyTransaction.js";

const router = express.Router();

export const getTransactions = async (req, res, next) => {
  try {
    const weeklytransactions = await WeeklyTransaction.find();
    return res.status(200).json({
      success: true,
      count: weeklytransactions.length,
      data: weeklytransactions,
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
    const weeklytransaction = await WeeklyTransaction.create(req.body);
    return res.status(201).json({
      success: true,
      data: weeklytransaction,
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
    const weeklytransaction = await WeeklyTransaction.findById(req.params.id);
    if (!weeklytransaction) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }
    await weeklytransaction.remove();
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
