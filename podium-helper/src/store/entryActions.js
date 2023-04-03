import axios from "axios";
import { entryActions } from "./entry_slice";

export const fetchEntry = () => {
  return async (dispatch) => {
    try {
      const entries = await axios.get("http://localhost:2020/entries");
      const gr = await axios.get("http://localhost:2020/gr_cup_entries");
      dispatch(entryActions.setEntries(entries.data.entry));
      dispatch(entryActions.setGREntries(gr.data.entry));
    } catch (err) {
      console.error(err);
    }
  };
};

export const addEntryToDB = async (entry) => {
  try {
    await axios.post("http://localhost:2020/entries", entry);
  } catch (err) {
    console.log("Error:", err);
  }
};

export const updateEntry = async (entry) => {
  try {
    axios.patch(`http://localhost:2020/entries/${entry._id}`, entry);
  } catch (error) {
    console.log("Error updating Entry", error);
  }
};
