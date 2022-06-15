import { driverInfo } from '../drivers'
import DriverDetails from './DriverDetails';
import '../Styling/competitors.scss'
import TextField from '@mui/material/TextField';
import {useState} from 'react';

function DriverSearch() {
  const [drivers, setDrivers] = useState(driverInfo);
  const [driverSearch, setDriverSearch] = useState('');
  
  const filteredDrivers = drivers.filter(val => {
    if (driverSearch === "") {
      return val;
    } else if (val.driver1.name.toLowerCase().includes(driverSearch.toLowerCase)
    || val.driver2.name.toLowerCase().includes(driverSearch.toLowerCase)){
      return val;
    }
  });
  const mappedDrivers = filteredDrivers.map((entry,index) =>(
       <DriverDetails entry={entry} key={index}/>
      ))

  return (
    <div className="competitors-container">
       <TextField 
        id="standard-basic" 
        label="Search by driver" 
        variant="standard" 
        value={driverSearch}
        onChange={e => {setDriverSearch(e.target.value)}}
      />
      <div className="entry_cards">
        {mappedDrivers}
      </div>
    </div>
  )
}

export default DriverSearch
