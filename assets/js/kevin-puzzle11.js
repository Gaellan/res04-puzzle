function Puzzler11()
{
    let images = [278, 276, 12, 41, 414, 161, 385, 244, 95, 175, 43, 147, 373, 7, 71, 325, 436, 166, 358, 388, 361, 229, 118, 256, 1, 192, 112, 44, 14, 94, 80, 346, 306, 270, 368, 189, 336, 134, 292];
    let positionColonne;
    let positionLigne;
    const grid = document.querySelector('main');
    for(let nbr of images){
        positionColonne = nbr % 19;
        if(positionColonne === 0){
            positionColonne = 19;
        }
        positionLigne = Math.ceil(nbr / 19);
        
        const urlImg = `assets/images/spicegirls_row-${positionLigne}-column-${positionColonne}.jpg`;
        const region = document.createElement('section');
        region.style.backgroundImage = `url(\"${urlImg}\")`;
        region.style.gridColumn = `${positionColonne}`;
        region.style.gridRow = `${positionLigne}`;
        grid.appendChild(region);
    }
}

export { Puzzler11 };