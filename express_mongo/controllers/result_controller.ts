import { Request, Response } from "express";
import mongoose from "mongoose";
import Result from "../models/result_schema";

const getAllResults = async (req: Request, res: Response) => {
  return Result.find()
    .then((results) => res.status(201).json({ results }))
    .catch((error) => res.status(500).json({ error }));
};

const getResultById = async (req: Request, res: Response) => {
  const resultId = req.params.resultId;
  try {
    const result = await Result.findById(resultId);
    return result
      ? res.status(200).json({ result })
      : res.status(400).json({ message: "Result Not Found" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const deleteResult = (req: Request, res: Response) => {
  const resultId = req.params.resultId;
  return Result.findByIdAndDelete(resultId)
    .then((result) =>
      result
        ? res.status(201).json({ message: "Deleted" })
        : res.status(404).json({ message: "Not Found" }),
    )
    .catch((error) => res.status(500).json({ error }));
};

export default {
  getAllResults,
  getResultById,
  deleteResult,
};
