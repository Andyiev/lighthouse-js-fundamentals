let textT50s = "Orbiter transfers from ground to internal power";
let textT31s = "Ground launch sequencer is go for auto sequence start";
let textT16s = "Activate launch pad sound suppression system";
let textT10s = "Activate main engine hydrogen burnoff system";
let textT6s = "Main engine start"
let textT0s = "Solid rocket booster ignition and liftoff!";
let seconds = 60;
while (seconds >= 0) {
  if (seconds === 50) {
    console.log(textT50s);
  } else if (seconds === 31) {
    console.log(textT31s);
  } else if (seconds === 16) {
    console.log(textT16s);
  } else if (seconds === 10) {
    console.log(textT10s);
  } else if (seconds === 6) {
    console.log(textT6s);
  } else if (seconds === 0) {
    console.log(textT0s);
  } else {
    console.log("T-" + seconds + " seconds");
  }
seconds = seconds - 1;
}