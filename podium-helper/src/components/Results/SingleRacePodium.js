import ResultTableHeader from "./ResultTableHeader";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SingleRacePodium() {
  const { results } = useParams()
  const [recentResult, setRecentResult] = useState([])

  axios.get('http://localhost:2020/api/results/recent')
    .then(res => {
      console.log('data', res.data)
      setRecentResult([res.data])
    })
    .catch(err => {
      console.error('Error:', err)
    })
    console.log('recent', recentResult)



  return (
    <ResultTableHeader results={recentResult}/>
    // <>
    //   <h1>Hello</h1>
    // </>
  )
}

export default SingleRacePodium