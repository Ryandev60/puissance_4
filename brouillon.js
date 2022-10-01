 export const cases = document.getElementsByClassName("case");
let playerTurn = true;
const colorPlayerOne = "rgb(244, 207, 223)";
const colorPlayerTwo = "rgb(182, 216, 242)";
import { animStart } from "./assets/anim.js";
import { animVictory } from "./assets/anim.js";
import { animVictoryStop } from "./assets/anim.js";

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

const horizonVictory = () => {
   for (let i = 0; i < 39; i++) {
      if (
         cases[i].style.backgroundColor === colorPlayerTwo &&
         cases[i + 1].style.backgroundColor === colorPlayerTwo &&
         cases[i + 2].style.backgroundColor === colorPlayerTwo &&
         cases[i + 3].style.backgroundColor === colorPlayerTwo
      ) {
         animStart(i, 1);
         info.innerHTML = "Blue won horizontally !";
      } else if (
         cases[i].style.backgroundColor === colorPlayerOne &&
         cases[i + 1].style.backgroundColor === colorPlayerOne &&
         cases[i + 2].style.backgroundColor === colorPlayerOne &&
         cases[i + 3].style.backgroundColor === colorPlayerOne
      ) {
         animStart(cases, i, 1);
         info.innerHTML = "Pink won horizontally !";
      }
   }
};

const verticalVictory = () => {
   for (let i = 0; i < 21; i++) {
      if (
         cases[i].style.backgroundColor === colorPlayerTwo &&
         cases[i + 7].style.backgroundColor === colorPlayerTwo &&
         cases[i + 14].style.backgroundColor === colorPlayerTwo &&
         cases[i + 21].style.backgroundColor === colorPlayerTwo
      ) {
         info.innerHTML = "Blue won vertically !";
         animStart(cases, i, 7);
      } else if (
         cases[i].style.backgroundColor === colorPlayerOne &&
         cases[i + 7].style.backgroundColor === colorPlayerOne &&
         cases[i + 14].style.backgroundColor === colorPlayerOne &&
         cases[i + 21].style.backgroundColor === colorPlayerOne
      ) {
         info.innerHTML = "Pink won vertically !";
         animStart(cases, i, 7);
      }
   }
};

const diagonalVictory45 = () => {
   for (let i = 0; i < cases.length; i++) {
      if (
         cases[i + 18] &&
         cases[i].style.backgroundColor === colorPlayerTwo &&
         cases[i + 6].style.backgroundColor === colorPlayerTwo &&
         cases[i + 12].style.backgroundColor === colorPlayerTwo &&
         cases[i + 18].style.backgroundColor === colorPlayerTwo
      ) {
         animStart(cases, i, 6);
         info.innerHTML = "Blue won diagonally !";
      } else if (
         cases[i + 18] &&
         cases[i].style.backgroundColor === colorPlayerOne &&
         cases[i + 6].style.backgroundColor === colorPlayerOne &&
         cases[i + 12].style.backgroundColor === colorPlayerOne &&
         cases[i + 18].style.backgroundColor === colorPlayerOne
      ) {
         animStart(cases, i, 6);
         info.innerHTML = "Pink won diagonally !";
      }
   }
};

const diagonalVictory315 = () => {
   for (let i = 0; i < cases.length; i++) {
      if (
         cases[i + 24] &&
         cases[i].style.backgroundColor === colorPlayerTwo &&
         cases[i + 8].style.backgroundColor === colorPlayerTwo &&
         cases[i + 16].style.backgroundColor === colorPlayerTwo &&
         cases[i + 24].style.backgroundColor === colorPlayerTwo
      ) {
         animStart(cases, i, 8);
         info.innerHTML = "Blue won diagonally !";
      } else if (
         cases[i + 24] &&
         cases[i].style.backgroundColor === colorPlayerOne &&
         cases[i + 8].style.backgroundColor === colorPlayerOne &&
         cases[i + 16].style.backgroundColor === colorPlayerOne &&
         cases[i + 24].style.backgroundColor === colorPlayerOne
      ) {
         animStart(cases, i, 8);
         info.innerHTML = "Pink won diagonally !";
      }
   }
};

const gameLogic = (i, comparedIdx, colorPlayer) => {
   cases[i + comparedIdx].style.backgroundColor = colorPlayer;
   playerTurn = !playerTurn;
   playerTurn ? (info.innerHTML = "Pink turn !") : (info.innerHTML = "Blue turn !");
   horizonVictory();
   diagonalVictory45();
   diagonalVictory315();
   verticalVictory();
};
