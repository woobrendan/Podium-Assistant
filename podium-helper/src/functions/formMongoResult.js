const mongoResult = (results, fastLap) => {
  const { result1, result2, result3, result4, hardCharger, series } = results;

  const copy = {
    ...results,
    series: series.name,
    fastLap: {
      driver: fastLap.driver,
      laptime: fastLap.laptime,
    },
    ...(hardCharger
      ? {
          hardCharger: {
            ...hardCharger,
            entry: { ...hardCharger.entry },
          },
        }
      : {}),
    result1: {
      class: result1.class,
      firstPlace: {
        driver1: result1.firstPlace.driver1.name,
        number: result1.firstPlace.number,
        vehicle: result1.firstPlace.vehicle,
        team: result1.firstPlace.team,
      },
    },
  };

  //checking result 1 for second or third drivers
  if (result1.firstPlace.driver2) {
    copy.result1.firstPlace.driver2 = result1.firstPlace.driver2.name;
  }
  if (result1.firstPlace.driver3) {
    copy.result1.firstPlace.driver3 = result1.firstPlace.driver3.name;
  }

  //// Result 1, Second Place //////
  if (result1.secondPlace) {
    copy.result1.secondPlace = placementResult(result1.secondPlace);
  }

  //// Result 1, Third Place //////
  if (result1.thirdPlace) {
    copy.result1.thirdPlace = placementResult(result1.thirdPlace);
  }

  //// Result 2, First Place //////
  if (result2) {
    copy["result2"] = {
      class: result2.class,
      firstPlace: {
        driver1: result2.firstPlace.driver1.name,
        number: result2.firstPlace.number,
        vehicle: result2.firstPlace.vehicle,
        team: result2.firstPlace.team,
      },
    };

    if (result2.firstPlace.driver2) {
      copy.result2.firstPlace.driver2 = result2.firstPlace.driver2.name;
    }
    if (result2.firstPlace.driver3) {
      copy.result2.firstPlace.driver3 = result2.firstPlace.driver3.name;
    }

    //// Result 2, Second Place //////
    if (result2.secondPlace) {
      copy.result2.secondPlace = placementResult(result2.secondPlace);
    }

    //// Result 2, Third Place //////
    if (result2.thirdPlace) {
      copy.result2.thirdPlace = placementResult(result2.thirdPlace);
    }
  }

  //// Result 3, First Place //////
  if (result3) {
    copy["result3"] = {
      class: result3.class,
      firstPlace: {
        driver1: result3.firstPlace.driver1.name,
        number: result3.firstPlace.number,
        vehicle: result3.firstPlace.vehicle,
        team: result3.firstPlace.team,
      },
    };

    if (result3.firstPlace.driver2) {
      copy.result3.firstPlace.driver2 = result3.firstPlace.driver2.name;
    }
    if (result3.firstPlace.driver3) {
      copy.result3.firstPlace.driver3 = result3.firstPlace.driver3.name;
    }

    //// Result 3, Second Place //////
    if (result3.secondPlace) {
      copy.result3.secondPlace = placementResult(result3.secondPlace);
    }

    //// Result 3, Third Place //////
    if (result3.thirdPlace) {
      copy.result3.thirdPlace = placementResult(result3.thirdPlace);
    }
  }

  //// Result 4, First Place //////
  if (result4) {
    copy["result4"] = {
      class: result4.class,
      firstPlace: {
        driver1: result4.firstPlace.driver1.name,
        number: result4.firstPlace.number,
        vehicle: result4.firstPlace.vehicle,
        team: result4.firstPlace.team,
      },
    };
    if (result4.firstPlace.driver2) {
      copy.result4.firstPlace.driver2 = result4.firstPlace.driver2.name;
    }
    if (result4.firstPlace.driver3) {
      copy.result4.firstPlace.driver3 = result4.firstPlace.driver3.name;
    }

    //// Result 4, Second Place //////
    if (result4.secondPlace) {
      copy.result3.secondPlace = placementResult(result3.secondPlace);
    }

    //// Result 4, Third Place //////
    if (result4.thirdPlace) {
      copy.result4.thirdPlace = placementResult(result4.thirdPlace);
    }
  }

  return copy;
};

const placementResult = (placeRes) => {
  const { driver1, driver2, driver3, number, vehicle, team } = placeRes;
  return {
    driver1: driver1.name,
    ...(driver2 ? { driver2: { ...driver2 } } : {}),
    ...(driver3 ? { driver2: { ...driver3 } } : {}),
    number,
    vehicle,
    team,
  };
};

const buildFullResult = (result) => {
  const { firstPlace, secondPlace, thirdPlace } = result;
  return {
    ...result,
    firstPlace: placementResult(firstPlace),
    ...(secondPlace ? { secondPlace: { ...secondPlace } } : {}),
    ...(thirdPlace ? { thirdPlace: { ...thirdPlace } } : {}),
  };
};

export default mongoResult;
