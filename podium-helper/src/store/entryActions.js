import axios from "axios";
import { entryActions } from "./entry_slice";

export const fetchEntry = () => {
  return async (dispatch) => {
    try {
      const entries = await axios.get("http://localhost:2020/entries");
      dispatch(entryActions.setEntries(entries.data));
    } catch (err) {
      console.error(err);
    }
  };
};
