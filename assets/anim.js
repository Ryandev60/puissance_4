let anim;
const cases = document.getElementsByClassName("case");

export const animStart = (cases, i, nextIdx) => {
   if (!anim) {
      anim = setInterval(animVictory.bind(cases, i, nextIdx), 1000);
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
   console.log(cases[i + 2]);
   console.log("object");
};

export const animStop = () => {
   clearInterval(anim);
   anim = null;
};
