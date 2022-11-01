import ResultTableHeader from "./ResultTableHeader";
import { useState, useEffect } from "react";
import { printPage } from "../../functions/helperFunc";
import axios from "axios";
import { Button } from "@mui/material";

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
    <>
      {recentResult.result1 
        && <ResultTableHeader results={recentResult}/>}
      <Button 
        onClick={() => printPage()}
      >
        Print Page
      </Button>
    </>
  )
}

export default SingleRacePodium