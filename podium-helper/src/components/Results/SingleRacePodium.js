import ResultTableHeader from "./ResultTableHeader";
import { useState, useEffect } from "react";
import { printPage } from "../../functions/helperFunc";
import axios from "axios";
import { Button } from "@mui/material";
import '../../Styling/App.scss'

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
    <div className="recent-podium-container">
      <Button 
        onClick={() => printPage()}
        variant="contained" 
        color="success"
      >
        Print Page
      </Button>
      {recentResult.result1 
        && <ResultTableHeader results={recentResult}/>}
    </div>
  )
}

export default SingleRacePodium