
export default function searchAllEntries(list, searchValue) {
  const filtered = list.filter(val => {
    const driver1 = val.driver1;
    const driver2 = val.driver2;
    if (!searchValue) return val
    else if (driver1.name.toLowerCase().includes(searchValue.toLowerCase())) return val;
    else if (driver2 && driver2.name.toLowerCase().includes(searchValue.toLowerCase())) return val;
    else if (val.vehicle.toLowerCase().includes(searchValue.toLowerCase())) return val;
    else if (val.team.toLowerCase().includes(searchValue.toLowerCase())) return val;
    else if (driver1.rating.toLowerCase().includes(searchValue.toLowerCase())) return val;
    else if (driver2 && driver2.rating.toLowerCase().includes(searchValue.toLowerCase())) return val;
    else if (driver1.nationality.toLowerCase().includes(searchValue.toLowerCase())) return val; 
    else if (driver2 && driver2.nationality.toLowerCase().includes(searchValue.toLowerCase())) return val; 
    else if (val.series.toLowerCase().includes(searchValue.toLowerCase())) return val;
    else if (val.number.includes(searchValue)) return val;
    else if (val.class.includes(searchValue)) return val;
  });
  return filtered;
}