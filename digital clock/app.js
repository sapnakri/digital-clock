const clock = setInterval(function time(){
 let datetoday = new Date();
 let hr = datetoday.getHours();
 let min = datetoday.getMinutes();
 let sec = datetoday.getSeconds();
  if(hr < 10){
    hr = '0' + hr;
  }
  if(min < 10){
    min = '0' + min;}

if(sec < 10){
    sec= '0' + sec;
}
hour.textContent = hr;
minute.textContent = min;
seconds.textContent = sec;
}, 1000);
// const clock = setInterval(function time() {
//     let dateToday = new Date();
//     let hr = dateToday.getHours();
//     let min = dateToday.getMinutes();
//     let sec = dateToday.getSeconds();
//     if (hr < 10) {
//       hr = '0' + hr;
//     }
//     if (min < 10) {
//       min = '0' + min;
//     }
//     if (sec < 10) {
//       sec = '0' + sec;
//     }
//     hour.textContent = hr;
//     minute.textContent = min;
//     seconds.textContent = sec;
//   }, 1000);
