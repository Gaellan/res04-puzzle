



    

    function Puzzler9()
    {
        let images = [209, 427, 311, 439, 115, 456, 153, 6, 97, 152, 332, 3, 281, 225, 327, 366, 399, 375, 
            444, 42, 255, 238, 348, 39, 434, 286, 79, 254, 87, 411, 54, 139, 67, 287, 103, 45, 261, 149, 171];
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

    
  export {Puzzler9};


