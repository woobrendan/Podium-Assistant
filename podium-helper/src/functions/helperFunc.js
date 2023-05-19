const getToday = () => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return `${mm}-${dd}-${year}`;
};

const printPage = () => {
  window.print();
};

const compareDate = (a, b) => {
  if (a.date < b.date) {
    return 1;
  }
  if (a.date > b.date) {
    return -1;
  }
  return 0;
};

const compareCarNumber = (a, b) => {
  if (Number(a.number) < Number(b.number)) {
    return -1;
  }
  if (Number(a.number) > Number(b.number)) {
    return 1;
  }
  return 0;
};

const dateToString = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateArr = date.split("-");
  const monthNum = Number(dateArr[0]) - 1;
  const day = Number(dateArr[1]);
  const monthName = months[monthNum];
  return `${monthName} ${day}, ${Number(dateArr[2])}`;
};

const shortenName = (series) => {
  switch (series) {
    case "GT World Challenge America":
      return "GTWCA";
    case "GT America":
      return "GTA";
    case "Pirelli GT4 America":
      return "PGT4A";
    case "TC America":
      return "TCAM";
    case "Intercontinental GT Challenge":
      return "IGTC";
    case "Toyota GR Cup":
      return "GR Cup";
    default:
      return "SRO";
  }
};

const shortMyName= (seriesName) => {
  const obj = {
    "GT World Challenge America": "GTWCA",
    "GT America": "GTA",
    "TC America": "TCAM",
    "Pirelli GT4 America": "PGT4A",
    "Toyota GR Cup": "GR Cup",
    "Intercontinental GT Challenge": "IGTC"
  }
  return obj[seriesName]
}

const gtwca = "GT World Challenge America";
const tcam = "TC America";
const gt4a = "Pirelli GT4 America";
const igtc = "Intercontinental GT Challenge";
const grCup = "Toyota GR Cup";

export {
  getToday,
  printPage,
  compareDate,
  compareCarNumber,
  gtwca,
  tcam,
  gtam,
  gt4a,
  igtc,
  grCup,
  dateToString,
  shortenName,
};
