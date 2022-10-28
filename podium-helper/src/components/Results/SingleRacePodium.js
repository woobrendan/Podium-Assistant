import ResultTableHeader from "./ResultTableHeader";
import { useParams } from "react-router-dom";

function SingleRacePodium() {
  const { results } = useParams()
  return (
    // <ResultTableHeader results={results}/>
    <>
      <h1>Hello</h1>
    </>
  )
}

export default SingleRacePodium