
export default function filteredResultOptions(list, option, searchValue) {
  
  const filtered = list.filter(val => {
    const resultOneP1 = val.result1.first_place;
    const resultOneP2 = val.result1.second_place;
    const resultOneP3 = val.result1.third_place;
    const resultTwoP1 = val.result2.first_place;
    const resultTwoP2 = val.result2.second_place;
    const resultTwoP3 = val.result2.third_place;
    const resultThreeP1 = val.result3.first_place;
    const resultThreeP2 = val.result3.second_place;
    const resultThreeP3 = val.result3.third_place;
    const allPlaceResults = [resultOneP1, resultOneP2, resultOneP3, resultTwoP1, resultTwoP2, resultTwoP3, resultThreeP1, resultThreeP2, resultThreeP3]

    const allDrivers = () => {
      const driverArray = [];
      for (const result of allPlaceResults) {
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
      for (const placeResult of allPlaceResults) {
        if (placeResult) {
          newArray.push(placeResult[category])
        }
      }
      return newArray;
    }

    // console.log('alldrivers', allValDrivers)
    console.log('val:', val)

    switch(option){
      case 'All':
        return val;

      case 'Driver':
        const drivers = allDrivers();
        for (const driver of drivers) {
          if (!searchValue) {
            return val;
          } else if (driver.toLowerCase().includes(searchValue.toLowerCase())) {
            return val;
          }
        }
        break;

      case 'Car':
        const vehiclesOfVal = categoryArray('vehicle');
        for (const vehicle of vehiclesOfVal) {
          if (!searchValue) {
            return val;
          } else if (vehicle.toLowerCase().includes(searchValue.toLowerCase())) {
            return val;
          }
        }
        break;

      case 'Team':
        const teamsOfVal = categoryArray('team');
        for (const team of teamsOfVal) {
          if (!searchValue) {
            return val;
          } else if (team.toLowerCase().includes(searchValue.toLowerCase())) {
            return val;
          }
        }
        break;

      case 'Series':
      if (!searchValue) {
        return val;
      } else if (val.result1.series.toLowerCase().includes(searchValue.toLowerCase())) {
        return val;
      }
      break;

      case 'Number':
        const numbersOfVal = categoryArray('number');
        for (const number of numbersOfVal) {
          if (!searchValue) {
            return val;
          } else if (number.includes(searchValue)) {
            return val;
          }
        }
      break;

      default:
        return val; 
    }
  });
  return filtered;
}