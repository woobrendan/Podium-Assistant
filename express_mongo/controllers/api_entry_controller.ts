import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import ApiEntries from "../models/apiEntry_schema";

const getAllEntries = async (req: Request, res: Response) => {
    return ApiEntries.find()
        .then((entry) => res.status(201).json({ entry }))
        .catch((error) => res.status(500).json({ error }));
};
