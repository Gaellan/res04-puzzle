// section background-image 

function render6()
{
    let images = [442, 446, 258, 179, 197, 88, 425, 347, 340, 318, 37, 119, 120, 185, 200, 376, 216, 84, 246, 226, 426, 26, 408, 211, 128, 213, 453, 420, 242, 259, 180, 35, 32, 379, 154, 190, 441, 100, 78];
    const cols = 24;
    // const rows = 19;

    images.forEach(position =>
    {
        const colImage = Math.floor(position / cols) + 1;
        const rowImage = position % cols;

        const grid = document.querySelector('main');
        const urlImg = `assets/images/spicegirls_row-${rowImage}-column-${colImage}.jpg`;

        const region = document.createElement('section');
        region.style.backgroundImage = `url(\"${urlImg}\")`;
        region.style.gridColumn = `${colImage}`;
        region.style.gridRow = `${rowImage}`;
        grid.appendChild(region);
    })
}
