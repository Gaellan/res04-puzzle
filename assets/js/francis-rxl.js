function puzzle04()
{

    let images = [333, 364, 142, 392, 5, 109, 282, 260, 17, 129, 451, 68, 123, 66, 169, 210, 305, 28, 195, 349, 181, 290, 267, 187, 196, 69, 407, 386, 249, 381, 202, 167, 283, 74, 157, 360, 268, 372, 132];
let cols = 19;
// let rows = 24;

images.forEach(position =>
  {
      const modIsNull = position % cols === 0;
      let rowImage = 0;
      let colImage = 0;

      if (!modIsNull) {
          rowImage = Math.floor(position / cols) + 1;
          colImage = position % cols; 
      } else {
          rowImage = position / cols;
          colImage = cols;
      }

      const grid = document.querySelector('main');
      const urlImg = `assets/images/spicegirls_row-${rowImage}-column-${colImage}.jpg`;

      const region = document.createElement('section');
      region.style.backgroundImage = `url(\"${urlImg}\")`;
      region.style.gridColumn = `${colImage}`;
      region.style.gridRow = `${rowImage}`;
      grid.appendChild(region);
  })
}

window.addEventListener('DOMContentLoaded',() => {
  puzzle04()
})

export {puzzle04};