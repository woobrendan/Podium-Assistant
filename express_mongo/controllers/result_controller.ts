import { Request, Response } from "express";
import mongoose from "mongoose";
import Result from "../models/result_schema";

const createResult = (req: Request, res: Response) => {
  const result = new Result({
    ...req.body,
    fastLap: { ...req.body.fastLap },
    result1: {
      ...req.body.result1,
      firstPlace: { ...req.body.result1.firstPlace },
      secondPlace: { ...req.body.result1.secondPlace },
      thirdPlace: { ...req.body.result1.thirdPlace },
    },
    ...(req.body.result2
      ? {
          result2: {
            ...req.body.result2,
            firstPlace: { ...req.body.result2.firstPlace },
            ...(req.body.result2.secondPlace
              ? { secondPlace: { ...req.body.result2.secondPlace } }
              : {}),
            ...(req.body.result2.thirdPlace
              ? { thirdPlace: { ...req.body.result2.thirdPlace } }
              : {}),
          },
        }
      : {}),
    ...(req.body.result3
      ? {
          result3: {
            ...req.body.result3,
            firstPlace: { ...req.body.result3.firstPlace },
            ...(req.body.result3.secondPlace
              ? { secondPlace: { ...req.body.result3.secondPlace } }
              : {}),
            ...(req.body.result3.thirdPlace
              ? { thirdPlace: { ...req.body.result3.thirdPlace } }
              : {}),
          },
        }
      : {}),
    ...(req.body.result4
      ? {
          result4: {
            ...req.body.result4,
            firstPlace: { ...req.body.result4.firstPlace },
            ...(req.body.result4.secondPlace
              ? { secondPlace: { ...req.body.result4.secondPlace } }
              : {}),
            ...(req.body.result4.thirdPlace
              ? { thirdPlace: { ...req.body.result4.thirdPlace } }
              : {}),
          },
        }
      : {}),
  });

  return result
    .save()
    .then((result) => res.status(201).json({ result }))
    .catch((error) => res.status(500).json({ error }));
};

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

const updateResult = async (req: Request, res: Response) => {
  const resultId = req.params.resultId;
  return Result.findById(resultId)
    .then((result) => {
      if (result) {
        result.set(req.body);
        return result
          .save()
          .then((result) => res.status(201).json({ result }))
          .catch((error) => res.status(500).json({ error }));
      } else {
        res.status(404).json({ message: "Result not found" });
      }
    })
    .catch((error) => res.status(500).json({ error }));
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
  updateResult,
  deleteResult,
  createResult,
};
