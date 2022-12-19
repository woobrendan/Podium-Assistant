import axios from "axios";

export const fetchEntry = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const entries = axios.get("http://localhost:2020/api/entries");
      return entries.data;
    };

    try {
      const results = await fetchHandler();
      dispatch(entryActions.setEntries(results));
    } catch (err) {
      console.error(err);
    }
  };
};
