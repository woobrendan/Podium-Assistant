export const fetchApiEntries = async () => {
    //const formId = process.env.REACT_APP_FORM_ID;
    try {
        const token = process.env.REACT_APP_TKSPICE;
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
