import { useState, useEffect } from "react";
import {compareCarNumber} from './helperFunc';
import axios from "axios";

export default function useEntries() {
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [resultHistory, setResultHistory] = useState([]);
  const [events, setEvents] = useState([]);
  const [series, setSeries] = useState([]);
  const [classCategory, setClassCategory] = useState([]);

  useEffect(() => {
    const promise1 = axios.get(`http://localhost:2020/api/results`);
    const promise2 = axios.get(`http://localhost:8080/api/drivers`);
    const promise3 = axios.get(`http://localhost:8080/api/vehicles`);
    const promise5 = axios.get('http://localhost:8080/api/events');
    const promise6 = axios.get('http://localhost:8080/api/series');
    const promise7 = axios.get('http://localhost:8080/api/class');
    Promise.all([promise1, promise2, promise3, promise5, promise6, promise7])
      .then((all) => {
        setResultHistory(all[0].data);
        setDrivers(all[1].data);
        setVehicles(all[2].data);
        setEvents(all[3].data);
        setSeries(all[4].data);
        setClassCategory(all[5].data);
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
        } else if (!vehicle.driver3 && driver.id !== vehicle.driver1.id && driver.id !== vehicle.driver2.id ) {
          vehicle.driver3 = driver;
        }
      }
    }
    return vehicle;
  });

  return {
    drivers,
    vehicles: vehicles.sort(compareCarNumber),
    resultHistory,
    events,
    series,
    classCategory
  }
}