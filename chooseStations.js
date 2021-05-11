const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
const chooseStations = function(stations) {
  let result = [];
  for (let i = 0 ; i < stations.length ; i++) {
    let station = stations[i];
    if (station[1] >= 20 && (station[2] === "school" || station[2] === "community centre")) {
//      console.log(station[0]);
//      console.log(station[1]);
      result.push(station[0]);
    } 
  }
  return result;
}
console.log(chooseStations(stations));