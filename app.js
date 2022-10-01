const cases = document.getElementsByClassName("case");
let playerTurn = true;
const colorPlayerOne = "rgb(244, 207, 223)";
const colorPlayerTwo = "rgb(182, 216, 242)";
import {
   horizonVictory,
   verticalVictory,
   diagonalVictory45,
   diagonalVictory315,
} from "./assets/victory.js";

import { animStop } from "./assets/anim.js";
button.addEventListener("click", () => {
   for (let i = 0; i < cases.length; i++) {
      cases[i].style.backgroundColor = "";
   }
   info.innerHTML = "Play !";
   animStop();
});

for (let i = 0; i < cases.length; i++) {
   cases[i].addEventListener("click", () => {
      if (playerTurn) {
         if (cases[i + 35] && !cases[i + 35].style.backgroundColor) {
            gameLogic(i, 35, colorPlayerOne);
         } else if (cases[i + 28] && !cases[i + 28].style.backgroundColor) {
            gameLogic(i, 28, colorPlayerOne);
         } else if (cases[i + 21] && !cases[i + 21].style.backgroundColor) {
            gameLogic(i, 21, colorPlayerOne);
         } else if (cases[i + 14] && !cases[i + 14].style.backgroundColor) {
            gameLogic(i, 14, colorPlayerOne);
         } else if (cases[i + 7] && !cases[i + 7].style.backgroundColor) {
            gameLogic(i, 7, colorPlayerOne);
         } else if (cases[i] && !cases[i].style.backgroundColor) {
            gameLogic(i, 0, colorPlayerOne);
         }
      } else {
         if (cases[i + 35] && !cases[i + 35].style.backgroundColor) {
            gameLogic(i, 35, colorPlayerTwo);
         } else if (cases[i + 28] && !cases[i + 28].style.backgroundColor) {
            gameLogic(i, 28, colorPlayerTwo);
         } else if (cases[i + 21] && !cases[i + 21].style.backgroundColor) {
            gameLogic(i, 21, colorPlayerTwo);
         } else if (cases[i + 14] && !cases[i + 14].style.backgroundColor) {
            gameLogic(i, 14, colorPlayerTwo);
         } else if (cases[i + 7] && !cases[i + 7].style.backgroundColor) {
            gameLogic(i, 7, colorPlayerTwo);
         } else if (cases[i] && !cases[i].style.backgroundColor) {
            gameLogic(i, 0, colorPlayerTwo);
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
   for (let i = 0; i < cases.length; i++) {
      cases[i].style.backgroundColor = "";
   }
   info.innerHTML = "Play !";
   animStop();
});
