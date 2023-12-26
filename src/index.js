// ----- Datas no dashboard ----------------------
let dias = document.querySelector(".get-days");
let horas = document.querySelector(".get-hours");
let minutos = document.querySelector(".get-minutes");
let segundos = document.querySelector(".get-seconds");



// ---------- Input dados usuário -------------------------
let dataUser = document.getElementById("dataUser");

let i = 0;

function getUserDate() {
  i++;
  

  dias.innerHTML = i;
  horas.innerHTML = i;
  minutos.innerHTML = i;
  segundos.innerHTML = i; 

  /*let goalDate = new Date(dataUser.value);
  let currentDate = new Date('dd-MM-yyyyy');

  // Calculo do tempo restante----Current date to Goal Date-----

  let remainingSeconds = ((currentDate - goalDate)* -1)/ 1000;
  let remainingMinutes = remainingSeconds / 60;
  let remainingHours = remainingMinutes / 60;
  let remainingDays = remainingHours / 24; 
  console.log('Data desejada:', goalDate);
  console.log('Data atual:', currentDate);
  console.log('Datas sendo subtraidas:', currentDate - goalDate)

  console.log('Dias restantes', remainingDays)
  console.log('Horas restantes', remainingHours)
  console.log('Minutos restantes', remainingMinutes)
  console.log('Segundos restantes', remainingSeconds)*/
}
//setInterval(getUserDate, 1000)