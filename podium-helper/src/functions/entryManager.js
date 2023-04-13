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
  hasTeam: true,
  hasVehicle: true,
  hasClassification: true,
  hasNumber: true,
  hasSeries: true,
  hasDriver: true,
};

export { initialEntryState, errorState };
