import { cases, colorPink, colorBlue } from "../app.js";
import { animVictoryStart } from "./anim.js";

export const horizonVictory = () => {
   for (let i = 0; i < cases.length - 3; i++) {
      if (
         cases[i].style.backgroundColor === colorBlue &&
         cases[i + 1].style.backgroundColor === colorBlue &&
         cases[i + 2].style.backgroundColor === colorBlue &&
         cases[i + 3].style.backgroundColor === colorBlue
      ) {
         animVictoryStart(cases, i, 1);
         info.innerHTML = "Blue won horizontally !";
      } else if (
         cases[i].style.backgroundColor === colorPink &&
         cases[i + 1].style.backgroundColor === colorPink &&
         cases[i + 2].style.backgroundColor === colorPink &&
         cases[i + 3].style.backgroundColor === colorPink
      ) {
         animVictoryStart(cases, i, 1);
         info.innerHTML = "Pink won horizontally !";
      }
   }
};

export const verticalVictory = () => {
   for (let i = 0; i < cases.length - 21; i++) {
      if (
         cases[i].style.backgroundColor === colorBlue &&
         cases[i + 7].style.backgroundColor === colorBlue &&
         cases[i + 14].style.backgroundColor === colorBlue &&
         cases[i + 21].style.backgroundColor === colorBlue
      ) {
         info.innerHTML = "Blue won vertically !";
         animVictoryStart(cases, i, 7);
      } else if (
         cases[i].style.backgroundColor === colorPink &&
         cases[i + 7].style.backgroundColor === colorPink &&
         cases[i + 14].style.backgroundColor === colorPink &&
         cases[i + 21].style.backgroundColor === colorPink
      ) {
         info.innerHTML = "Pink won vertically !";
         animVictoryStart(cases, i, 7);
      }
   }
};

export const diagonalVictory45 = () => {
   for (let i = 0; i < cases.length - 18; i++) {
      if (
         cases[i + 18] &&
         cases[i].style.backgroundColor === colorBlue &&
         cases[i + 6].style.backgroundColor === colorBlue &&
         cases[i + 12].style.backgroundColor === colorBlue &&
         cases[i + 18].style.backgroundColor === colorBlue
      ) {
         animVictoryStart(cases, i, 6);
         info.innerHTML = "Blue won diagonally !";
      } else if (
         cases[i + 18] &&
         cases[i].style.backgroundColor === colorPink &&
         cases[i + 6].style.backgroundColor === colorPink &&
         cases[i + 12].style.backgroundColor === colorPink &&
         cases[i + 18].style.backgroundColor === colorPink
      ) {
         animVictoryStart(cases, i, 6);
         info.innerHTML = "Pink won diagonally !";
      }
   }
};

export const diagonalVictory315 = () => {
   for (let i = 0; i < cases.length; i++) {
      if (
         cases[i + 24] &&
         cases[i].style.backgroundColor === colorBlue &&
         cases[i + 8].style.backgroundColor === colorBlue &&
         cases[i + 16].style.backgroundColor === colorBlue &&
         cases[i + 24].style.backgroundColor === colorBlue
      ) {
         animVictoryStart(cases, i, 8);
         info.innerHTML = "Blue won diagonally !";
      } else if (
         cases[i + 24] &&
         cases[i].style.backgroundColor === colorPink &&
         cases[i + 8].style.backgroundColor === colorPink &&
         cases[i + 16].style.backgroundColor === colorPink &&
         cases[i + 24].style.backgroundColor === colorPink
      ) {
         animVictoryStart(cases, i, 8);
         info.innerHTML = "Pink won diagonally !";
      }
   }
};
