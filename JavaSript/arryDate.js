let today = new Date();
/* console.log("today is "+(today.getDay()+1)); */
let days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
/* document.write(days[today.getDay()]) */
let weekDay = document.getElementById("weekDay");
weekDay.innerHTML='today is '+days[today.getDay()];
weekDay.style.fontSize="4rem";