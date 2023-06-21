function render5()
{
    let images = [409, 111, 228, 352, 440, 194, 383, 30, 248, 428, 198, 419, 163, 354, 338, 394, 29, 19, 298, 117, 146, 121, 62, 55, 269, 236, 317, 430, 423, 237, 429, 390, 96, 150, 36, 445, 356, 52, 289];
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
    render5()
})

export { render5 }