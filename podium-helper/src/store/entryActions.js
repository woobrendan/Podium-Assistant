import axios from "axios";
import { entryActions } from "./entry_slice";

export const fetchEntry = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const entries = await axios.get("http://localhost:2020/api/entries");
      return entries.data;
    };

    try {
      const entries = await fetchHandler();
      dispatch(entryActions.setEntries(entries));
    } catch (err) {
      console.error(err);
    }
  };
};
