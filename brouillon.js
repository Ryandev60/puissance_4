// for (let i = 0; i < cases.length; i++) {
//    cases[i].addEventListener("mouseover", () => {
//       if (playerTurn === true) {
//          if (cases[i + 35] && !cases[i + 35].style.backgroundColor) {
//             cases[i + 35].style.backgroundColor = colorPlayerOne;
//          } else if (cases[i + 28] && !cases[i + 28].style.backgroundColor) {
//             cases[i + 28].style.backgroundColor = colorPlayerOne;
//          } else if (cases[i + 21] && !cases[i + 21].style.backgroundColor) {
//             cases[i + 21].style.backgroundColor = colorPlayerOne;
//          } else if (cases[i + 14] && !cases[i + 14].style.backgroundColor) {
//             cases[i + 14].style.backgroundColor = colorPlayerOne;
//          } else if (cases[i + 7] && !cases[i + 7].style.backgroundColor) {
//             cases[i + 7].style.backgroundColor = colorPlayerOne;
//          } else {
//             cases[i].style.backgroundColor = colorPlayerOne;
//          }
//       } else {
//          if (cases[i + 35] && !cases[i + 35].style.backgroundColor) {
//             cases[i + 35].style.backgroundColor = colorPlayerTwo;
//          } else if (cases[i + 28] && !cases[i + 28].style.backgroundColor) {
//             cases[i + 28].style.backgroundColor = colorPlayerTwo;
//          } else if (cases[i + 21] && !cases[i + 21].style.backgroundColor) {
//             cases[i + 21].style.backgroundColor = colorPlayerTwo;
//          } else if (cases[i + 14] && !cases[i + 14].style.backgroundColor) {
//             cases[i + 14].style.backgroundColor = colorPlayerTwo;
//          } else if (cases[i + 7] && !cases[i + 7].style.backgroundColor) {
//             cases[i + 7].style.backgroundColor = colorPlayerTwo;
//          } else {
//             cases[i].style.backgroundColor = colorPlayerTwo;
//          }
//       }
//    });

//    cases[i].addEventListener("mouseout", () => {
//       console.log("test");
//       if (playerTurn === true) {
//          if (cases[i + 7] && cases[i + 7].style.backgroundColor) {
//             cases[i + 7].style.backgroundColor = "";
//          } else if (cases[i + 14] && cases[i + 14].style.backgroundColor) {
//             cases[i + 14].style.backgroundColor = "";
//          } else if (cases[i + 21] && cases[i + 21].style.backgroundColor) {
//             cases[i + 21].style.backgroundColor = "";
//          } else if (cases[i + 28] && cases[i + 28].style.backgroundColor) {
//             cases[i + 28].style.backgroundColor = "";
//          } else if (cases[i + 35] && cases[i + 35].style.backgroundColor) {
//             cases[i].style.backgroundColor = "";
//          }
//       } else {
//          if (cases[i + 7] && cases[i + 7].style.backgroundColor) {
//             cases[i + 7].style.backgroundColor = "";
//          } else if (cases[i + 14] && cases[i + 14].style.backgroundColor) {
//             cases[i + 14].style.backgroundColor = "";
//          } else if (cases[i + 21] && cases[i + 21].style.backgroundColor) {
//             cases[i + 21].style.backgroundColor = "";
//          } else if (cases[i + 28] && cases[i + 28].style.backgroundColor) {
//             cases[i + 28].style.backgroundColor = "";
//          } else if (cases[i + 35] && cases[i + 35].style.backgroundColor) {
//             cases[i + 35].style.backgroundColor = "";
//          } else {
//             cases[i].style.backgroundColor = "";
//          }
//       }
//    });
// }