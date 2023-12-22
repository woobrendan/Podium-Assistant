import dotenv from "dotenv";
import axios from "axios";
import { ApiEntryInterface } from "../models/models";
import convertEntry from "./convertEntries";

dotenv.config();

export const fetchApiEntries = async () => {
    try {
        const token = process.env.TKSPICE;
        const form = process.env.FORM_ID;
        const url = "https://api.webconnex.com/v2/public/search/tickets";

        const entries = await axios.get(url, {
            params: {
                product: "ticketspice.com",
                port: "443",
                formId: form,
            },

            headers: {
                apiKey: token || "",
            },
        });

        const filtered = entries.data.data.filter((entry: ApiEntryInterface) => entry["levelLabel"] === "EVENT ENTRY");
        const convertedEntries = filtered.map((entry: ApiEntryInterface) => convertEntry(entry));
        return convertedEntries;
    } catch (err) {
        console.log("Error fetching api", err);
    }
};
