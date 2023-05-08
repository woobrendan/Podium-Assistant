import { Request, Response } from "express";
import mongoose from "mongoose";
import Result from "../models/result_schema";

const createResult = (req: Request, res: Response) => {
  const incomingResult = req.body.results;
  const result = new Result({
    ...incomingResult,
    fastLap: { ...incomingResult.fastLap },
    ...(incomingResult.hardCharger
      ? {
          hardCharger: {
            ...incomingResult,
            entry: {
              ...incomingResult.hardCharger.entry,
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
      ...incomingResult.result1,
      firstPlace: { ...incomingResult.result1.firstPlace },
      ...(incomingResult.result1.secondPlace
        ? { secondPlace: { ...incomingResult.result1.secondPlace } }
        : {}),
      ...(incomingResult.result1.thirdPlace
        ? { thirdPlace: { ...incomingResult.result1.thirdPlace } }
        : {}),
    },
    ...(incomingResult.result2
      ? {
          result2: {
            ...incomingResult.result2,
            firstPlace: { ...incomingResult.result2.firstPlace },
            ...(incomingResult.result2.secondPlace
              ? { secondPlace: { ...incomingResult.result2.secondPlace } }
              : {}),
            ...(incomingResult.result2.thirdPlace
              ? { thirdPlace: { ...incomingResult.result2.thirdPlace } }
              : {}),
          },
        }
      : {}),
    ...(incomingResult.result3
      ? {
          result3: {
            ...incomingResult.result3,
            firstPlace: { ...incomingResult.result3.firstPlace },
            ...(incomingResult.result3.secondPlace
              ? { secondPlace: { ...incomingResult.result3.secondPlace } }
              : {}),
            ...(incomingResult.result3.thirdPlace
              ? { thirdPlace: { ...incomingResult.result3.thirdPlace } }
              : {}),
          },
        }
      : {}),
    ...(incomingResult.result4
      ? {
          result4: {
            ...incomingResult.result4,
            firstPlace: { ...incomingResult.result4.firstPlace },
            ...(incomingResult.result4.secondPlace
              ? { secondPlace: { ...incomingResult.result4.secondPlace } }
              : {}),
            ...(incomingResult.result4.thirdPlace
              ? { thirdPlace: { ...incomingResult.result4.thirdPlace } }
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
