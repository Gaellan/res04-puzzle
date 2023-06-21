window.addEventListener("DOMContentLoaded",function() {
    let images = [27, 16, 454, 60, 182, 93, 355, 38, 21, 58, 18, 90, 201, 284, 421, 447, 297, 257, 438, 291, 437, 151, 353, 389, 234, 398, 396, 172, 158, 271, 98, 105, 272, 183, 266, 174, 133, 293, 86];

    function placeImg ()
    {
        let main = document.querySelector("main");

        for (let image of images)
        {
            let row = Math.ceil(image/19);
            let column = image%19;
            if (column === 0)
            {
                column = 19;
            }

            let section = document.createElement("section");
            section.style.backgroundImage = `url("assets/images/spicegirls_row-${row}-column-${column}.jpg")`;
            section.style.gridArea = `${row}/${column}/span 1/span 1`;
            main.appendChild(section);
        }
    }
    placeImg();
    
})