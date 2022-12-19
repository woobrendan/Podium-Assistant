import { resultsActions } from "./resultsSlice";
import axios from "axios";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch("http://localhost:2020/api/results");
      const data = await res.json();
      return data;
    };

    try {
      const results = await fetchHandler();
      dispatch(resultsActions.setResultHistory(results));
    } catch (err) {
      console.error(err);
    }
  };
};

export const addResultToDB = async (result) => {
  try {
    await axios.post("http://localhost:2020/api/results/new", {
      results: result,
    });
  } catch (err) {
    console.log("Error:", err);
  }
};
