// section background-image 

function render8()
{
    let images = [452, 412, 205, 232, 48, 218, 363, 324, 135, 387, 288, 131, 219, 274, 413, 296, 308, 337, 108, 384, 8, 212, 323, 137, 116, 224, 145, 53, 312, 125, 321, 76, 227, 177, 319, 322, 316, 92, 435];
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

window.addEventListener('DOMContentLoaded',() => {
    render8()
})


