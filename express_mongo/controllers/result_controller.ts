import { Request, Response } from "express";
import mongoose from "mongoose";
import Result from "../models/result_schema";

const createResult = (req: Request, res: Response) => {
  const { fastLap, hardCharger, result1, result2, result3, result4 } =
    req.body.results;
  const result = new Result({
    ...req.body.results,
    fastLap: { ...fastLap },
    ...(hardCharger
      ? {
          hardCharger: {
            ...hardCharger,
            entry: {
              ...hardCharger.entry,
              driver1: {
                ...req.body.driver1,
              },
              ...(req.body.driver2 ? { driver2: { ...req.body.driver2 } } : {}),
              ...(req.body.driver3 ? { driver3: { ...req.body.driver3 } } : {}),
            },
          },
        }
      : {}),
    result1: {
      ...result1,
      firstPlace: { ...result1.firstPlace },
      ...(result1.secondPlace
        ? { secondPlace: { ...result1.secondPlace } }
        : {}),
      ...(result1.thirdPlace ? { thirdPlace: { ...result1.thirdPlace } } : {}),
    },
    ...(result2
      ? {
          result2: {
            ...result2,
            firstPlace: { ...result2.firstPlace },
            ...(result2.secondPlace
              ? { secondPlace: { ...result2.secondPlace } }
              : {}),
            ...(result2.thirdPlace
              ? { thirdPlace: { ...result2.thirdPlace } }
              : {}),
          },
        }
      : {}),
    ...(result3
      ? {
          result3: {
            ...result3,
            firstPlace: { ...result3.firstPlace },
            ...(result3.secondPlace
              ? { secondPlace: { ...result3.secondPlace } }
              : {}),
            ...(result3.thirdPlace
              ? { thirdPlace: { ...result3.thirdPlace } }
              : {}),
          },
        }
      : {}),
    ...(result4
      ? {
          result4: {
            ...result4,
            firstPlace: { ...result4.firstPlace },
            ...(result4.secondPlace
              ? { secondPlace: { ...result4.secondPlace } }
              : {}),
            ...(result4.thirdPlace
              ? { thirdPlace: { ...result4.thirdPlace } }
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
