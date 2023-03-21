import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Entries from "../models/entry_schema";

const createEntry = (req: Request, res: Response) => {
  const entry = new Entries({
    _id: new mongoose.Types.ObjectId(),
    ...req.body,
    driver1: {
      ...req.body.driver1,
    },
    ...(req.body.driver2 ? { driver2: { ...req.body.driver2 } } : {}),
    ...(req.body.driver3 ? { driver3: { ...req.body.driver3 } } : {}),
  });

  return entry
    .save()
    .then((entry) => res.status(201).json({ entry }))
    .catch((error) => res.status(500).json({ error }));
};

export default {
  createEntry,
};
