
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
    const allResults = [val.result1, val.result2, val.result3];
    const allValDrivers = []
    for (const result of allResults) {
      if (!result.first_place.driver2) {

        allValDrivers.push(result.first_place.driver1.name)
        if (result.second_place) {
          allValDrivers.push(result.second_place.driver1.name)
        }
        if (result.third_place) {
          allValDrivers.push(result.third_place.driver1.name)
        }
      } else {
        allValDrivers.push(
          result.first_place.driver1.name,
          result.first_place.driver2.name
        )
        if (result.second_place) {
          allValDrivers.push(
            result.second_place.driver1.name,
            result.second_place.driver2.name
          )
        }
        if (result.third_place) {
          allValDrivers.push(
            result.third_place.driver1.name,
            result.third_place.driver2.name
          )
        } 
      }
    }
    // console.log('alldrivers', allValDrivers)
    console.log('val:', val)
    

    switch(option){
      case 'All':
        return val;

      case 'Driver':
        if (!val.result1.first_place.driver2) {
          if (!searchValue) {
            return val;
          } else if (val.driver1.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return val;
          }
        } else {
          if (!searchValue) {
            return val;
          } else if (val.driver1.name.toLowerCase().includes(searchValue.toLowerCase())
            || val.driver2.name.toLowerCase().includes(searchValue.toLowerCase())){
            return val;
          }
        }
        break;

      // case 'Car':
      //   if (!searchValue) {
      //     return val;
      //   } else if (allValVehicles.toLowerCase().includes(searchValue.toLowerCase())) {
      //     return val;
      //   }
      //   break;

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

      // case 'Rating':
      // if (!val.driver2) {
      //   if (!searchValue) {
      //     return val;
      //   } else if (val.driver1.rating.toLowerCase().includes(searchValue.toLowerCase())) {
      //     return val;
      //   }
      // } else {
      //   if (!searchValue) {
      //     return val;
      //   } else if (val.driver1.rating.toLowerCase().includes(searchValue.toLowerCase())
      //     || val.driver2.rating.toLowerCase().includes(searchValue.toLowerCase())){
      //     return val;
      //   }
      // }
      // break;

      // case 'Series':
      // if (!searchValue) {
      //   return val;
      // } else if (val.series.toLowerCase().includes(searchValue.toLowerCase())) {
      //   return val;
      // }
      // break;

      // case 'Number':
      // if (!searchValue) {
      //   return val;
      // } else if (val.number.includes(searchValue)) {
      //   return val;
      // }
      // break;

      default:
        return val; 
    }
  });
  return filtered;
}