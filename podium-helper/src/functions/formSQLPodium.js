import { getIdFromArray, getVehicleId } from './helperFunc';

const copyResults = (results) => {

  const result1 = results.result1;
  const result2 = results.result2;
  const result3 = results.result3;
  const result4 = results.result4;
  
  const copy = {
    ...results,
    result1: {
      class: getIdFromArray(result1.class, classCategory),
      firstPlace: getVehicleId(result1.firstPlace.number, vehicles),
      secondPlace: (getVehicleId(result1.secondPlace.number, vehicles) || null),
      thirdPlace: (getVehicleId(result1.thirdPlace.number, vehicles) || null)
    },
    result2: {
      class: getIdFromArray(result2.class, classCategory),
      firstPlace: getVehicleId(result2.firstPlace.number, vehicles),
      secondPlace: (getVehicleId(result2.secondPlace.number, vehicles) || null),
      thirdPlace: (getVehicleId(result2.thirdPlace.number, vehicles) || null)
    },
    event: getIdFromArray(results.event, events),
    series: getIdFromArray(results.series, series),
    fastLap: {...value, id: getIdFromArray(value.driver, drivers)}
  }
  if (result3) {
    copy['result3'] = {
      class: getIdFromArray(result3.class, classCategory),
      firstPlace: getVehicleId(result3.firstPlace.number, vehicles),
      secondPlace: (getVehicleId(result3.secondPlace.number, vehicles) || null),
      thirdPlace: (getVehicleId(result3.thirdPlace.number, vehicles) || null)
    }
  }
  if (result4) {
    copy['result4'] = {
      class: getIdFromArray(result4.class, classCategory),
      firstPlace: getVehicleId(result4.firstPlace.number, vehicles),
      secondPlace: (getVehicleId(result4.secondPlace.number, vehicles) || null),
      thirdPlace: (getVehicleId(result4.thirdPlace.number, vehicles) || null)
    }
  }
  return copy;
}