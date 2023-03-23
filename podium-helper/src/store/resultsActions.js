import { resultsActions } from "./resultsSlice";
import axios from "axios";

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const results = await axios.get("http://localhost:2020/results");
      dispatch(resultsActions.setResultHistory(results.data.results));
    } catch (err) {
      console.error(err);
    }
  };
};

export const addResultToDB = async (result) => {
  try {
    await axios.post("http://localhost:2020/results", {
      results: result,
    });
  } catch (err) {
    console.log("Error:", err);
  }
};
