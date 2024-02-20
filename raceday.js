let raceNumber = Math.floor(Math.random() * 1000);

const earlyAdult = false
const lateAdult = true
let runnerAge = 17

if (runnerAge > 18 && earlyAdult) {
  console.log("You run at 9:30am and runner number is" +" "+ (runnerAge + 1000))
} 
if (runnerAge > 18 && lateAdult) {
  console.log ( "You run at 11:00am and runner number is" + " " + raceNumber)
}
else if(runnerAge > 18 && !earlyAdult){
 console.log ("Late adults run at 11:00am" + " " + raceNumber)
}
else if(runnerAge < 18) {
  console.log ("Youth registrants run at 12:30 pm (regardless of registration)" + "" + raceNumber )
}
if (runnerAge == 18) {
  console.log("See Registration Desk")
}

//This file allows the following function to happen on a race day

/* - Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration). */
