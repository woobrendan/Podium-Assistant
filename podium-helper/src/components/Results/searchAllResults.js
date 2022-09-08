import {compareDate} from '../../functions/helperFunc'

export default function SearchAllResults(list, searchValue) {

  const filtered = list.filter(val => {
    const resultOneP1 = val.result1.first_place;
    const resultOneP2 = val.result1.second_place;
    const resultOneP3 = val.result1.third_place;

    const allPlaceResults = () => {
      const all = [];
      all.push(resultOneP1, resultOneP2, resultOneP3)

      if (val.result2) {
        all.push(
          val.result2.first_place, 
          val.result2.second_place, 
          val.result2.third_place
        )
      }
      if (val.result3) {
        all.push(
          val.result3.first_place, 
          val.result3.second_place, 
          val.result3.third_place
        )
      }
      return all;
    }
 
    const allDrivers = () => {
      const driverArray = [];
      for (const result of allPlaceResults()) {
        if (result) {
          driverArray.push(result.driver1.name)
          if (result.driver2) {
            driverArray.push(result.driver2.name)
          }
        }
      }
      return driverArray;
    }

    const categoryArray = (category) => {
      const newArray = [];
      for (const placeResult of allPlaceResults()) {
        if (placeResult) {
          newArray.push(placeResult[category])
        }
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