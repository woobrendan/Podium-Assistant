const mongoResult = (results, fastLap) => {

  const result1 = results.result1;
  const result2 = results.result2;
  const result3 = results.result3;
  const result4 = results.result4;
      
  const copy = {
    date: results.date,
    event: results.event,
    series: results.series.name,
    fastLap: {
      driver: fastLap.driver,
      laptime: fastLap.laptime
    },
    result1: {
      class: result1.class,
      firstPlace: {
        driver1: result1.firstPlace.driver1.name,
        number: result1.firstPlace.number,
        vehicle: result1.firstPlace.vehicle,
        team: result1.firstPlace.team
      }
    }
  }

  //checking result 1 for second or third drivers
  if (result1.firstPlace.driver2) {
    copy.result1.firstPlace.driver2 = result1.firstPlace.driver2.name
  }
  if (result1.firstPlace.driver3) {
    copy.result1.firstPlace.driver3 = result1.firstPlace.driver3.name
  }

  //// Result 1, Second Place //////
  if (result1.secondPlace) {
    copy.result1.secondPlace = {
      driver1: result1.secondPlace.driver1.name,
      number: result1.secondPlace.number,
      vehicle: result1.secondPlace.vehicle,
      team: result1.secondPlace.team
    }
  }

  if (result1.secondPlace.driver2) {
    copy.result1.secondPlace.driver2 = result1.secondPlace.driver2.name
  }
  if (result1.secondPlace.driver3) {
    copy.result1.secondPlace.driver3 = result1.secondPlace.driver3.name
  }

  //// Result 1, Third Place //////
  if (result1.thirdPlace) {
    copy.result1.thirdPlace = {
      driver1: result1.thirdPlace.driver1.name,
      number: result1.thirdPlace.number,
      vehicle: result1.thirdPlace.vehicle,
      team: result1.thirdPlace.team
    }
  }

  if (result1.thirdPlace.driver2) {
    copy.result1.thirdPlace.driver2 = result1.thirdPlace.driver2.name
  }
  if (result1.thirdPlace.driver3) {
    copy.result1.thirdPlace.driver3 = result1.thirdPlace.driver3.name
  }

  //// Result 2, First Place //////
  if (result2) {
    copy['result2'] = {
      class: result2.class,
      firstPlace: {
        driver1: result2.firstPlace.driver1.name,
        number: result2.firstPlace.number,
        vehicle: result2.firstPlace.vehicle,
        team: result2.firstPlace.team
      }
    }

    if (result2.firstPlace.driver2) {
      copy.result2.firstPlace.driver2 = result2.firstPlace.driver2.name
    }
    if (result2.firstPlace.driver3) {
      copy.result2.firstPlace.driver3 = result2.firstPlace.driver3.name
    }

    //// Result 2, Second Place //////
    if (result2.secondPlace) {
      copy.result2.secondPlace = {
        driver1: result2.secondPlace.driver1.name,
        number: result2.secondPlace.number,
        vehicle: result2.secondPlace.vehicle,
        team: result2.secondPlace.team
      }
    }

    if (result2.secondPlace.driver2) {
      copy.result2.secondPlace.driver2 = result2.secondPlace.driver2.name
    }
    if (result2.secondPlace.driver3) {
      copy.result2.secondPlace.driver3 = result2.secondPlace.driver3.name
    }

    //// Result 2, Third Place //////
    if (result2.thirdPlace) {
      copy.result2.thirdPlace = {
        driver1: result2.thirdPlace.driver1.name,
        number: result2.thirdPlace.number,
        vehicle: result2.thirdPlace.vehicle,
        team: result2.thirdPlace.team
      }
    }

    if (result2.thirdPlace.driver2) {
      copy.result2.thirdPlace.driver2 = result2.thirdPlace.driver2.name
    }
    if (result2.thirdPlace.driver3) {
      copy.result2.thirdPlace.driver3 = result2.thirdPlace.driver3.name
    }
  }

   //// Result 3, First Place //////
   if (result3) {
    copy['result3'] = {
      class: result3.class,
      firstPlace: {
        driver1: result3.firstPlace.driver1.name,
        number: result3.firstPlace.number,
        vehicle: result3.firstPlace.vehicle,
        team: result3.firstPlace.team
      }
    }
    
    if (result3.firstPlace.driver2) {
      copy.result3.firstPlace.driver2 = result3.firstPlace.driver2.name
    }
    if (result3.firstPlace.driver3) {
      copy.result3.firstPlace.driver3 = result3.firstPlace.driver3.name
    }

    //// Result 3, Second Place //////
    if (result3.secondPlace) {
      copy.result3.secondPlace = {
        driver1: result3.secondPlace.driver1.name,
        number: result3.secondPlace.number,
        vehicle: result3.secondPlace.vehicle,
        team: result3.secondPlace.team
      }
    }

    if (result3.secondPlace.driver2) {
      copy.result3.secondPlace.driver2 = result3.secondPlace.driver2.name
    }
    if (result3.secondPlace.driver3) {
      copy.result3.secondPlace.driver3 = result3.secondPlace.driver3.name
    }

    //// Result 3, Third Place //////
    if (result3.thirdPlace) {
      copy.result3.thirdPlace = {
        driver1: result3.thirdPlace.driver1.name,
        number: result3.thirdPlace.number,
        vehicle: result3.thirdPlace.vehicle,
        team: result3.thirdPlace.team
      }
    }

    if (result3.thirdPlace.driver2) {
      copy.result3.thirdPlace.driver2 = result3.thirdPlace.driver2.name
    }
    if (result3.thirdPlace.driver3) {
      copy.result3.thirdPlace.driver3 = result3.thirdPlace.driver3.name
    }
  }

    //// Result 4, First Place //////
  if (result4) {
    copy['result4'] = {
      class: result4.class,
      firstPlace: {
        driver1: result4.firstPlace.driver1.name,
        number: result4.firstPlace.number,
        vehicle: result4.firstPlace.vehicle,
        team: result4.firstPlace.team
      }
    }
    if (result4.firstPlace.driver2) {
      copy.result4.firstPlace.driver2 = result4.firstPlace.driver2.name
    }
    if (result4.firstPlace.driver3) {
      copy.result4.firstPlace.driver3 = result4.firstPlace.driver3.name
    }
  
    //// Result 4, Second Place //////
    if (result4.secondPlace) {
      copy.result4.secondPlace = {
        driver1: result4.secondPlace.driver1.name,
        number: result4.secondPlace.number,
        vehicle: result4.secondPlace.vehicle,
        team: result4.secondPlace.team
      }
    }
  
    if (result4.secondPlace.driver2) {
      copy.result4.secondPlace.driver2 = result4.secondPlace.driver2.name
    }
    if (result4.secondPlace.driver3) {
      copy.result4.secondPlace.driver3 = result4.secondPlace.driver3.name
    }
  
     //// Result 4, Third Place //////
     if (result4.thirdPlace) {
      copy.result4.thirdPlace = {
        driver1: result4.thirdPlace.driver1.name,
        number: result4.thirdPlace.number,
        vehicle: result4.thirdPlace.vehicle,
        team: result4.thirdPlace.team
      }
    }
  
    if (result4.thirdPlace.driver2) {
      copy.result4.thirdPlace.driver2 = result4.thirdPlace.driver2.name
    }
    if (result4.thirdPlace.driver3) {
      copy.result4.thirdPlace.driver3 = result4.thirdPlace.driver3.name
    }
  }

  return copy
}

export default mongoResult;