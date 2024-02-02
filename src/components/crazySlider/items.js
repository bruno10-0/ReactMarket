export const items = [
    {
        "author": "Nike Air Max",
        "title": "Zapatillas de Running Nike Air Max",
        "topic": "Air Max",
        "des": "Con una amortiguación Air Max de última generación y un diseño aerodinámico, estas zapatillas son la elección perfecta para corredores que buscan rendimiento y estilo en cada paso.",
        "desSmall": "Estilo y comodidad",
        "img": "https://cdn.samsung.com/etc/designs/smg/global/imgs/Social_Image_Samsung_Mobile_Smartphone_PCD_PF.jpg"
    },
    {
        "author": "Nike Air Max",
        "title": "Zapatillas de Running Nike Air Max",
        "topic": "Air Max",
        "des": "Con una amortiguación Air Max de última generación y un diseño aerodinámico, estas zapatillas son la elección perfecta para corredores que buscan rendimiento y estilo en cada paso.",
        "desSmall": "Estilo y comodidad",
        "img": "https://cdn.samsung.com/etc/designs/smg/global/imgs/Social_Image_Samsung_Mobile_Smartphone_PCD_PF.jpg"
    },
    {
        "author": "Nike Air Max",
        "title": "Zapatillas de Running Nike Air Max",
        "topic": "Air Max",
        "des": "Con una amortiguación Air Max de última generación y un diseño aerodinámico, estas zapatillas son la elección perfecta para corredores que buscan rendimiento y estilo en cada paso.",
        "desSmall": "Estilo y comodidad",
        "img": "https://cdn.samsung.com/etc/designs/smg/global/imgs/Social_Image_Samsung_Mobile_Smartphone_PCD_PF.jpg"
    },
    {
        "author": "Nike Air Max",
        "title": "Zapatillas de Running Nike Air Max",
        "topic": "Air Max",
        "des": "Con una amortiguación Air Max de última generación y un diseño aerodinámico, estas zapatillas son la elección perfecta para corredores que buscan rendimiento y estilo en cada paso.",
        "desSmall": "Estilo y comodidad",
        "img": "https://cdn.samsung.com/etc/designs/smg/global/imgs/Social_Image_Samsung_Mobile_Smartphone_PCD_PF.jpg"
    },
    {
        "author": "Nike Air Max",
        "title": "Zapatillas de Running Nike Air Max",
        "topic": "Air Max",
        "des": "Con una amortiguación Air Max de última generación y un diseño aerodinámico, estas zapatillas son la elección perfecta para corredores que buscan rendimiento y estilo en cada paso.",
        "desSmall": "Estilo y comodidad",
        "img": "https://cdn.samsung.com/etc/designs/smg/global/imgs/Social_Image_Samsung_Mobile_Smartphone_PCD_PF.jpg"
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


