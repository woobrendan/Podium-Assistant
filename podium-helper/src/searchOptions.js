
export default function filteredOptions(list) {


  const filtered = list.filter(val => {
    switch(option){
      case 'All':
        return val;

      case 'Driver':
        if (!val.driver2) {
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

      case 'Car':
        if (!searchValue) {
          return val;
        } else if (val.car.toLowerCase().includes(searchValue.toLowerCase())) {
          return val;
        }
        break;

      case 'Team':
        if (!searchValue) {
          return val;
        } else if (val.team.toLowerCase().includes(searchValue.toLowerCase())) {
          return val;
        }
        break;

      case 'Nationality':
        if (!val.driver2) {
          if (!searchValue) {
            return val;
          } else if (val.driver1.nationality.toLowerCase().includes(searchValue.toLowerCase())) {
            return val;
          }
        } else {
          if (!searchValue) {
            return val;
          } else if (val.driver1.nationality.toLowerCase().includes(searchValue.toLowerCase())
            || val.driver2.nationality.toLowerCase().includes(searchValue.toLowerCase())){
            return val;
          }
        }
        break;

        case 'Rating':
        if (!val.driver2) {
          if (!searchValue) {
            return val;
          } else if (val.driver1.rating.toLowerCase().includes(searchValue.toLowerCase())) {
            return val;
          }
        } else {
          if (!searchValue) {
            return val;
          } else if (val.driver1.rating.toLowerCase().includes(searchValue.toLowerCase())
            || val.driver2.rating.toLowerCase().includes(searchValue.toLowerCase())){
            return val;
          }
        }
        break;

        case 'Series':
        if (!searchValue) {
          return val;
        } else if (val.series.toLowerCase().includes(searchValue.toLowerCase())) {
          return val;
        }
        break;

        case 'Number':
        if (!searchValue) {
          return val;
        } else if (val.number.includes(searchValue)) {
          return val;
        }
        break;

      default:
        return val; 
    }
  });
  return filtered;
}