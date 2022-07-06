import {useState} from 'react';
import ResultTableHeader from './ResultTableHeader';
import ToggleSearch from '../toggleSearch';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useEntries from '../../useEntries.js'

function Results() {
  const {
    drivers,
    vehicles,
    fastLaps,
    resultHistory,
    groupResults
  } = useEntries()

  console.log(groupResults)
  const [searchValue, setSearchValue] = useState('');
  const [option, setOption] = useState('');

  const getSearchOption = (option) => {
    setOption(option);
  };
  const searchLabel = option ? `Search by ${option}`: "Search";

  const filteredResults = groupResults.filter(val => {
    const allResults = [val.result1, val.result2, val.result3]
    const allValDrivers = []
    for (const result of allResults) {
      if (!result.first_place.driver2) {
        if (!result.third_place && result.seceond_place) {
          allValDrivers.push(
            result.first_place.driver1.name, 
            result.second_place.driver1.name,
          )
        } else if (!result.second_place) {
          allValDrivers.push(result.first_place.driver1.name)
        } else {
          allValDrivers.push(
            result.first_place.driver1.name, 
            result.second_place.driver1.name,
            result.third_place.driver1.name
          )
        }
      } else {
        if (!result.third_place && result.seceond_place) {
          allValDrivers.push(
            result.first_place.driver1.name, 
            result.first_place.driver2.name,
            result.second_place.driver1.name,
            result.second_place.driver2.name
          )
        } else if (!result.second_place) {
          allValDrivers.push(
            result.first_place.driver1.name,
            result.first_place.driver2.name
          )
        } else {
          allValDrivers.push(
            result.first_place.driver1.name,
            result.first_place.driver2.name,  
            result.second_place.driver1.name,
            result.second_place.driver2.name,
            result.third_place.driver1.name,
            result.third_place.driver2.name
            )
          }
          console.log('alldrivers', allValDrivers)
      }
    }
    switch(option){
      case 'All':
        return val;

      case 'Event':
        if (!searchValue) {
          return val;
        } else if (val.event.toLowerCase().includes(searchValue.toLowerCase())) {
          return val;
        }
        break;

      // case 'Driver':
        // const allResults = [val.result1, val.result2, val.result3]
        // const allValDrivers = []
        // for (const result of allResults) {
        //   if (!result.first_place.driver2) {
        //     allValDrivers.push(
        //       result.first_place.driver1.name, 
        //       result.second_place.driver1.name,
        //       result.third_place.driver1.name
        //     )
        //   } else {
        //     allValDrivers.push(
        //       result.first_place.driver1.name,
        //       result.first_place.driver2.name,  
        //       result.second_place.driver1.name,
        //       result.second_place.driver2.name,
        //       result.third_place.driver1.name,
        //       result.third_place.driver2.name
        //     )
        //   }
        // }
    
        // console.log('alldrivers', allValDrivers)
        // if (!val.driver2) {
        //   if (!searchValue) {
        //     return val;
        //   } else if (val.driver1.name.toLowerCase().includes(searchValue.toLowerCase())) {
        //     return val;
        //   }
        // } else {
        //   if (!searchValue) {
        //     return val;
        //   } else if (val.driver1.name.toLowerCase().includes(searchValue.toLowerCase())
        //     || val.driver2.name.toLowerCase().includes(searchValue.toLowerCase())){
        //     return val;
        //   }
        // }
        // console.log('hello')
        // break;


      // case 'Team':
      //   if (!searchValue) {
      //     return val;
      //   } else if (val.team.toLowerCase().includes(searchValue.toLowerCase())) {
      //     return val;
      //   }
      //   break;

      // case 'Nationality':
      //   if (!val.driver2) {
      //     if (!searchValue) {
      //       return val;
      //     } else if (val.driver1.nationality.toLowerCase().includes(searchValue.toLowerCase())) {
      //       return val;
      //     }
      //   } else {
      //     if (!searchValue) {
      //       return val;
      //     } else if (val.driver1.nationality.toLowerCase().includes(searchValue.toLowerCase())
      //       || val.driver2.nationality.toLowerCase().includes(searchValue.toLowerCase())){
      //       return val;
      //     }
      //   }
      //   break;

      //   case 'Rating':
      //   if (!val.driver2) {
      //     if (!searchValue) {
      //       return val;
      //     } else if (val.driver1.rating.toLowerCase().includes(searchValue.toLowerCase())) {
      //       return val;
      //     }
      //   } else {
      //     if (!searchValue) {
      //       return val;
      //     } else if (val.driver1.rating.toLowerCase().includes(searchValue.toLowerCase())
      //       || val.driver2.rating.toLowerCase().includes(searchValue.toLowerCase())){
      //       return val;
      //     }
      //   }
      //   break;

      //   case 'Series':
      //   if (!searchValue) {
      //     return val;
      //   } else if (val.series.toLowerCase().includes(searchValue.toLowerCase())) {
      //     return val;
      //   }
      //   break;

      //   case 'Number':
      //   if (!searchValue) {
      //     return val;
      //   } else if (val.number.includes(searchValue)) {
      //     return val;
      //   }
      //   break;

      default:
        return val; 
    }
  });

  const allResults = groupResults.map((result) => (
    <div key={result.result1.result_id}>
      <ResultTableHeader results={result}/>
    </div>
  ));

  return (
    <div className="result-container">
      <Typography gutterBottom variant="h3" component="div">
        Result History
      </Typography>
      <ToggleSearch page='result' getOption={getSearchOption}/>
       <TextField 
        id="standard-basic" 
        label={searchLabel} 
        variant="standard" 
        value={searchValue}
        onChange={e => {setSearchValue(e.target.value)}}
      />
      {allResults}
    </div>
  )
}

export default Results;
