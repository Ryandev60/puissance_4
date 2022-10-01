const cases = document.getElementsByClassName("case");
const colorPlayerOne = "rgb(244, 207, 223)";
const colorPlayerTwo = "rgb(182, 216, 242)";
import { animStart } from "./anim.js";
export const horizonVictory = () => {
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

export const verticalVictory = () => {
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

export const diagonalVictory45 = () => {
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

export const diagonalVictory315 = () => {
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
