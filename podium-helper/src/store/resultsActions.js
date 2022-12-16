import { resultsActions } from "./resultsSlice";

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

export const addResultToDB = (result) => {
  return async (dispatch) => {
    const sendResults = async () => {
      const res = await fetch("http://localhost:2020/api/results/new", {
        method: "PUT",
        body: JSON.stringify(result),
      });
    };

    try {
      await sendResults();
    } catch {
      console.err(err);
    }
  };
};
