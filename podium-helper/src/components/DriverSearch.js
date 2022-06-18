import { driverInfo } from '../drivers'
import DriverDetails from './DriverDetails';
import '../Styling/competitors.scss'
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import ToggleSearch from './toggleSearch';

function DriverSearch() {
  const [drivers, setDrivers] = useState(driverInfo);
  const [searchValue, setSearchValue] = useState('');
  const [option, setOption] = useState('');
  
  const getSearchOption = (option) => {
    setOption(option);
  }
  
  //to do: create toggle search by options that dynamically render which search to show
  const filteredDrivers = drivers.filter(val => {
    if (!option) {
      return val;
    }
    switch(option){
      case 'Driver':
        if (!val.driver2) {
          if (searchValue === "") {
            return val;
          } else if (val.driver1.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return val;
          }
        } else {
          if (searchValue === "") {
            return val;
          } else if (val.driver1.name.toLowerCase().includes(searchValue.toLowerCase())
            || val.driver2.name.toLowerCase().includes(searchValue.toLowerCase())){
            return val;
          }
        }
        break;
      case 'Car':
        if (searchValue === '') {
          return val;
        } else if (val.car.toLowerCase().includes(searchValue.toLowerCase())) {
          return val;
        }
    }
  });

  
  const mappedDrivers = filteredDrivers.map((entry,index) =>(
       <DriverDetails entry={entry} key={index}/>
      ))

  const searchLabel = option ? `Search by ${option}`: "Search"
  return (
    <div className="competitors-container">
      <ToggleSearch getOption={getSearchOption} />
       <TextField 
        id="standard-basic" 
        label={searchLabel} 
        variant="standard" 
        value={searchValue}
        onChange={e => {setSearchValue(e.target.value)}}
      />
      <div className="entry_cards">
        {mappedDrivers}
      </div>
    </div>
  )
}

export default DriverSearch
