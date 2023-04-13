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

  !team ? (errCopy.hasTeam = true) : (errCopy.hasTeam = false);

  if (
    errCopy.hasTeam ||
    errCopy.hasVehicle ||
    errCopy.hasClassification ||
    errCopy.hasNumber ||
    errCopy.hasSeries
  ) {
    setError(errCopy);
    return false;
  }

  setError(errorState);
  return true;
};

export { initialEntryState, errorState, checkEntryErrors };
