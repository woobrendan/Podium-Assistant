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
  hasTeam: false,
  hasVehicle: false,
  hasClassification: false,
  hasNumber: false,
  hasSeries: false,
  hasDriver: false,
};

const checkEntryErrors = (entry, error, setError) => {
  const { team, series, vehicle, classification, number } = entry;
  const errCopy = { ...error };
  const checkEmptyStr = (val) => (val === "" ? true : false);

  checkEmptyStr(series)
    ? (errCopy.hasSeries = true)
    : (errCopy.hasSeries = false);
  checkEmptyStr(vehicle)
    ? (errCopy.hasVehicle = true)
    : (errCopy.hasVehicle = false);
  checkEmptyStr(team) ? (errCopy.hasTeam = true) : (errCopy.hasTeam = false);
  checkEmptyStr(classification)
    ? (errCopy.hasClassification = true)
    : (errCopy.hasClassification = false);

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
