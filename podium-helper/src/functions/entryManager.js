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
  const errorCopy = { ...error };
  const { hasTeam, hasVehicle, hasClassification, hasNumber, hasSeries } =
    errorCopy;

  !team ? (hasTeam = false) : (hasTeam = true);

  if (hasTeam || hasVehicle || hasClassification || hasNumber || hasSeries) {
    setError(errorCopy);
    return false;
  }

  setError(errorState);
  return true;
};

export { initialEntryState, errorState, checkEntryErrors };
