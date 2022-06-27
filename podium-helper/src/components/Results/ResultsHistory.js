import {useEffect, useState} from 'react';
import axios from 'axios';

function Results() {
  const [drivers, setDrivers] = useState([]);
  const [resultHistory, setResultHistory] = useState([]);

  useEffect(() => {
    const promise1 = axios.get(`http://localhost:8080/api/results`);
    const promise2 = axios.get(`http://localhost:8080/api/drivers`);
    Promise.all([promise1, promise2])
      .then((all) => {
        setResultHistory(all[0].data);
        setDrivers(all[1].data);
      })
      .catch((err) => console.log("Error:", err));
  }, [])

  return (
    <div className="result-container">
      <span>Hello World</span>
    </div>
  )
}

export default Results
