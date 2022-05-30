import { GTWCADrivers, PGT4ADrivers, driverInfo } from '../drivers'
import DriverDetails from './DriverDetails'

function DriverSearch(props) {
  // const seriesDrivers = (choice) => {
  //   switch (choice) {
  //     case 'GT World Challenge America':
  //       return driverInfo;
  //     case 'Pirelli GT4 America':
  //       return PGT4ADrivers;
  //   }
  // }
  // const mappedDrivers = seriesDrivers(props.seriesChoice).map((driver,index) => 
  const mappedDrivers = driverInfo.map((entry,index) =>(
       <DriverDetails entry={entry} key={index}/>
      ))
  
  return (
    <div className="entry_cards">
      {mappedDrivers}
    </div>
  )
}

export default DriverSearch
