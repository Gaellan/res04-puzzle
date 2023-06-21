
window.addEventListener("DOMContentLoaded", function(){
    Puzzler3();
});

function Puzzler3()
{
    let images = [  367, 99, 65, 50, 156, 72, 265, 
        350, 362, 155, 410, 450, 359, 
        15, 422, 162, 127, 186, 85, 188, 
        168, 330, 203, 40, 377, 214, 401, 
        335, 247, 199, 328, 303, 252, 382, 
        59, 184, 106, 57, 307];
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

    {
        let images = [  367, 99, 65, 50, 156, 72, 265, 
            350, 362, 155, 410, 450, 359, 
            15, 422, 162, 127, 186, 85, 188, 
            168, 330, 203, 40, 377, 214, 401, 
            335, 247, 199, 328, 303, 252, 382, 
            59, 184, 106, 57, 307];

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

export { Puzzler3 };