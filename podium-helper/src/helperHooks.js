import { useState, useEffect } from "react";
import axios from "axios";

export default function useDrivers() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    // const promise1 = axios.get(`http://localhost:8080/api/results`);
    const promise1 = axios.get(`http://localhost:8080/api/drivers`);
    // const promise3 = axios.get(`http://localhost:8080/api/vehicles`);
    // const promise4 = axios.get(`http://localhost:8080/api/fastlaps`);
    Promise.all([promise1])
      .then((all) => {
        setDrivers(all[0].data);
        // setResultHistory(all[0].data);
        // setDrivers(all[1].data);
        // setVehicles(all[2].data);
        // setFastLaps(all[3].data);
      })
      .catch((err) => console.log("Error:", err));
  }, [])

  return [drivers, setDrivers];
}