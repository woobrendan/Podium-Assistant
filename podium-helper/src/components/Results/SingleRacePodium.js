import ResultTableHeader from "./ResultTableHeader";
import { useState, useEffect } from "react";
import axios from "axios";

function SingleRacePodium() {

  const [recentResult, setRecentResult] = useState({})
    
  useEffect(() => {
    axios.get('http://localhost:2020/api/results/recent')
      .then(res => {
        setRecentResult({...res.data})
      })
      .catch(err => {
        console.error('Error:', err)
      })
  }, [])

  const returnTable = async () => {
    try {
      const result = await axios.get('http://localhost:2020/api/results/recent')
      const resultArr = [result.data];
      console.log('arr', resultArr)

      return <ResultTableHeader results={resultArr} />

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