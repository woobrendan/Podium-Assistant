import { Request, Response } from "express";
import mongoose from "mongoose";
import ApiEntries from "../models/apiEntry_schema";
import { entriesByEvent } from "../functions/helperFunc";

const getAllEntries = async (req: Request, res: Response) => {
    return ApiEntries.find()
        .then((entry) => res.status(201).json({ entry }))
        .catch((error) => res.status(500).json({ error }));
};

const getEntryById = async (req: Request, res: Response) => {
    const entryId = req.params.entryId;

    try {
        const entry = await ApiEntries.findById(entryId);
        return entry ? res.status(200).json({ entry }) : res.status(400).json({ message: "Entry Not Found" });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

const getEntriesByEvent = async (req: Request, res: Response) => {
    try {
        const entries = await ApiEntries.find();
        if (entries) {
            const eventEntries = entriesByEvent(entries);
            return res.status(200).json({ eventEntries });
        } else {
            res.status(400).json({ message: "Entrie Not Found" });
        }
    } catch (error) {
        return res.status(500).json({ error });
    }
};

//get entries sorted by event
// get entries per event

export default {
    getAllEntries,
    getEntryById,
    getEntriesByEvent,
};
