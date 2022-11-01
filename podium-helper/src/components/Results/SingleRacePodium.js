import ResultTableHeader from "./ResultTableHeader";
import { useState, useEffect } from "react";
import axios from "axios";

function SingleRacePodium() {

  const [recentResult, setRecentResult] = useState({})
  
  useEffect(() => {
    getAndSet()
  }, [])

  const getAndSet = async () => {
    try {
      const result = await axios.get('http://localhost:2020/api/results/recent')
      setRecentResult({...result.data})
    } catch (err) {
      console.error(err)
    }
  }


  return (
    // <ResultTableHeader results={recentResult}/>
    <>
      {/* {resultsMe} */}
      {recentResult.result1 && <ResultTableHeader results={recentResult}/>}
    </>
  )
}

export default SingleRacePodium