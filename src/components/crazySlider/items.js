export const items = [
    {
        "author": "Nike Air Max",
        "title": "Zapatillas de Running Nike Air Max",
        "topic": "Air Max",
        "des": "Con una amortiguación Air Max de última generación y un diseño aerodinámico, estas zapatillas son la elección perfecta para corredores que buscan rendimiento y estilo en cada paso.",
        "desSmall": "Estilo y comodidad",
        "img": "https://i.pinimg.com/originals/df/db/c9/dfdbc9135eb519f72cebcdc35bbd5e80.jpg"
    },
    {
        "author": "Nike Jordan",
        "title": "Zapatillas de Baloncesto Nike Jordan",
        "topic": "Jordan",
        "des": "Inspiradas en el legendario legado de Michael Jordan, estas zapatillas ofrecen un soporte excepcional y una tracción superior en la cancha, combinando estilo y rendimiento a la perfección.",
        "desSmall": "Estilo icónico",
        "img": "https://i.pinimg.com/originals/8d/68/7a/8d687a450976422fba0505ae941dba19.jpg"
    },
    {
        "author": "Nike Air Force 1",
        "title": "Zapatillas de Estilo Urbano Nike Air Force 1",
        "topic": "Air Force 1",
        "des": "Las Nike Air Force 1 son un símbolo de estilo urbano. Con su diseño clásico y su construcción de alta calidad, estas zapatillas elevan cualquier atuendo casual con un toque de elegancia y sofisticación.",
        "desSmall": "Estilo legendario",
        "img": "https://i.pinimg.com/originals/61/61/e5/6161e52292bdb821027b70eeddac2935.jpg"
    },
    {
        "author": "Nike Revolution",
        "title": "Zapatillas de Running Nike Revolution",
        "topic": "Revolution",
        "des": "Las zapatillas Nike Revolution están diseñadas para corredores que buscan ligereza y versatilidad. Con una parte superior transpirable y una entresuela acolchada, ofrecen confort y soporte en cada carrera.",
        "desSmall": "Ligereza y rendimiento",
        "img": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f16ba228184663.55d1fb74a4736.jpg"
    },
    {
        "author": "Nike React",
        "title": "Zapatillas de Running Nike React",
        "topic": "React",
        "des": "Las zapatillas Nike React combinan comodidad y rendimiento. Con una amortiguación React innovadora y una parte superior transpirable, te brindan una experiencia de carrera suave y receptiva en cada kilómetro.",
        "desSmall": "Comodidad sin igual",
        "img": "https://i.pinimg.com/originals/1b/e9/9f/1be99f18e39cc8828f973a2b01329d3c.jpg"
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


