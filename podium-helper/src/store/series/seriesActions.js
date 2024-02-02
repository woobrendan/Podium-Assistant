import axios from "axios";
import { seriesActions } from "./seriesSlice";

export const fetchSeries = () => {
    return async (dispatch) => {
        try {
            const events = await axios.get("http://localhost:2020/api/series");

            dispatch(seriesActions.setSeries(events.data.series));
        } catch (err) {
            console.log("Error fetching Events: ", err);
        }
    };
};
