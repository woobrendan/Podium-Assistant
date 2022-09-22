import {compareDate} from '../../functions/helperFunc'

export default function SearchAllResults(list, searchValue) {

  const filtered = list.filter(val => {

    const allPlaceResults = () => {
      const all = [val.result1.firstPlace, val.result1.secondPlace, val.result1.thirdPlace];

      if (val.result2) {
        all.push(val.result2.firstPlace, val.result2.secondPlace, val.result2.thirdPlace);
      }
      if (val.result3) {
        all.push(val.result3.firstPlace, val.result3.secondPlace, val.result3.thirdPlace);
      }
      return all;
    }
 
    // Get all drivers from one result (all classes, one series, one race)
    const allDrivers = () => {
      const driverArray = [];
      for (const result of allPlaceResults()) {
        if (result) driverArray.push(result.driver1)
        if (result && result.driver2) driverArray.push(result.driver2)
      }
      return driverArray;
    }

    const categoryArray = (category) => {
      const newArray = [];
      for (const placeResult of allPlaceResults()) {
        if (placeResult) newArray.push(placeResult[category])
      }
      return newArray;
    }

    
    if (!searchValue) return val;
    if (val.result1.series.toLowerCase().includes(searchValue.toLowerCase())) return val;
    if (val.result1.event.toLowerCase().includes(searchValue.toLowerCase())) return val;

    for (const driver of allDrivers()) {
      if (driver.toLowerCase().includes(searchValue.toLowerCase())) return val
    }

    for (const vehicle of categoryArray('vehicle')) {
      if (vehicle.toLowerCase().includes(searchValue.toLowerCase())) return val;
    }

    for (const team of categoryArray('team')) {
      if (team.toLowerCase().includes(searchValue.toLowerCase())) return val;
    }

    for (const number of categoryArray('number')) {
      if (number.includes(searchValue)) return val;
    }
    
  });
  return filtered.sort(compareDate);
}