window.addEventListener("DOMContentLoaded", function(){
    

    
    Puzzler6();
});

function Puzzler6()
    {
        let images = [442, 446, 258, 179, 197, 88, 425, 347, 340, 318, 37, 119, 120, 185, 200, 376, 216, 84, 246, 226, 426, 26, 408, 211, 128, 213, 453, 420, 242, 259, 180, 35, 32, 379, 154, 190, 441, 100, 78];


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

export { Puzzler6 };