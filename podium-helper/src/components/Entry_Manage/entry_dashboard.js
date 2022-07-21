import React from 'react'
import useEntries from '../../useEntries';


function createSingleDriverData(carNum, teamName, driver1, vehicle) {
  return { carNum, teamName, driver1, vehicle };
}

function createSingleDriverData(carNum, teamName, driver1, driver2, vehicle) {
  return { carNum, teamName, driver1, driver2, vehicle };
}

function entry_dashboard() {
  const {vehicles} = useEntries();
  //create component to map through each vehicle entry and display optionss
  return (
    <div>
      
    </div>
  )
}

export default entry_dashboard
