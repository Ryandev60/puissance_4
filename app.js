const cases = document.getElementsByClassName("case");
let playerTurn = true;
const colorPlayerOne = "rgb(244, 207, 223)";
const colorPlayerTwo = "rgb(182, 216, 242)";

button.addEventListener("click", () => {
   for (let i = 0; i < cases.length; i++) {
      cases[i].style.backgroundColor = "";
   }
   info.innerHTML = "Play !";
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
         cases[i].style.backgroundColor == colorPlayerTwo &&
         cases[i + 1].style.backgroundColor == colorPlayerTwo &&
         cases[i + 2].style.backgroundColor == colorPlayerTwo &&
         cases[i + 3].style.backgroundColor == colorPlayerTwo &&
         Number(
            cases[i].dataset.idx === Number(cases[i + 1].dataset.idx - 1) &&
               Number(cases[i + 1].dataset.idx) === Number(cases[i + 2].dataset.idx - 1) &&
               Number(cases[i + 2].dataset.idx) === Number(cases[i + 3].dataset.idx - 1)
         )
      ) {
         info.innerHTML = "Blue won horizontally !";
      } else if (
         cases[i].style.backgroundColor === colorPlayerOne &&
         cases[i + 1].style.backgroundColor === colorPlayerOne &&
         cases[i + 2].style.backgroundColor === colorPlayerOne &&
         cases[i + 3].style.backgroundColor === colorPlayerOne &&
         Number(cases[i].dataset.idx) === Number(cases[i + 1].dataset.idx - 1) &&
         Number(cases[i + 1].dataset.idx) === Number(cases[i + 2].dataset.idx - 1) &&
         Number(cases[i + 2].dataset.idx) === Number(cases[i + 3].dataset.idx - 1)
      ) {
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
         cases[i + 21].style.backgroundColor === colorPlayerTwo &&
         Number(cases[i].dataset.idx === cases[i + 7].dataset.idx) - 10 &&
         Number(cases[i + 7].dataset.idx) === Number(cases[i + 14].dataset.idx - 10) &&
         Number(cases[i + 14].dataset.idx) === Number(cases[i + 21].dataset.idx - 10)
      ) {
         info.innerHTML = "Blue won vertically !";
         console.log("test");
      } else if (
         cases[i].style.backgroundColor === colorPlayerOne &&
         cases[i + 7].style.backgroundColor === colorPlayerOne &&
         cases[i + 14].style.backgroundColor === colorPlayerOne &&
         cases[i + 21].style.backgroundColor === colorPlayerOne &&
         Number(cases[i].dataset.idx) === Number(cases[i + 7].dataset.idx - 10) &&
         Number(cases[i + 7].dataset.idx) === Number(cases[i + 14].dataset.idx - 10) &&
         Number(cases[i + 14].dataset.idx) === Number(cases[i + 21].dataset.idx - 10)
      ) {
         info.innerHTML = "Pink won vertically !";
      }
   }
};

const diagonalVictory = () => {
   for (let i = 0; i < cases.length; i++) {
      if (
         (cases[i + 18] &&
            cases[i].style.backgroundColor === colorPlayerTwo &&
            cases[i + 6].style.backgroundColor === colorPlayerTwo &&
            cases[i + 12].style.backgroundColor === colorPlayerTwo &&
            cases[i + 18].style.backgroundColor === colorPlayerTwo &&
            Number(cases[i].dataset.idx) === Number(cases[i + 6].dataset.idx - 9) &&
            Number(cases[i + 6].dataset.idx) === Number(cases[i + 12].dataset.idx - 9) &&
            Number(cases[i + 12].dataset.idx) === Number(cases[i + 18].dataset.idx - 9)) ||
         (cases[i + 24] &&
            cases[i].style.backgroundColor === colorPlayerTwo &&
            cases[i + 8].style.backgroundColor === colorPlayerTwo &&
            cases[i + 16].style.backgroundColor === colorPlayerTwo &&
            cases[i + 24].style.backgroundColor === colorPlayerTwo &&
            Number(cases[i].dataset.idx) === Number(cases[i + 8].dataset.idx - 11) &&
            Number(cases[i + 8].dataset.idx) === Number(cases[i + 16].dataset.idx - 11) &&
            Number(cases[i + 16].dataset.idx) === Number(cases[i + 24].dataset.idx - 11))
      ) {
         info.innerHTML = "Blue won diagonally !";
      } else if (
         (cases[i + 18] &&
            cases[i].style.backgroundColor === colorPlayerOne &&
            cases[i + 6].style.backgroundColor === colorPlayerOne &&
            cases[i + 12].style.backgroundColor === colorPlayerOne &&
            cases[i + 18].style.backgroundColor === colorPlayerOne &&
            Number(cases[i].dataset.idx) === Number(cases[i + 6].dataset.idx - 9) &&
            Number(cases[i + 6].dataset.idx) === Number(cases[i + 12].dataset.idx - 9) &&
            Number(cases[i + 12].dataset.idx) === Number(cases[i + 18].dataset.idx - 9)) ||
         (cases[i + 24] &&
            cases[i].style.backgroundColor === colorPlayerOne &&
            cases[i + 8].style.backgroundColor === colorPlayerOne &&
            cases[i + 16].style.backgroundColor === colorPlayerOne &&
            cases[i + 24].style.backgroundColor === colorPlayerOne &&
            Number(cases[i].dataset.idx) === Number(cases[i + 8].dataset.idx - 11) &&
            Number(cases[i + 8].dataset.idx) === Number(cases[i + 16].dataset.idx - 11) &&
            Number(cases[i + 16].dataset.idx) === Number(cases[i + 24].dataset.idx - 11))
      ) {
         info.innerHTML = "Pink won diagonally !";
      }
   }
};

const gameLogic = (i, comparedIdx, colorPlayer) => {
   cases[i + comparedIdx].style.backgroundColor = colorPlayer;
   playerTurn = !playerTurn;
   playerTurn ? (info.innerHTML = "Pink turn !") : (info.innerHTML = "Blue turn !");
   horizonVictory();
   diagonalVictory();
   verticalVictory();
};
