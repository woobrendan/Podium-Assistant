import { fetchApiEntries } from "./fetchEntries";

const updateApiEntries = async () => {
    const entries = await fetchApiEntries();
};

export default updateApiEntries;
