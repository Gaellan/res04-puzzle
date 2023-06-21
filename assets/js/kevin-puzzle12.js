function Puzzler12()
{
    let images = [89, 178, 141, 262, 365, 455, 310, 397, 339, 114, 91, 253, 415, 10, 245, 443, 241, 173, 393, 217, 302, 263, 23, 331, 301, 230, 326, 51];
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

export { Puzzler12 };