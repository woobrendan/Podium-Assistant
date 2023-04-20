const searchAllEntries = (list, searchValue) => {
  const filtered = list.filter((val) => {
    const { driver1, driver2 } = val;

    if (!searchValue) return val;
    if (driver1.name.toLowerCase().includes(searchValue.toLowerCase())) {
      return val;
    }
    if (
      driver2 &&
      driver2.name.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      return val;
    }
    if (val.vehicle.toLowerCase().includes(searchValue.toLowerCase())) {
      return val;
    }
    if (val.team.toLowerCase().includes(searchValue.toLowerCase())) {
      return val;
    }
    if (driver1.rating.toLowerCase().includes(searchValue.toLowerCase())) {
      return val;
    }
    if (
      driver2 &&
      driver2.rating.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      return val;
    }
    if (driver1.nationality.toLowerCase().includes(searchValue.toLowerCase())) {
      return val;
    }
    if (
      driver2 &&
      driver2.nationality.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      return val;
    }
    if (val.series.toLowerCase().includes(searchValue.toLowerCase())) {
      return val;
    }
    if (val.number.includes(searchValue)) {
      return val;
    }
    if (val.class.includes(searchValue)) {
      return val;
    }
  });
  return filtered;
};

export default searchAllEntries;
