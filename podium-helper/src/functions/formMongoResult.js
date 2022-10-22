const mongoResult = (results) => {

  const result1 = results.result1;
  const result2 = results.result2;
  const result3 = results.result3;
  const result4 = results.result4;
      
  const copy = {
    ...results,
    result1: {
      ...results.result1,
      firstPlace: {
        driver1: result1.firstPlace.driver1.name,
        // driver2: result1.firstPlace.driver2.name,
        number: result1.firstPlace.number,
        vehicle: result1.firstPlace.vehicle,
        team: result1.firstPlace.team
      }
    }
  }
  if (result1.firstPlace.driver2) {
    copy.result1.firstPlace.driver2 = result1.firstPlace.driver2.name
  }
  if (result1.firstPlace.driver3) {
    copy.result1.firstPlace.driver3 = result1.firstPlace.driver3.name
  }

  if (result1.secondPlace) {
    copy.result1.secondPlace = {
      driver1: result1.secondPlace.driver1.name,
      driver2: result1.secondPlace.driver2.name,
      number: result1.secondPlace.number,
      vehicle: result1.secondPlace.vehicle,
      team: result1.secondPlace.team
    }
  }

  if (result1.thirdPlace) {
    copy.result1.thirdPlace = {
      driver1: result1.thirdPlace.driver1.name,
      driver2: result1.thirdPlace.driver2.name,
      number: result1.thirdPlace.number,
      vehicle: result1.thirdPlace.vehicle,
      team: result1.thirdPlace.team
    }
  }

  if (result2) {
    copy['result2'] = {
      ...results.result2,
      firstPlace: {
        driver1: result2.firstPlace.driver1.name,
        driver2: result2.firstPlace.driver2.name,
        number: result2.firstPlace.number,
        vehicle: result2.firstPlace.vehicle,
        team: result2.firstPlace.team
      }
    }
  }
  if (result3) {
    copy['result3'] = {
      ...results.result3,
      firstPlace: {
        driver1: result3.firstPlace.driver1.name,
        driver2: result3.firstPlace.driver2.name,
        number: result3.firstPlace.number,
        vehicle: result3.firstPlace.vehicle,
        team: result3.firstPlace.team
      }
    }
  }

  if (result4) {
    copy['result4'] = {
      ...results.result4,
      firstPlace: {
        driver1: result4.firstPlace.driver1.name,
        driver2: result4.firstPlace.driver2.name,
        number: result4.firstPlace.number,
        vehicle: result4.firstPlace.vehicle,
        team: result4.firstPlace.team
      }
    }
  }
return copy
}