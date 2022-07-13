//From podium
const podium = {
  series: "GTWCA",
  event: 'VIR',
  result1: {
    class: 'pro',
    first_place: {
      team: 'K-PAX',
      car: "Lambo",
      number: '1',
      carImage: 'image',
      series: 'GTWCA',
      driver1: {
        name: 'Michele',
        nationality: 'Italy',
        rating: 'Silver'
      },
      driver2: {
        name: 'Andrea',
        nationality: 'Italy',
        rating: 'Platinum'
      },
    },
    second: {},
    third: {}
  },
  result2: {},
  result3: {},
  fastlap: {}
}

//from backend
const result = {
  event: "VIR",
  series: "GTWCA",
  fastLap: {
    id: 2,
    driver: "Giacomo",
    laptime: "1",
    driver_id: "2"
  },
  result1: {
    class: "Pro",
    event: "VIR",
    first_place:{
      team: "K-Pax",
      vehicle: "Lambo",
      number: "1",
      driver1: {
        name: "Andrea",
      },
      driver2: {
        name: "Misha"
      }
    },
    second_place:{},
    third_place: {}
  },
  result2: {}
}


//from drivers, driverInfo
const driverInfo = {
  team: "K-PAX",
  driver1: {
    name: 'Michele Beretta',
    nationality: 'Italy',
    rating: 'Silver'
    },
  driver2: {
    name: 'Andrea Calderlli',
    nationality: 'Italy',
    rating: 'Platinum'
    },
  vehicle: "Lamborghini Huracan GT3",
  classification: "Pro",
  number: "1",
  carImage: kpax6,
  series: "GT World Challenge America"
}

//from vehicles from useEntries
const vehicles = {
  team: "K-PAX",
  id: 1,
  driver1: {
    name: 'Michele Beretta',
    nationality: 'Italy',
    rating: 'Silver'
    },
  driver2: {
    name: 'Andrea Calderlli',
    nationality: 'Italy',
    rating: 'Platinum'
    },
  vehicle: "Lamborghini Huracan GT3",
  classification: "Pro",
  number: "1",
  series: "GT World Challenge America"
}