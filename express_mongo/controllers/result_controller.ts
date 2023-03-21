import { Request, Response } from "express";
import mongoose from "mongoose";
import Result from "../models/result_schema";

const getAllResults = async (req: Request, res: Response) => {
  return Result.find()
    .then((results) => res.status(201).json({ results }))
    .catch((error) => res.status(500).json({ error }));
};

export default {
  getAllResults,
};
