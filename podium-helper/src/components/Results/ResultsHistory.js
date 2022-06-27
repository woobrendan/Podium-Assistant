import {useEffect, useState} from 'react';
import axios from 'axios';

function Results() {
  const [drivers, setDrivers] = useState([]);
  const [resultHistory, setResultHistory] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/results`)
      .then((res) => {
        setResultHistory(res.data);
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
