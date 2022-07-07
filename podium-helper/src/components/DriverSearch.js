import { driverInfo } from '../drivers'
import DriverDetails from './DriverDetails';
import '../Styling/competitors.scss'
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import ToggleSearch from './toggleSearch';
import BackToTopButton from './BackToTopButton';
import filteredOptions from '../searchOptions';

function DriverSearch() {
  const [drivers, setDrivers] = useState(driverInfo);
  const [searchValue, setSearchValue] = useState('');
  const [option, setOption] = useState('');
  
  const getSearchOption = (option) => {
    setOption(option);
  }
  
  const mappedDrivers = filteredOptions(drivers, option, searchValue).map((entry,index) =>(
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
      <BackToTopButton />
    </div>
  )
}

export default DriverSearch
