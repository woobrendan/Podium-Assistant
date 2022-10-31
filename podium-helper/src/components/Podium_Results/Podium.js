import { useState , useEffect } from 'react'
import { Button } from '@mui/material';
import '../../Styling/podium.scss'
import FastLap from './FastLap';
import Series from './Series';
import axios from 'axios';
import EventSearch from './EventsSearch';
import ResultTableHeader from '../Results/ResultTableHeader';
import DatePicker from './DatePicker';
import useEntries from '../../functions/useEntries';
import { getToday, printPage } from '../../functions/helperFunc';
import mongoResult from '../../functions/formMongoResult';
import WinnerPodium from './WinnerPodium';
import { useNavigate } from 'react-router-dom';

function Podium() {
  const { currentEventName } = useEntries(); 
  const navigate = useNavigate();

  const [results, setResults] = useState({
    date: getToday(),
    series: '',
    event: '',
    fastLap: ''
  });

  useEffect(() => {
    setResults((prev) => ({
      ...prev,
      event: currentEventName
    }))
  }, [currentEventName])
  
  //toggle control for winnertop3 card
  const [showWinnerTable, setShowWinnerTable] = useState({
    fastLap: true,
    misc: true,
    printPage: false
  })
  
  const handleFastLapSumbit = (value) => {

    setResults((prev) => ({
      ...prev,
      fastLap: value
    }))
    
    // remove fast lap, series, date and event boxes, show print button
    setShowWinnerTable((prev) => ({
      ...prev,
      fastLap: false,
      misc: false,
      printPage: true,
      
    }));
    
    axios.post(`http://localhost:2020/api/results/new`, {
      results: mongoResult(results, value)
    })
    // .then(() => {
    //   handleFinalSubmit()
    // })
    .catch(err => console.log(err.message))
  }

  const handleFinalSubmit = async () => {
    try {
      await axios.post(`http://localhost:2020/api/results/new`, {
        results: mongoResult(results, results.fastLap)
      })
      await navigate('/single_race_podium')
    } catch (err) {
      console.error(err)
    }
  }

      
  const handleRacePodiumSubmit = (value, resultNumber) => {
    setResults((prev) => ({
      ...prev,
      [`result${resultNumber}`]: value
    }));
  }

  //grab value and name from component and set result usestate
  const getValue = (name, value) => {
    setResults((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const numOfPodiumDisplays = (series) => {
    const classifications = series.class
    const mappedSeries = classifications.map((classification, index) => 
      <WinnerPodium
        key={index}
        seriesName={series.name} 
        onClick={handleRacePodiumSubmit}
        results={results}
        classification={classification}
        resultNum={index+1}
      />
    )
    return mappedSeries;
  }

  return (
    <div className="race-results-container">
      <div className="results-details">
        {showWinnerTable.misc && <DatePicker getValue={getValue} today={getToday()} />}
        {showWinnerTable.misc && <EventSearch getValue={getValue} />}
        {showWinnerTable.misc && <Series getValue={getValue} />}
      </div>
      <div className="podium_results_container">
        {results.series && numOfPodiumDisplays(results.series)}
      </div>
      {results.series && <FastLap getValue={getValue} series={results.series} />}
      {results.series && 
        <Button 
          variant="contained" 
          color="success"
          onClick={handleFinalSubmit}
        >
          Submit All
        </Button>
      }
      {showWinnerTable.printPage && <Button variant="contained" color="success" onClick={printPage}>Print Page</Button>}
      {!showWinnerTable.fastLap && <ResultTableHeader results={results}/>}
    </div>
  )
}

export default Podium
