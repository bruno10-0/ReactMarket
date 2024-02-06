export const items = [
        {
        "author": "Samsung Galaxy S21",
        "title": "Samsung Galaxy S21 Ultra 5G",
        "topic": "Galaxy S21",
        "des": "El Samsung Galaxy S21 Ultra 5G ofrece una experiencia móvil excepcional con su pantalla Dynamic AMOLED 2X de 6.8 pulgadas, potente procesador y sistema de cámara revolucionario con sensor de 108 MP.",
        "desSmall": "Potencia y elegancia",
        "img": "https://www.bhphotovideo.com/images/images2500x2500/samsung_sm_g998uzsaxaa_s21_ultra_128gb_5g_1614299.jpg"
    },
    {
        "author": "Apple iPhone",
        "title": "iPhone 13 Pro",
        "topic": "iPhone",
        "des": "El iPhone 13 Pro lleva la fotografía a un nuevo nivel con su sistema de triple cámara, A15 Bionic para un rendimiento excepcional y una pantalla Super Retina XDR. Descubre lo último en tecnología móvil con el iPhone 13 Pro.",
        "desSmall": "Innovación sin límites",
        "img": "https://b2c-contenthub.com/wp-content/uploads/2021/09/iphone-13-pro.jpg?quality=50&strip=all"
    },
    {
        "author": "Google Pixel",
        "title": "Google Pixel 6 Pro",
        "topic": "Pixel",
        "des": "El Google Pixel 6 Pro combina un diseño elegante con una cámara de alta calidad y un rendimiento excepcional. Con funciones de inteligencia artificial avanzadas, este smartphone te ofrece una experiencia única.",
        "desSmall": "Simplicidad y potencia",
        "img": "https://1.bp.blogspot.com/-FBkpjJh48hM/YOglysrMA1I/AAAAAAAAELk/MkYB7EXjVSAlN957SUbM69hRQ-g3Tq1qgCNcBGAsYHQ/s1200/Pixel-6.jpg"
    },
    {
        "author": "OnePlus",
        "title": "OnePlus 9 Pro",
        "topic": "OnePlus",
        "des": "El OnePlus 9 Pro ofrece un rendimiento extraordinario con su pantalla Fluid AMOLED de 120 Hz, un sistema de cámara Hasselblad y una carga ultrarrápida. Descubre un nuevo estándar de excelencia con el OnePlus 9 Pro.",
        "desSmall": "Rendimiento sin concesiones",
        "img": "https://www.notebookcheck.biz/fileadmin/Notebooks/OnePlus/9_Pro/4_zu_3_OnePlus_9_Pro.jpg"
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


