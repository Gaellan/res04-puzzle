# Consignes Puzzle Musical


Nous allons profiter de ce projet pour que vous puissiez expérimenter de tous travailler sur un même repository en même temps (ça sert aussi à ça GitHub).


## Étape 0 : Récupérer le repository

Vous avez toustes été invité-e-s sur un repo que j'ai créé : https://github.com/Gaellan/res04-puzzle une fois que vous avez accepté l'invitation, vous pouvez le cloner dans le dossier `sites/js` de votre IDE.


## Étape 1 : Répartition des rôles

### Role 1 : Problem Solver

Pour éviter que vous n'écrasiez mutuellement le travail des autres, vous allez devoir désigner l'un ou l'une d'entre vous qui se chargera de la mise en place du HTML et du CSS.

Il sera aussi responsable d'importer et appeller les modules de chacun-e des autres dans l'`index.js`.


### Role 2 : JS Puzzler

Pour toustes les autres, votre rôle va consister à mettre à leur place le puzzle lui même.

Chacun-e d'entre vous va devoir créer un fichier JS au format `prenom-initiale_du_nom.js`.


## Étape 2 : Recréer l'image

Nous avons 456 (24 lignes, 19 colonnes) petites images qui en forment une grande et nous allons devoir replacer chacune des petites images à la bonne place.

Pour se faire vous allez simplement connaitre le "numéro" (de 1 à 456) de votre image mais pas ses coordonnées (lignes et colonnes).

Vous allez choisir un numéro de Puzzler (de 1 à 12) et travailler sur le tableau correspondant dans la liste suivante.

La taille de l'image totale est 1920 * 1080 pixels.

### Attribution des images :

#### Puzzler 1 :

```js
let images = [204, 110, 285, 193, 73, 294, 47, 81, 220, 138, 102, 243, 222, 101, 143, 295, 11, 191, 215, 206, 160, 221, 370, 70, 165, 31, 164, 277, 144, 49, 176, 148, 406, 403, 432, 159, 344, 342];
```

#### Puzzler 2 :

```js
let images = [223, 239, 208, 449, 64, 448, 416, 33, 357, 22, 13, 130, 25, 24, 351, 250, 251, 418, 136, 104, 378, 404, 280, 417, 4, 402, 380, 299, 424, 235, 122, 63, 231, 374, 329, 46, 371, 240, 391];
```

#### Puzzler 3 :

```js
let images = [367, 99, 65, 50, 156, 72, 265, 350, 362, 155, 410, 450, 359, 15, 422, 162, 127, 186, 85, 188, 168, 330, 203, 40, 377, 214, 401, 335, 247, 199, 328, 303, 252, 382, 59, 184, 106, 57, 307];
```

#### Puzzler 4 :

```js
let images = [333, 364, 142, 392, 5, 109, 282, 260, 17, 129, 451, 68, 123, 66, 169, 210, 305, 28, 195, 349, 181, 290, 267, 187, 196, 69, 407, 386, 249, 381, 202, 167, 283, 74, 157, 360, 268, 372, 132];
```

#### Puzzler 5 :

```js
let images = [409, 111, 228, 352, 440, 194, 383, 30, 248, 428, 198, 419, 163, 354, 338, 394, 29, 19, 298, 117, 146, 121, 62, 55, 269, 236, 317, 430, 423, 237, 429, 390, 96, 150, 36, 445, 356, 52, 289];
```

#### Puzzler 6 :

```js
let images = [442, 446, 258, 179, 197, 88, 425, 347, 340, 318, 37, 119, 120, 185, 200, 376, 216, 84, 246, 226, 426, 26, 408, 211, 128, 213, 453, 420, 242, 259, 180, 35, 32, 379, 154, 190, 441, 100, 78];
```

#### Puzzler 7 :

```js
let images = [126, 341, 315, 273, 264, 140, 20, 107, 233, 9, 314, 369, 75, 2, 113, 279, 395, 170, 207, 320, 275, 77, 300, 433, 334, 56, 82, 124, 61, 309, 34, 304, 405, 83, 400, 313, 343, 431, 345];
```

#### Puzzler 8 :

```js
let images = [452, 412, 205, 232, 48, 218, 363, 324, 135, 387, 288, 131, 219, 274, 413, 296, 308, 337, 108, 384, 8, 212, 323, 137, 116, 224, 145, 53, 312, 125, 321, 76, 227, 177, 319, 322, 316, 92, 435];
```

#### Puzzler 9 :

```js
let images = [209, 427, 311, 439, 115, 456, 153, 6, 97, 152, 332, 3, 281, 225, 327, 366, 399, 375, 444, 42, 255, 238, 348, 39, 434, 286, 79, 254, 87, 411, 54, 139, 67, 287, 103, 45, 261, 149, 171];
```

#### Puzzler 10 :

```js
let images = [27, 16, 454, 60, 182, 93, 355, 38, 21, 58, 18, 90, 201, 284, 421, 447, 297, 257, 438, 291, 437, 151, 353, 389, 234, 398, 396, 172, 158, 271, 98, 105, 272, 183, 266, 174, 133, 293, 86];
```

#### Puzzler 11 :

```js
let images = [278, 276, 12, 41, 414, 161, 385, 244, 95, 175, 43, 147, 373, 7, 71, 325, 436, 166, 358, 388, 361, 229, 118, 256, 1, 192, 112, 44, 14, 94, 80, 346, 306, 270, 368, 189, 336, 134, 292];
```

#### Puzzler 12 :

```js
let images = [89, 178, 141, 262, 365, 455, 310, 397, 339, 114, 91, 253, 415, 10, 245, 443, 241, 173, 393, 217, 302, 263, 23, 331, 301, 230, 326, 51];
```


## Étape 3 :

Et enfin pour rendre tout ça encore plus joli nous allons animer l'apparition des images.

La première ligne doit apparaitre progressivement pendant 1 secondes et commencer à apparaitre au bout de 100 ms.

Et chaque ligne ensuite se décale de 100 ms dans le temps donc 2ème ligne : 200ms, 3ème ligne 300ms, etc etc.