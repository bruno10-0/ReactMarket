export const items = [
        {
        "author": "Samsung Galaxy S21",
        "title": "Samsung Galaxy S21 Ultra 5G",
        "topic": "Galaxy S21",
        "des": "El Samsung Galaxy S21 Ultra 5G ofrece una experiencia móvil excepcional con su pantalla Dynamic AMOLED 2X de 6.8 pulgadas, potente procesador y sistema de cámara revolucionario con sensor de 108 MP.",
        "desSmall": "Potencia y elegancia",
        "img": "https://images.hindustantimes.com/tech/img/2021/02/02/original/PXL_20210202_075220348_1612260140931_1612260916718.jpg"
    },
    {
        "author": "Apple iPhone",
        "title": "iPhone 13 Pro",
        "topic": "iPhone",
        "des": "El iPhone 13 Pro lleva la fotografía a un nuevo nivel con su sistema de triple cámara, A15 Bionic para un rendimiento excepcional y una pantalla Super Retina XDR. Descubre lo último en tecnología móvil con el iPhone 13 Pro.",
        "desSmall": "Innovación sin límites",
        "img": "https://photos5.appleinsider.com/gallery/47523-92824-New-Alpine-Green-iPhone-13-Pro-xl.jpg"
    },
    {
        "author": "Google Pixel",
        "title": "Google Pixel 6 Pro",
        "topic": "Pixel",
        "des": "El Google Pixel 6 Pro combina un diseño elegante con una cámara de alta calidad y un rendimiento excepcional. Con funciones de inteligencia artificial avanzadas, este smartphone te ofrece una experiencia única.",
        "desSmall": "Simplicidad y potencia",
        "img": "https://cdn.vox-cdn.com/thumbor/jEAbQSUjhs_4Am7xlXCyiCUWhq8=/0x0:2096x1182/1920x0/filters:focal(0x0:2096x1182):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22755100/Google_Pixel_6_Pro__Alt_Angle_.jpg"
    },
    {
        "author": "OnePlus",
        "title": "OnePlus 9 Pro",
        "topic": "OnePlus",
        "des": "El OnePlus 9 Pro ofrece un rendimiento extraordinario con su pantalla Fluid AMOLED de 120 Hz, un sistema de cámara Hasselblad y una carga ultrarrápida. Descubre un nuevo estándar de excelencia con el OnePlus 9 Pro.",
        "desSmall": "Rendimiento sin concesiones",
        "img": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/04/One-Plus-9-Pro-Featured-Pic1.jpg"
    }
];



//recibe un array y modifica el orden de ese array, por ejemplo si recibimos: [{A},{B},{C}] nos devuelve:  [{B},{C},{A}] 
export function reorganizarArray(array) {
    if (array.length < 2) {
        return array;
    }

    const primerElemento = array.slice(0, 1);
    const restoElementos = array.slice(1);

    return [...restoElementos, ...primerElemento];
}

export const items2 = reorganizarArray(items);


