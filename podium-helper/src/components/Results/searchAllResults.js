import {compareDate} from '../../functions/helperFunc'

export default function SearchAllResults(list, searchValue) {

  const filtered = list.filter(val => {
    console.log('val', val)
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
    
    for (const driver of allDrivers()) {
      if (driver.toLowerCase().includes(searchValue.toLowerCase())) return val
    }
    // else if ()

    // switch(option){
    //   case 'All':
    //     return val;

    //   case 'Driver':
    //     const drivers = allDrivers();
    //     for (const driver of drivers) {
    //       if (!searchValue) {
    //         return val;
    //       } else if (driver.toLowerCase().includes(searchValue.toLowerCase())) {
    //         return val;
    //       }
    //     }
    //     break;

    //   case 'Car':
    //     const vehiclesOfVal = categoryArray('vehicle');
    //     for (const vehicle of vehiclesOfVal) {
    //       if (!searchValue) {
    //         return val;
    //       } else if (vehicle.toLowerCase().includes(searchValue.toLowerCase())) {
    //         return val;
    //       }
    //     }
    //     break;

    //   case 'Team':
    //     const teamsOfVal = categoryArray('team');
    //     for (const team of teamsOfVal) {
    //       if (!searchValue) {
    //         return val;
    //       } else if (team.toLowerCase().includes(searchValue.toLowerCase())) {
    //         return val;
    //       }
    //     }
    //     break;

    //   case 'Series':
    //   if (!searchValue) {
    //     return val;
    //   } else if (val.result1.series.toLowerCase().includes(searchValue.toLowerCase())) {
    //     return val;
    //   }
    //   break;

    //   case 'Number':
    //     const numbersOfVal = categoryArray('number');
    //     for (const number of numbersOfVal) {
    //       if (!searchValue) {
    //         return val;
    //       } else if (number.includes(searchValue)) {
    //         return val;
    //       }
    //     }
    //   break;

    //   case 'Event':
    //       if (!searchValue) {
    //         return val;
    //       } else if (val.result1.event.toLowerCase().includes(searchValue.toLowerCase())) {
    //         return val;
    //       }
    //   break;

    //   default:
    //     return val; 
    // }
  });
  return filtered.sort(compareDate);
}