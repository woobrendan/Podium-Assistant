import { GTWCADrivers, PGT4ADrivers } from '../drivers'

function DriverSearch(props) {
  const seriesDrivers = (choice) => {
    switch (choice) {
      case 'GT World Challenge America':
        return GTWCADrivers;
      case 'Pirelli GT4 America':
        return PGT4ADrivers;
    }
  }
  const mappedDrivers = seriesDrivers(props.seriesChoice).map((driver,index) => (
        <li key={index}>{driver}</li>
      ))
  
  return (
    <ul>
      {mappedDrivers}
    </ul>
  )
}

export default DriverSearch
