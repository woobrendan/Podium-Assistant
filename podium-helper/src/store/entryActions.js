import axios from "axios";
import { entryActions } from "./entry_slice";

export const fetchEntry = () => {
    return async (dispatch) => {
        try {
            const entries = await axios.get("http://localhost:2020/entries");
            dispatch(entryActions.setEntries(entries.data.entry));
        } catch (err) {
            console.error(err);
        }
    };
};

export const fetchApiEntries = async () => {
    const formId = process.env.FORM_ID;
    const token = process.env.TKSPICE;
    console.log("token", token);
    try {
        const url = "https://api.webconnex.com/v2/public/search/tickets";
        const entries = await axios.get(url, {
            params: {
                product: "ticketspice.com",
                formId: formId,
                port: "443",
            },
            headers: {
                apiKey: token,
                "User-Agent": `node v14.17.6`,
            },
        });
        console.log("my val-----", entries);
    } catch (err) {
        console.log("Error fetching api", err);
    }
};

export const updateEntry = async (entry) => {
    try {
        axios.patch(`http://localhost:2020/entries/${entry._id}`, entry);
    } catch (error) {
        console.log("Error updating Entry", error);
    }
};

export const deleteEntry = async (entry) => {
    try {
        axios.delete(`http://localhost:2020/entries/${entry._id}`);
    } catch (error) {
        console.log("Error deleting Entry", error);
    }
};
