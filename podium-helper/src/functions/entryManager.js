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

  !series ? (errCopy.hasSeries = true) : (errCopy.hasSeries = false);
  !vehicle ? (errCopy.hasVehicle = true) : (errCopy.hasVehicle = false);
  !team ? (errCopy.hasTeam = true) : (errCopy.hasTeam = false);
  !classification
    ? (errCopy.hasClassification = true)
    : (errCopy.hasClassification = false);

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
