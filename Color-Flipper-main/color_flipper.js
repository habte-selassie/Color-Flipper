//Renk Değiştirme
const randomize = function newTask() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  document.getElementById("bgtext").innerText =
    "Background Color: #" + randomColor;
  let = renk = randomColor;
};
randomize();
//

//Sayaç
let startingSeconds = 0.1;
let time = startingSeconds * 60;
let coundownEl = document.querySelector("#countdown");
setInterval(updateCountdown, 1000);

function updateCountdown() {
  let seconds = Math.floor(time / 60);
  let splitSeconds = time % 60;
  splitSeconds = splitSeconds < 10 ? "0" + splitSeconds : splitSeconds;
  coundownEl.innerHTML = seconds + ":" + splitSeconds;
  time--;
  if (time == 0) {
    time = 10;
    randomize();
  }
}
//

//Copy Button
function copyText() {
  /* Copy text into clipboard */
  navigator.clipboard.writeText("#" + renk);
}
//

const timeres = function newestTask() {
  time = 10;
  coundownEl.innerHTML = "0:10";
};

/*Buton - Tek bir fonksiyon için
document
  .getElementById("button")
  .addEventListener("click", randomize);
*/

// Buton  -- ÖNEMLİ
document.getElementById("button").addEventListener("click", () => {
  randomize();
  timeres();
});
