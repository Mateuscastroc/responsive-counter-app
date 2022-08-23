// ----- Datas no dashboard ----------------------
let dias = document.querySelector(".counter-dias");
let horas = document.querySelector(".counter-horas");
let minutos = document.querySelector(".counter-minutos");
let segundos = document.querySelector(".counter-segundos");

// ---------- Input dados usuário -------------------------
let dataUser = document.getElementById("dataUser");
console.log(dataUser);
function getUserDate() {
  setInterval(console.log(dataUser), 1000);
}
