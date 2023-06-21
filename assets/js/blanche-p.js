//puzzle 1
let images = [204, 110, 285, 193, 73, 294, 47, 81, 220, 138, 102, 243, 222, 101, 143, 295, 11, 191, 215, 206, 160, 221, 370, 70, 165, 31, 164, 277, 144, 49, 176, 148, 406, 403, 432, 159, 344, 342];

let main = document.getElementsByName("main");

function imagesPlacement () {
    
    for (let image of images) {

        let row = Math.ceil(image/19);
        let column = image%19;

        if (column === 0) {
            column = 19;
        }

        let section = document.createElement("section");
        section.style.backgroundImage = `url("assests/images/spicegirls_row-${row}-column-${column}.jpg")`;
        section.style.gridArea = `${row}/ ${column}/ span 1/ span 1`;
        main.appendChild(section);
    }
}

imagesPlacement();

export {imagesPlacement};