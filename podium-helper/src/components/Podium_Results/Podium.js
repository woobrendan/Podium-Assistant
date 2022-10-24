import {useState} from 'react'
import WinnerTop3 from './WinnerTop3';
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
    result1: true,
    result2: true,
    result3: true,
    result4: false,
    fastLap: true,
    misc: true,
    printPage: false
  })

  const handleFastLapSumbit = (value) => {
    const result1 = results.result1;
    const result2 = results.result2;
    const result3 = results.result3;
    const result4 = results.result4;
    

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
      result3: false,
      result4: false
    }));

    // create copy of results useState to get proper values to pass. change values of drivers into their id number for backend
    const copyResults = () => {
      const copy = {
        ...results,
        result1: {
          class: getIdFromArray(result1.class, classCategory),
          firstPlace: getVehicleId(result1.firstPlace.number, vehicles),
          secondPlace: (getVehicleId(result1.secondPlace.number, vehicles) || null),
          thirdPlace: (getVehicleId(result1.thirdPlace.number, vehicles) || null)
        },
        result2: {
          class: getIdFromArray(result2.class, classCategory),
          firstPlace: getVehicleId(result2.firstPlace.number, vehicles),
          secondPlace: (getVehicleId(result2.secondPlace.number, vehicles) || null),
          thirdPlace: (getVehicleId(result2.thirdPlace.number, vehicles) || null)
        },
        event: getIdFromArray(results.event, events),
        series: getIdFromArray(results.series, series),
        fastLap: {...value, id: getIdFromArray(value.driver, drivers)}
      }
      if (result3) {
        copy['result3'] = {
          class: getIdFromArray(result3.class, classCategory),
          firstPlace: getVehicleId(result3.firstPlace.number, vehicles),
          secondPlace: (getVehicleId(result3.secondPlace.number, vehicles) || null),
          thirdPlace: (getVehicleId(result3.thirdPlace.number, vehicles) || null)
        }
      }
      if (result4) {
        copy['result4'] = {
          class: getIdFromArray(result4.class, classCategory),
          firstPlace: getVehicleId(result4.firstPlace.number, vehicles),
          secondPlace: (getVehicleId(result4.secondPlace.number, vehicles) || null),
          thirdPlace: (getVehicleId(result4.thirdPlace.number, vehicles) || null)
        }
      }
      return copy;
    }
    console.log('mongoResult', mongoResult(results))
  //   const mongoResult = () => {
      
  //     const copy = {
  //       ...results,
  //       result1: {
  //         ...results.result1,
  //         firstPlace: {
  //           driver1: result1.firstPlace.driver1.name,
  //           driver2: result1.firstPlace.driver2.name,
  //           number: result1.firstPlace.number,
  //           vehicle: result1.firstPlace.vehicle,
  //           team: result1.firstPlace.team
  //         }
  //       }
  //     }

  //     if (result1.secondPlace) {
  //       copy.result1.secondPlace = {
  //         driver1: result1.secondPlace.driver1.name,
  //         driver2: result1.secondPlace.driver2.name,
  //         number: result1.secondPlace.number,
  //         vehicle: result1.secondPlace.vehicle,
  //         team: result1.secondPlace.team
  //       }
  //     }
  //     if (result2) {
  //       copy['result2'] = {
  //         ...results.result2,
  //         firstPlace: {
  //           driver1: result2.firstPlace.driver1.name,
  //           driver2: result2.firstPlace.driver2.name,
  //           number: result2.firstPlace.number,
  //           vehicle: result2.firstPlace.vehicle,
  //           team: result2.firstPlace.team
  //         }
  //       }
  //     }
  //     if (result3) {
  //       copy['result3'] = {
  //         ...results.result3,
  //         firstPlace: {
  //           driver1: result3.firstPlace.driver1.name,
  //           driver2: result3.firstPlace.driver2.name,
  //           number: result3.firstPlace.number,
  //           vehicle: result3.firstPlace.vehicle,
  //           team: result3.firstPlace.team
  //         }
  //       }
  //     }

  //     if (result4) {
  //       copy['result4'] = {
  //         ...results.result4,
  //         firstPlace: {
  //           driver1: result4.firstPlace.driver1.name,
  //           driver2: result4.firstPlace.driver2.name,
  //           number: result4.firstPlace.number,
  //           vehicle: result4.firstPlace.vehicle,
  //           team: result4.firstPlace.team
  //         }
  //       }
  //     }
  //   return copy
  // }
  //   console.log('mongo', mongoResult)

    const promise1 = axios.post(`http://localhost:8080/results/new`, {
      results: copyResults()
    });
    const promise2 = axios.post(`http://localhost:2020/api/results/new`, {
      // results: mongoResult()
    });
    // axios
    //   .post('http://localhost:8080/results/new', {
    //     results: copyResults()
    //   })
    //   .catch(err => console.log(err.message))
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
    if (value === 'GT America' || value === 'Intercontinental GT Challenge') {
      setShowWinnerTable((prev) => ({
        ...prev,
        result4: true
      }));
    }
  }

  return (
    <div className="race-results-container">
      <div className="results-details">
        {showWinnerTable.misc && 
          <DatePicker getValue={getValue} today={getToday()}/>}
        {showWinnerTable.misc && <EventSearch getValue={getValue}/>}
        {showWinnerTable.misc && <Series getValue={getValue}/>}
      </div>
      {showWinnerTable.result1 && 
        <WinnerTop3 
          series={results.series} 
          onClick={handleRacePodiumSubmit}
          results={results}
        />
      }
      {showWinnerTable.result2 && 
        <WinnerTop3 
          series={results.series} 
          onClick={handleRacePodiumSubmit}
          results={results}
        />
      }
      {showWinnerTable.result3 && 
        <WinnerTop3 
          series={results.series} 
          onClick={handleRacePodiumSubmit}
          results={results}
        />
      }
      {showWinnerTable.result4 && 
        <WinnerTop3 
          series={results.series} 
          onClick={handleRacePodiumSubmit}
          results={results}
        />
      }
      {showWinnerTable.fastLap && 
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
