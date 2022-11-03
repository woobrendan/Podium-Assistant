import {compareDate} from '../../functions/helperFunc'

export default function SearchAllResults(list, searchValue) {

  const filtered = list.filter(val => {
    console.log('val', val)
    const result1 = result1
    const result2 = result2
    const result3 = result3
    const result4 = result4

    const allPlaceResults = () => {
      const all = [result1.firstPlace, result1.secondPlace, result1.thirdPlace];

      if (result2) {
        all.push(result2.firstPlace, result2.secondPlace, result2.thirdPlace);
      }
      if (result3) {
        all.push(result3.firstPlace, result3.secondPlace, result3.thirdPlace);
      }
      if (result4) {
        all.push(result4.firstPlace, result4.secondPlace, result4.thirdPlace);
      }
      return all;
    }
 
    // Get all drivers from one result (all classes, one series, one race)
    const allDrivers = () => {
      const driverArray = [];
      for (const result of allPlaceResults()) {
        if (result) driverArray.push(result.driver1)
        if (result && result.driver2) driverArray.push(result.driver2)
        if (result && result.driver3) driverArray.push(result.driver3)
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
    if (result1.series.toLowerCase().includes(searchValue.toLowerCase())) return val;
    if (result1.event.toLowerCase().includes(searchValue.toLowerCase())) return val;

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