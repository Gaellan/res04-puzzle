window.addEventListener("DOMContentLoaded", function () {
  function Puzzler7() {
    let images = [
      126, 341, 315, 273, 264, 140, 20, 107, 233, 9, 314, 369, 75, 2, 113, 279,
      395, 170, 207, 320, 275, 77, 300, 433, 334, 56, 82, 124, 61, 309, 34, 304,
      405, 83, 400, 313, 343, 431, 345,
    ];

    let positionColonne;
    let positionLigne;
    const grid = document.querySelector("main");

    for (let nbr of images) {
      positionColonne = nbr % 19;
      if (positionColonne === 0) {
        positionColonne = 19;
      }
      positionLigne = Math.ceil(nbr / 19);

      const urlImg = `assets/images/spicegirls_row-${positionLigne}-column-${positionColonne}.jpg`;
      const region = document.createElement("section");
      region.style.backgroundImage = `url(\"${urlImg}\")`;
      region.style.gridColumn = `${positionColonne}`;
      region.style.gridRow = `${positionLigne}`;
      grid.appendChild(region);
    }
  }

  Puzzler7();
});

export { Puzzler7 };
