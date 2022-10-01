import { cases } from "../app.js";

let animVictorySwitch;

export const animVictoryStart = (cases, i, nextIdx) => {
   if (!animVictorySwitch) {
      animVictorySwitch = setInterval(animVictory.bind(cases, i, nextIdx), 1000);
   }
};

export const animVictory = (i, nextIdx) => {
   cases[i].className = cases[i].className === "zoom case" ? "dezoom case" : "zoom case";
   //
   cases[i + nextIdx].className =
      cases[i + nextIdx].className === "zoom case" ? "dezoom case" : "zoom case";
   //
   cases[i + 2 * nextIdx].className =
      cases[i + 2 * nextIdx].className === "zoom case" ? "dezoom case" : "zoom case";
   //
   cases[i + 3 * nextIdx].className =
      cases[i + 3 * nextIdx].className === "zoom case" ? "dezoom case" : "zoom case";
};

export const animVictoryStop = () => {
   clearInterval(animVictorySwitch);
   animVictorySwitch = null;
};
