import ResultTableHeader from "./ResultTableHeader";
import { useEffect } from "react";
import { printPage } from "../../functions/helperFunc";
import { Button } from "@mui/material";
import "../../Styling/result.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store/resultsActions";

function RecentPodium() {
  const dispatch = useDispatch();
  const results = useSelector((state) => state.results.resultsArray);
  const recent = results[results.length - 1];

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="recent-podium-container">
      <Button onClick={() => printPage()} variant="contained" color="success">
        Print Page
      </Button>
      {recent && <ResultTableHeader results={recent} recent={true} />}
    </div>
  );
}

export default RecentPodium;
