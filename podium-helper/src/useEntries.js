import { useState, useEffect } from "react";
import axios from "axios";

export default function useEntries() {
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [fastLaps, setFastLaps] = useState([]);
  const [resultHistory, setResultHistory] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const promise1 = axios.get(`http://localhost:8080/api/results`);
    const promise2 = axios.get(`http://localhost:8080/api/drivers`);
    const promise3 = axios.get(`http://localhost:8080/api/vehicles`);
    const promise4 = axios.get(`http://localhost:8080/api/fastlaps`);
    const promise5 = axios.get('http://localhost:8080/api/events');
    Promise.all([promise1, promise2, promise3, promise4, promise5])
      .then((all) => {
        setResultHistory(all[0].data);
        setDrivers(all[1].data);
        setVehicles(all[2].data);
        setFastLaps(all[3].data);
        setEvents(all[4].data);
      })
      .catch((err) => console.log("Error:", err));
  }, [])

  vehicles.map((vehicle) => {
    for (const driver of drivers) {
      if (vehicle.id === driver.vehicle_id) {
        if (!vehicle.driver1) {
          vehicle.driver1 = driver;
        } else if (!vehicle.driver2 && driver.id !== vehicle.driver1.id) {
          vehicle.driver2 = driver;
        }
      }
    }
    return vehicle;
  });

  fastLaps.map((lap) => {
    for (const driver of drivers) {
      if (driver.id === lap.driver_id) {
        lap.driver = driver.name;
      }
    }
    return lap;
  });

  //loop through results take the placement winner id and match the id with the vehicle id
  resultHistory.map((result) => {
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

  const groupedResults = (resultArr) => {
    const arrayOfGroupedResults = [];
    for (let i = 0; i < resultArr.length; i += 3) {
      let y = i + 1;
      let z = i + 2;
      arrayOfGroupedResults.push({
        date: resultArr[i].date,
        series: resultArr[i].series,
        event: resultArr[i].event,
        result1: resultArr[i], 
        result2: resultArr[y],
        result3: resultArr[z]
      })
    }
    for (let x = 0; x < fastLaps.length; x++) {
      for (let y = 0; y < arrayOfGroupedResults.length; y++) {
        if (fastLaps[x].id === arrayOfGroupedResults[y].result1.fast_lap) {
          arrayOfGroupedResults[y].fastLap = fastLaps[x]
        }
      }
    }
    return arrayOfGroupedResults
  };

  return {
    drivers,
    vehicles,
    fastLaps,
    resultHistory,
    groupResults: groupedResults(resultHistory),
    events
  }
}