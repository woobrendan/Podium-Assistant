import dotenv from "dotenv";

dotenv.config();

export const fetchApiEntries = async () => {
    try {
        const token = process.env.TKSPICE;
        const url = "https://api.webconnex.com/v2/public/search/tickets";
        const params = new URLSearchParams({
            product: "ticketspice.com",
            port: "443",
        });

        const fullUrl = `${url}?${params.toString()}`;
        const response = await fetch(fullUrl, {
            method: "GET",
            headers: {
                apiKey: token || "",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const entries = await response.json();
        console.log("my val-----", entries);
    } catch (err) {
        console.log("Error fetching api", err);
    }
};
