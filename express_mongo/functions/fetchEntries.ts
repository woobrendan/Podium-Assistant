import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export const fetchApiEntries = async () => {
    try {
        const token = process.env.TKSPICE;
        const url = "https://api.webconnex.com/v2/public/search/tickets";

        const entries = await axios.get(url, {
            params: {
                product: "ticketspice.com",
                port: "443",
            },

            headers: {
                apiKey: token || "",
            },
        });

        console.log("my val-----", entries.data);
    } catch (err) {
        console.log("Error fetching api", err);
    }
};
