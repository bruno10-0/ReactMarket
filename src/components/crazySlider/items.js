export const items = [
    {
        "author": "Nike Air Max",
        "title": "Zapatillas de Running Nike Air Max",
        "topic": "Air Max",
        "des": "Con una amortiguación Air Max de última generación y un diseño aerodinámico, estas zapatillas son la elección perfecta para corredores que buscan rendimiento y estilo en cada paso.",
        "desSmall": "Estilo y comodidad",
        "img": "https://www.sneakersnstuff.com/images/117044/original.jpg"
    },
    {
        "author": "Nike Jordan",
        "title": "Zapatillas de Baloncesto Nike Jordan",
        "topic": "Jordan",
        "des": "Inspiradas en el legendario legado de Michael Jordan, estas zapatillas ofrecen un soporte excepcional y una tracción superior en la cancha, combinando estilo y rendimiento a la perfección.",
        "desSmall": "Estilo icónico",
        "img": "https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/0/1/012234_01.jpg"
    },
    {
        "author": "Nike Air Force 1",
        "title": "Zapatillas de Estilo Urbano Nike Air Force 1",
        "topic": "Air Force 1",
        "des": "Las Nike Air Force 1 son un símbolo de estilo urbano. Con su diseño clásico y su construcción de alta calidad, estas zapatillas elevan cualquier atuendo casual con un toque de elegancia y sofisticación.",
        "desSmall": "Estilo legendario",
        "img": "https://i5.walmartimages.com/asr/c32eb644-b1b4-4c49-9148-a586fedd13cb_1.f89e6eb97081a6678334d1adacf2d31a.jpeg"
    },
    {
        "author": "Nike Revolution",
        "title": "Zapatillas de Running Nike Revolution",
        "topic": "Revolution",
        "des": "Las zapatillas Nike Revolution están diseñadas para corredores que buscan ligereza y versatilidad. Con una parte superior transpirable y una entresuela acolchada, ofrecen confort y soporte en cada carrera.",
        "desSmall": "Ligereza y rendimiento",
        "img": "https://static.netshoes.com.br/produtos/tenis-nike-revolution-6-next-nature-feminino/06/2IC-5001-006/2IC-5001-006_zoom3.jpg?ts=1635289921&ims=1088x"
    },
    {
        "author": "Nike React",
        "title": "Zapatillas de Running Nike React",
        "topic": "React",
        "des": "Las zapatillas Nike React combinan comodidad y rendimiento. Con una amortiguación React innovadora y una parte superior transpirable, te brindan una experiencia de carrera suave y receptiva en cada kilómetro.",
        "desSmall": "Comodidad sin igual",
        "img": "https://th.bing.com/th/id/R.038cf9307fb161dee4612c6205e70e91?rik=XzGKnH3bmquxjQ&riu=http%3a%2f%2fimages.nike.com%2fis%2fimage%2fDotCom%2fPDP_HERO%2fNike-Flyknit-Air-Max-Mens-Running-Shoe-CW7355_100_A_PREM.jpg%3fhei%3d2000%26wid%3d2000%26fmt%3dpng%26&ehk=vbftnm%2btsoq7lrAmLOBfC0NVsdycPZmrMCPon4h5WV4%3d&risl=&pid=ImgRaw&r=0"
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


