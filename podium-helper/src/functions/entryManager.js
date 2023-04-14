const initialEntryState = {
  team: "",
  driver1: {
    name: "",
    nationality: "",
    rating: "",
  },

  vehicle: "",
  classification: "",
  number: "",
  carImage: "",
  series: "",
  year: 2023,
};

const errorState = {
  hasTeamErr: true,
  hasVehicleErr: true,
  hasClassifErr: true,
  hasNumberErr: true,
  hasSeriesErr: true,
  hasDriver: true,
};

const checkEntryErrors = (entry, error, setError) => {
  const { team, series, vehicle, classification, number } = entry;
  const errCopy = { ...error };
  const checkEmptyStr = (val) => (val === "" ? true : false);

  checkEmptyStr(series)
    ? (errCopy.hasSeriesErr = true)
    : (errCopy.hasSeriesErr = false);
  checkEmptyStr(vehicle)
    ? (errCopy.hasVehicleErr = true)
    : (errCopy.hasVehicleErr = false);
  checkEmptyStr(team)
    ? (errCopy.hasTeamErr = true)
    : (errCopy.hasTeamErr = false);
  checkEmptyStr(classification)
    ? (errCopy.hasClassifErr = true)
    : (errCopy.hasClassifErr = false);

  // loop through the error state, if a key returns true set error state to copy and exit
  for (const key in errCopy) {
    if (errCopy[key]) {
      setError(errCopy);
      return false;
    }
  }

  setError(errorState);
  return true;
};

export { initialEntryState, errorState, checkEntryErrors };
