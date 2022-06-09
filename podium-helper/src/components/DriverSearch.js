import { driverInfo } from '../drivers'
import DriverDetails from './DriverDetails';
import '../Styling/competitors.scss'

function DriverSearch(props) {
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
