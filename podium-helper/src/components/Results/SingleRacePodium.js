import ResultTableHeader from "./ResultTableHeader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function SingleRacePodium() {
  const { results } = useParams()
  const [recentResult, setRecentResult] = useState([])

  axios.get('http://localhost:2020/api/results/recent')
    .then(res => {
      setRecentResult(res.data)
    })
    .catch(err => {
      console.error('Error:', err)
    })

    console.log('recent', recentResult === true)
    

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
      {recentResult.length  && <ResultTableHeader results={recentResult}/>}
    </>
  )
}

export default SingleRacePodium