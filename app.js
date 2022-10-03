import {
   horizonVictory,
   verticalVictory,
   diagonalVictory45,
   diagonalVictory315,
} from "./assets/victoryConditions.js";
import { animVictoryStop } from "./assets/anim.js";

export const cases = document.getElementsByClassName("case");
export const colorPink = "rgb(244, 207, 223)";
export const colorBlue = "rgb(182, 216, 242)";
let playerTurn = true;

button.addEventListener("click", () => {
   for (let i = 0; i < cases.length; i++) {
      cases[i].style.backgroundColor = "";
   }
   info.innerHTML = "Play !";
   animVictoryStop();
});

for (let i = 0; i < cases.length; i++) {
   cases[i].addEventListener("click", () => {
      if (playerTurn) {
         if (cases[i + 35] && !cases[i + 35].style.backgroundColor) {
            gameLogic(i, 35, colorPink);
         } else if (cases[i + 28] && !cases[i + 28].style.backgroundColor) {
            gameLogic(i, 28, colorPink);
         } else if (cases[i + 21] && !cases[i + 21].style.backgroundColor) {
            gameLogic(i, 21, colorPink);
         } else if (cases[i + 14] && !cases[i + 14].style.backgroundColor) {
            gameLogic(i, 14, colorPink);
         } else if (cases[i + 7] && !cases[i + 7].style.backgroundColor) {
            gameLogic(i, 7, colorPink);
         } else if (cases[i] && !cases[i].style.backgroundColor) {
            gameLogic(i, 0, colorPink);
         }
      } else {
         if (cases[i + 35] && !cases[i + 35].style.backgroundColor) {
            gameLogic(i, 35, colorBlue);
         } else if (cases[i + 28] && !cases[i + 28].style.backgroundColor) {
            gameLogic(i, 28, colorBlue);
         } else if (cases[i + 21] && !cases[i + 21].style.backgroundColor) {
            gameLogic(i, 21, colorBlue);
         } else if (cases[i + 14] && !cases[i + 14].style.backgroundColor) {
            gameLogic(i, 14, colorBlue);
         } else if (cases[i + 7] && !cases[i + 7].style.backgroundColor) {
            gameLogic(i, 7, colorBlue);
         } else if (cases[i] && !cases[i].style.backgroundColor) {
            gameLogic(i, 0, colorBlue);
         }
      }
   });
}

export const gameLogic = (i, comparedIdx, colorPlayer) => {
   cases[i + comparedIdx].style.backgroundColor = colorPlayer;
   playerTurn = !playerTurn;
   playerTurn ? (info.innerHTML = "Pink turn !") : (info.innerHTML = "Blue turn !");
   horizonVictory();
   diagonalVictory45();
   diagonalVictory315();
   verticalVictory();
};

button.addEventListener("click", () => {
   Array.from(cases).forEach((e) => {
      e.className = "case";
   });
   info.innerHTML = "Play !";
   animVictoryStop();
});
