// section background-image 

function render2()
{
    let images = [223, 239, 208, 449, 64, 448, 416, 33, 357, 22, 13, 130, 25, 24, 351, 250, 251, 418, 136, 104, 378, 404, 280, 417, 4, 402, 380, 299, 424, 235, 122, 63, 231, 374, 329, 46, 371, 240, 391];
    const cols = 19;
    // const rows = 24;

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

export{ render2}

