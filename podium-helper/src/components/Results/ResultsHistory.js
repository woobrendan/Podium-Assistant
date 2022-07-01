import {useEffect, useState} from 'react';
import axios from 'axios';
import ResultTableHeader from './ResultTableHeader';

function Results() {
  const [drivers, setDrivers] = useState([]);
  const [resultHistory, setResultHistory] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [fastLaps, setFastLaps] = useState([]);

  useEffect(() => {
    const promise1 = axios.get(`http://localhost:8080/api/results`);
    const promise2 = axios.get(`http://localhost:8080/api/drivers`);
    const promise3 = axios.get(`http://localhost:8080/api/vehicles`);
    const promise4 = axios.get(`http://localhost:8080/api/fastlaps`);
    Promise.all([promise1, promise2, promise3, promise4])
      .then((all) => {
        setResultHistory(all[0].data);
        setDrivers(all[1].data);
        setVehicles(all[2].data);
        setFastLaps(all[3].data);
      })
      .catch((err) => console.log("Error:", err));
  }, [])

  vehicles.map((vehicle) => {
    for (const driver of drivers) {
      if (vehicle.id === driver.vehicle_id) {
        if (!vehicle.driver1) {
          vehicle.driver1 = driver
        } else {
          vehicle.driver2 = driver
        }
      }
    }
  });

  fastLaps.map((lap) => {
    for (const driver of drivers) {
      if (driver.id === lap.driver_id) {
        lap.driver = driver.name;
      }
    }
  });


  const groupedResults = (resultArr) => {
    const arrayOfGroupedResults = [];
    for (let i = 0; i < resultArr.length; i += 3) {
      let y = i + 1;
      let z = i + 2;
      arrayOfGroupedResults.push({
        series: resultArr[i].series,
        event: resultArr[i].event,
        result1: resultArr[i], 
        result2: resultArr[y],
        result3: resultArr[z]
      })
    }
    for (let x = 0; x < fastLaps.length; x++) {
      if (fastLaps[x].id === arrayOfGroupedResults[x].result1.fast_lap) {
        arrayOfGroupedResults[x].fastLap = fastLaps[x]
      }
    }
    return arrayOfGroupedResults
  };

  //loop through results, take the placement winner id and match the id with the vehicle id
  const entryResults = resultHistory.map((result) => {
    for (const vehicle of vehicles) {
      if (result.first_place === vehicle.id) {
        result.first_place = vehicle
      }
      if (result.second_place && result.second_place === vehicle.id) {
        result.second_place = vehicle
      }
      if (result.third_place && result.third_place === vehicle.id) {
        result.third_place = vehicle
      }
    }
    return result;
  });

  console.log('group', groupedResults(entryResults))

  const allResults = groupedResults(entryResults).map((result) => (
    <div key={result.result1.result_id}>
      <ResultTableHeader results={result}/>
    </div>
  ))

  return (
    <div className="result-container">
      {allResults}
    </div>
  )
}

export default Results;
