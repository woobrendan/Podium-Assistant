import {useState} from 'react'
import { Button } from '@mui/material';
import '../../Styling/podium.scss'
import FastLap from './FastLap';
import Series from './Series';
import axios from 'axios';
import EventSearch from './EventsSearch';
import ResultTableHeader from '../Results/ResultTableHeader';
import DatePicker from './DatePicker';
import useEntries from '../../functions/useEntries';
import { getIdFromArray, getToday, printPage, getVehicleId } from '../../functions/helperFunc';
import mongoResult from '../../functions/formMongoResult';
import WinnerPodium from './WinnerPodium'

function Podium() {
  const {drivers, events, series, classCategory, vehicles} = useEntries(); 

  const [results, setResults] = useState({
    date: getToday(),
    series: '',
    event: '',
    result1: '',
    result2: '',
    result3: '',
    result4: '',
    fastLap: ''
  });

  //toggle control for winnertop3 card
  const [showWinnerTable, setShowWinnerTable] = useState({
    fastLap: true,
    misc: true,
    printPage: false
  })

  const handleFastLapSumbit = (value) => {
    setResults((prev) => ({
      ...prev,
      fastLap: {...value, id: getIdFromArray(value.driver, drivers)}
    }));

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
    .catch(err => console.log(err.message))
  }

  const handleRacePodiumSubmit = (value) => {
    const podiumNumber = () => {
      if (!results.result1) return 'result1'
      else if (!results.result2) return 'result2'
      else if (!results.result3) return 'result3'
      else return 'result4'
    }
    setResults((prev) => ({
      ...prev,
      [podiumNumber()]: value
    }));

    setShowWinnerTable((prev) => ({
      ...prev,
      [podiumNumber()]: false
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
      />
    )
    return mappedSeries;
  }

  return (
    <div className="race-results-container">
      <div className="results-details">
        {showWinnerTable.misc && 
          <DatePicker getValue={getValue} today={getToday()}/>}
        {showWinnerTable.misc && <EventSearch getValue={getValue}/>}
        {showWinnerTable.misc && <Series getValue={getValue}/>}
      </div>

      {results.series && numOfPodiumDisplays(results.series)}

      {results.series && 
        <FastLap 
          onClick={handleFastLapSumbit}
          series={results.series}
        />
      }
      {showWinnerTable.printPage && <Button variant="contained" color="success" onClick={printPage}>Print Page</Button>}
      {!showWinnerTable.fastLap && <ResultTableHeader results={results}/>}
    </div>
  )
}

export default Podium
