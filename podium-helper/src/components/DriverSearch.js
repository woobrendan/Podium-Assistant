import { GTWCADrivers, PGT4ADrivers, driverInfo } from '../drivers'
import DriverDetails from './DriverDetails'

// {
//   team: "K-PAX",
//   driver1: {
//     name: 'Michele Beretta',
//     nationality: 'Italy',
//     rating: 'Silver'
//     },
//   driver2: {
//     name: 'Andrea Calderlli',
//     nationality: 'Italy',
//     rating: 'Platinum'
//     },
//   car: "Lamborghini Huracan GT3",
//   classification: "Pro",
//   number: "6"
// },

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
    <>
      {mappedDrivers}
    </>
  )
}

export default DriverSearch
