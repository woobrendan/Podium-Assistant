import express from "express";
import mongoose from "mongoose";
import http from "http";
import { config } from "./config/config";
import entryRoute from "./routes/entriesRoutes";
import resultRoute from "./routes/resultRoutes";
import eventRoute from "./routes/eventRoutes";
import seriesRoute from "./routes/seriesRoutes";
import apiEntryRoute from "./routes/apiEntryRoutes";

import updateApiEntries from "./functions/updateApiEntries";

const morgan = require("morgan");
const router = express();

router.use(morgan("dev"));

mongoose.set("strictQuery", true);

mongoose
    .connect(config.mongo.url, { retryWrites: true, w: "majority" })
    .then(async () => {
        console.log("Connected");
        await updateApiEntries();
        startServer();
    })
    .catch((error) => {
        console.log("Error connecting to server: ", error);
    });

//** Only Start Server if Mongo Connects */

const startServer = () => {
    router.use((req, res, next) => {
        res.status(res.statusCode);
        next();
    });

    router.use(express.urlencoded({ extended: true }));
    router.use(express.json());

    //** Rules of API */
    router.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

        if (req.method == "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
            return res.status(200).json({});
        }

        next();
    });

    //** Routes */
    router.use("/entries", entryRoute);
    router.use("/results", resultRoute);

    //** API Routes */
    router.use("/api/events", eventRoute);
    router.use("/api/series", seriesRoute);
    // 2024 webconnex entry usaged
    router.use("/api/entries", apiEntryRoute);

    //** Error handling */
    router.use((req, res, next) => {
        const error = new Error("not found");
        console.log("Error: ", error);
        return res.status(404).json({ message: error.message });
    });

    http.createServer(router).listen(config.server.port, () =>
        console.log(`Server is running on port ${config.server.port}`),
    );
};
