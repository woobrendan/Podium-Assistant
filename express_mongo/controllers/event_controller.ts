import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Event from "../models/events_schema";

const getAllEvents = async (req: Request, res: Response) => {
  return Event.find()
    .then((events) => res.status(201).json({ events }))
    .catch((error) => res.status(500).json({ error }));
};

export default {
  getAllEvents,
};
