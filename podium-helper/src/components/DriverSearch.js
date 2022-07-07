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
  
  // const filteredDrivers = drivers.filter(val => {
  //   switch(option){
  //     case 'All':
  //       return val;

  //     case 'Driver':
  //       if (!val.driver2) {
  //         if (!searchValue) {
  //           return val;
  //         } else if (val.driver1.name.toLowerCase().includes(searchValue.toLowerCase())) {
  //           return val;
  //         }
  //       } else {
  //         if (!searchValue) {
  //           return val;
  //         } else if (val.driver1.name.toLowerCase().includes(searchValue.toLowerCase())
  //           || val.driver2.name.toLowerCase().includes(searchValue.toLowerCase())){
  //           return val;
  //         }
  //       }
  //       break;

  //     case 'Car':
  //       if (!searchValue) {
  //         return val;
  //       } else if (val.car.toLowerCase().includes(searchValue.toLowerCase())) {
  //         return val;
  //       }
  //       break;

  //     case 'Team':
  //       if (!searchValue) {
  //         return val;
  //       } else if (val.team.toLowerCase().includes(searchValue.toLowerCase())) {
  //         return val;
  //       }
  //       break;

  //     case 'Nationality':
  //       if (!val.driver2) {
  //         if (!searchValue) {
  //           return val;
  //         } else if (val.driver1.nationality.toLowerCase().includes(searchValue.toLowerCase())) {
  //           return val;
  //         }
  //       } else {
  //         if (!searchValue) {
  //           return val;
  //         } else if (val.driver1.nationality.toLowerCase().includes(searchValue.toLowerCase())
  //           || val.driver2.nationality.toLowerCase().includes(searchValue.toLowerCase())){
  //           return val;
  //         }
  //       }
  //       break;

  //       case 'Rating':
  //       if (!val.driver2) {
  //         if (!searchValue) {
  //           return val;
  //         } else if (val.driver1.rating.toLowerCase().includes(searchValue.toLowerCase())) {
  //           return val;
  //         }
  //       } else {
  //         if (!searchValue) {
  //           return val;
  //         } else if (val.driver1.rating.toLowerCase().includes(searchValue.toLowerCase())
  //           || val.driver2.rating.toLowerCase().includes(searchValue.toLowerCase())){
  //           return val;
  //         }
  //       }
  //       break;

  //       case 'Series':
  //       if (!searchValue) {
  //         return val;
  //       } else if (val.series.toLowerCase().includes(searchValue.toLowerCase())) {
  //         return val;
  //       }
  //       break;

  //       case 'Number':
  //       if (!searchValue) {
  //         return val;
  //       } else if (val.number.includes(searchValue)) {
  //         return val;
  //       }
  //       break;

  //     default:
  //       return val; 
  //   }
  // });

  
  const mappedDrivers = filteredOptions(drivers).map((entry,index) =>(
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
