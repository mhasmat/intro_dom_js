"use strict";

// Descripcion de los tipos
const descripcion_agua = "Los Pokémon tipo agua se dice que son puro y que suelen adaptarse a cualquier situación o condición climática, ya que el agua puede adoptar cualquier forma en cualquier momento. Por ejemplo, en un vaso adopta una forma, mientras que, en un cubo, adopta otra distinta. Por eso, los Pokémon de tipo agua se sienten a menudo libres en cualquier sitio donde haya agua a su disposición."
const descripcion_planta = "Los Pokémon de tipo planta suelen ser pacíficos y les gusta cuidar de las flores y a los demás, pero también son grandes luchadores y pueden envenenar, paralizar o dormir al rival en combate"
const descripcion_electrico = "Los Pokémon de tipo eléctrico tienen hábitats variados, desde bosques y praderas, hasta ciudades y centrales eléctricas. Los Pokémon de tipo dragón, eléctrico y planta son resistentes al tipo eléctrico, y aún más los de tipo tierra, quienes son inmunes a los ataques eléctricos. Por consiguiente, los Pokémon eléctricos deben de ser muy precavidos con los ataques de tipo tierra, el cual representa su única debilidad."
const descripcion_normal = "Los Pokémon de tipo normal abarcan la mayor cantidad y variedad de movimientos que el resto de tipos. Gran parte de estos son movimientos que no realizan daño o no lo hacen directamente, sino que afectan a las características o estados del Pokémon. Los tipos normal son los más diversos entre los Pokémon, con características variadas, desarrollos y requisitos para las evoluciones diferentes de cada uno, al igual que diferir en las zonas donde se pueden capturar, desde bosques, cuevas, montañas, ciudades, etc."
const descripcion_fuego = "Los Pokémon de tipo tipo fuego basan sus ataques, principalmente, en el control de este elemento; y la mayoría pueden quemar al Pokémon oponente, mientras que ellos no sufren quemaduras. Son apasionados y, algunos, de mal carácter (como el Charizard de Ash); viven en cuevas o zonas rocosas y muy áridas; y, más probable, aun cerca de volcanes activos. Sin embargo, los únicos Pokémon que aparentemente suelen andar por lugares verdes como las praderas, son Ponyta y Rapidash, pudiendo ser que estos lugares les permiten galopar sin obstáculos. También, algunos son más dóciles, como Growlithe, Vulpix y sus respectivas evoluciones."

/* Comienza a escribir su código aquí */
// Funcion
// function cards(poketype) {
//     switch(poketype) {
//         case 'agua':
//             const card = document.querySelector('article');
//             card.classList.remove('planta');
//             card.classList.add('agua');

//             const textoHeader = document.querySelector('.header');
//             textoHeader.textContent = "Tipo Agua";

//             const descriptionType = document.querySelector('#descripcion');
//             descriptionType.textContent = `${descripcion_agua}`;

//             const imgType = document.querySelector('article img');
//             imgType.src = 'images/water_type.png';
            
//             break;
      
//         case 'electricidad':
//             card = document.querySelector('article');        
//             card.classList.remove('planta');
//             card.classList.add('electricidad');

//             textoHeader = document.querySelector('.header');
//             textoHeader.textContent = "Tipo Electrico";

//             descriptionType = document.querySelector('#descripcion');
//             descriptionType.textContent = `${descripcion_electrico}`;

//             imgType = document.querySelector('article img');
//             imgType.src = 'images/electric_type.png';
          
//             break;

//         case 'normal':
//             card = document.querySelector('article');
//             card.classList.remove('planta');
//             card.classList.add('normal');

//             textoHeader = document.querySelector('.header');
//             textoHeader.textContent = "Tipo Normal";

//             descriptionType = document.querySelector('#descripcion');
//             descriptionType.textContent = `${descripcion_normal}`;

//             imgType = document.querySelector('article img');
//             imgType.src = 'images/normal_type.png';
            
//             break;

//         case 'fuego':
//             card = document.querySelector('article');
//             card.classList.remove('planta');
//             card.classList.add('fuego');

//             textoHeader = document.querySelector('.header');
//             textoHeader.textContent = "Tipo Fuego";

//             descriptionType = document.querySelector('#descripcion');
//             descriptionType.textContent = `${descripcion_fuego}`;

//             imgType = document.querySelector('article img');
//             imgType.src = 'images/fire_type.png';
            
//             break;
        
//         case 'planta':
//             card = document.querySelector('article');
//             card.classList.remove('planta');
//             card.classList.add('planta');

//             textoHeader = document.querySelector('.header');
//             textoHeader.textContent = "Tipo Planta";

//             descriptionType = document.querySelector('#descripcion');
//             descriptionType.textContent = `${descripcion_planta}`;

//             imgType = document.querySelector('article img');
//             imgType.src = 'images/grass_type.png';
            
//             break;
        
//         default:
//             alert('Error! Valor no existe.');
//             break;
//     }    
//     return poketype;
// }


// Llamo 1 x 1 a los botones
const btnPlanta = document.querySelector("#btnPlanta");
const btnAgua = document.querySelector('#btnAgua');
const btnElectricidad = document.querySelector('#btnElectricidad');
const btnNormal = document.querySelector('#btnNormal');
const btnFuego = document.querySelector('#btnFuego');

// Agrego los listeners
btnPlanta.addEventListener('click', function() {
    const card = document.querySelector('article');
    card.classList.remove('fuego', 'normal', 'agua', 'electricidad');
    card.classList.add('planta');

    const textoHeader = document.querySelector('.header');
    textoHeader.textContent = "Tipo Planta";

    const descriptionType = document.querySelector('#descripcion');
    descriptionType.textContent = `${descripcion_planta}`;

    const imgType = document.querySelector('article img');
    imgType.src = 'images/grass_type.png';
});

btnAgua.addEventListener('click', function() {
    const card = document.querySelector('article');
    card.classList.remove('fuego', 'normal', 'planta', 'electricidad');
    card.classList.add('agua');
    
    const textoHeader = document.querySelector('.header');
    textoHeader.textContent = "Tipo Agua";

    const descriptionType = document.querySelector('#descripcion');
    descriptionType.textContent = `${descripcion_agua}`;

    const imgType = document.querySelector('article img');
    imgType.src = 'images/water_type.png';
});
btnElectricidad.addEventListener('click', function() {
    const card = document.querySelector('article');        
    card.classList.remove('fuego', 'normal', 'agua', 'planta');
    card.classList.add('electricidad');

    const textoHeader = document.querySelector('.header');
    textoHeader.textContent = "Tipo Electrico";

    const descriptionType = document.querySelector('#descripcion');
    descriptionType.textContent = `${descripcion_electrico}`;

    const imgType = document.querySelector('article img');
    imgType.src = 'images/electric_type.png';
});
btnNormal.addEventListener('click', function() {
    const card = document.querySelector('article');
    card.classList.remove('fuego', 'planta', 'agua', 'electricidad');
    card.classList.add('normal');

    const textoHeader = document.querySelector('.header');
    textoHeader.textContent = "Tipo Normal";

    const descriptionType = document.querySelector('#descripcion');
    descriptionType.textContent = `${descripcion_normal}`;

    const imgType = document.querySelector('article img');
    imgType.src = 'images/normal_type.png';
});
btnFuego.addEventListener('click', function() {
    const card = document.querySelector('article');
    card.classList.remove('planta', 'normal', 'agua', 'electricidad');
    card.classList.add('fuego');

    const textoHeader = document.querySelector('.header');
    textoHeader.textContent = "Tipo Fuego";

    const descriptionType = document.querySelector('#descripcion');
    descriptionType.textContent = `${descripcion_fuego}`;

    const imgType = document.querySelector('article img');
    imgType.src = 'images/fire_type.png';
});