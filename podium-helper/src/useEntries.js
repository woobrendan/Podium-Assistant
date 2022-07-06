import { useState, useEffect } from "react";
import axios from "axios";

export default function useEntries() {
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [fastLaps, setFastLaps] = useState([]);
  const [resultHistory, setResultHistory] = useState([]);

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

  //loop through results, take the placement winner id and match the id with the vehicle id
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

  return {
    drivers,
    vehicles,
    fastLaps,
    resultHistory
  }
}