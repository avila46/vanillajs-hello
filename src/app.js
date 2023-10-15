import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["El Vecino", "Mi perrro", "Mi gato", "Mi hermana", "Un ladron"];
let action = ["destrozo", "quemo", "se comio", "me quito", "mojo"];
let when = [
  "ayer",
  "anoche",
  "al llegar a casa",
  "esta mañana",
  "cuando estaba en el GYM"
];

function Generadordeexcusas(quien, que, cuando) {
  let numQuien = Math.floor(Math.random() * quien.lenght);
  let numQue = Math.floor(Math.random() * que.lenght);
  let numCuando = Math.floor(Math.random() * cuando.lenght);
  return quien[numQuien] + " " + que[numQue] + " mi tarea " + cuando[numCuando];
}

window.onload = function onLoad() {
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = Generadordeexcusas(who, action, when);
};
