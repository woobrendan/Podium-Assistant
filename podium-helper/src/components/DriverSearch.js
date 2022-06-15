import { driverInfo } from '../drivers'
import DriverDetails from './DriverDetails';
import '../Styling/competitors.scss'
import {useState} from 'react';

function DriverSearch(props) {
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
    <div className="entry_cards">
      {mappedDrivers}
    </div>
  )
}

export default DriverSearch
