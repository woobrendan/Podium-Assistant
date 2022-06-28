import {useEffect, useState} from 'react';
import axios from 'axios';

function Results() {
  const [drivers, setDrivers] = useState([]);
  const [resultHistory, setResultHistory] = useState([]);
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
    const promise1 = axios.get(`http://localhost:8080/api/results`);
    const promise2 = axios.get(`http://localhost:8080/api/drivers`);
    const promise3 = axios.get(`http://localhost:8080/api/vehicles`);
    Promise.all([promise1, promise2, promise3])
      .then((all) => {
        setResultHistory(all[0].data);
        setDrivers(all[1].data);
        setVehicles(all[2].data)
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

  const groupedResults = (resultArr) => {
    const arrayOfGroupedResults = [];
    for (let i = 0; i < resultArr.length; i += 3) {
      let y = i + 1;
      let z = i + 2;
      arrayOfGroupedResults.push({
        result1: resultArr[i], 
        result2: resultArr[y],
        result3: resultArr[z]
      })
    }
   
    return arrayOfGroupedResults
  }
  console.log('newresults',groupedResults(resultHistory))

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
  })
  const allResults = entryResults.map((result) => (
    <div key={result.id}>
      <h1>{result.event}</h1>
      <h2>{result.series}</h2>
      <h3>{result.class}</h3>
      <p>{result.first_place.vehicle}</p>
      <p>{result.second_place && result.second_place.vehicle}</p>
      <p>{result.third_place && result.third_place.vehicle}</p>
    </div>
  ))

  return (
    <div className="result-container">
      {allResults}
    </div>
  )
}

export default Results
