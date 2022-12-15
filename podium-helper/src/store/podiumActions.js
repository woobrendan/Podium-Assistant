import { podiumActions } from "./podium_slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch("http://localhost:2020/api/results");
      const data = await res.json();
      return data;
    };

    try {
      const results = await fetchHandler();
      console.log("results", results);
      dispatch(podiumActions.setResultHistory(results));
    } catch (err) {
      console.error(err);
    }
  };
};
