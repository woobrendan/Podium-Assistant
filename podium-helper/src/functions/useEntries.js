import { useState, useEffect } from "react";
import {compareCarNumber} from './helperFunc';
import axios from "axios";

export default function useEntries() {
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [fastLaps, setFastLaps] = useState([]);
  const [resultHistory, setResultHistory] = useState([]);
  const [events, setEvents] = useState([]);
  const [series, setSeries] = useState([]);
  const [classCategory, setClassCategory] = useState([]);

  useEffect(() => {
    const promise1 = axios.get(`http://localhost:8080/api/results`);
    const promise2 = axios.get(`http://localhost:8080/api/drivers`);
    const promise3 = axios.get(`http://localhost:8080/api/vehicles`);
    const promise4 = axios.get(`http://localhost:8080/api/fastlaps`);
    const promise5 = axios.get('http://localhost:8080/api/events');
    const promise6 = axios.get('http://localhost:8080/api/series');
    const promise7 = axios.get('http://localhost:8080/api/class');
    Promise.all([promise1, promise2, promise3, promise4, promise5, promise6, promise7])
      .then((all) => {
        setResultHistory(all[0].data);
        setDrivers(all[1].data);
        setVehicles(all[2].data);
        setFastLaps(all[3].data);
        setEvents(all[4].data);
        setSeries(all[5].data);
        setClassCategory(all[6].data);
      })
      .catch((err) => console.log("Error from Promise:", err));
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

  //groups togethter results with same id, returns array of arrays 
  // returns [[{result1}, {result1}]...]
  const groupMe = (resultArr) => {
    const group = [];
    resultArr.forEach(result => {
      if (!group[result.result_id - 1]) {
        group[result.result_id - 1] = [];
      } 
      group[result.result_id - 1].push(result)
    })
    return group;
  }
  //create array of objects, where each object holds all the info pertaining to one series race result
  const resultInfoGrouped = (groupArr) => {
    const arrOfResults = [];
    for (const result of groupArr) {
      const indivResult = {
        date: result[0].date,
        series: result[0].series,
        event: result[0].event
      }
      for (let i = 1; i <= result.length; i++) {
        indivResult[`result${i}`] = result[i - 1];
      }
      arrOfResults.push(indivResult)
    }
    return arrOfResults
  }

  // add fast lap to array of objects  for each result, adding the fast lap into  to that obj
  const addFastLap = (resultArr) => {
    for (let f = 0; f < fastLaps.length; f++)  {
      for (let r = 0; r < resultArr.length; r++) {
        if (fastLaps[f].id === resultArr[r].result1.fast_lap) {
          resultArr[r][`fastLap`] = fastLaps[f];
        }
      }
    }
    return resultArr
  }
 
  const groupResults = addFastLap(resultInfoGrouped(groupMe(resultHistory)))

  return {
    drivers,
    vehicles: vehicles.sort(compareCarNumber),
    fastLaps,
    resultHistory,
    groupResults,
    events,
    series,
    classCategory
  }
}