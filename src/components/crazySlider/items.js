export const items = [
    {
        "author": "Nike Air Max",
        "title": "Zapatillas de Running Nike Air Max",
        "topic": "Air Max",
        "des": "Con una amortiguación Air Max de última generación y un diseño aerodinámico, estas zapatillas son la elección perfecta para corredores que buscan rendimiento y estilo en cada paso.",
        "desSmall": "Estilo y comodidad",
        "img": "https://i.pinimg.com/originals/a6/b2/ee/a6b2eec05c9201dfb6b3b00994bb5e53.jpg"
    },
    {
        "author": "Nike Air Max",
        "title": "Zapatillas de Running Nike Air Max",
        "topic": "Air Max",
        "des": "Con una amortiguación Air Max de última generación y un diseño aerodinámico, estas zapatillas son la elección perfecta para corredores que buscan rendimiento y estilo en cada paso.",
        "desSmall": "Estilo y comodidad",
        "img": "https://i.pinimg.com/originals/a6/b2/ee/a6b2eec05c9201dfb6b3b00994bb5e53.jpg"
    },
    {
        "author": "Nike Air Max",
        "title": "Zapatillas de Running Nike Air Max",
        "topic": "Air Max",
        "des": "Con una amortiguación Air Max de última generación y un diseño aerodinámico, estas zapatillas son la elección perfecta para corredores que buscan rendimiento y estilo en cada paso.",
        "desSmall": "Estilo y comodidad",
        "img": "https://i.pinimg.com/originals/a6/b2/ee/a6b2eec05c9201dfb6b3b00994bb5e53.jpg"
    },
    {
        "author": "Nike Air Max",
        "title": "Zapatillas de Running Nike Air Max",
        "topic": "Air Max",
        "des": "Con una amortiguación Air Max de última generación y un diseño aerodinámico, estas zapatillas son la elección perfecta para corredores que buscan rendimiento y estilo en cada paso.",
        "desSmall": "Estilo y comodidad",
        "img": "https://i.pinimg.com/originals/a6/b2/ee/a6b2eec05c9201dfb6b3b00994bb5e53.jpg"
    },
    {
        "author": "Nike Air Max",
        "title": "Zapatillas de Running Nike Air Max",
        "topic": "Air Max",
        "des": "Con una amortiguación Air Max de última generación y un diseño aerodinámico, estas zapatillas son la elección perfecta para corredores que buscan rendimiento y estilo en cada paso.",
        "desSmall": "Estilo y comodidad",
        "img": "https://i.pinimg.com/originals/a6/b2/ee/a6b2eec05c9201dfb6b3b00994bb5e53.jpg"
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


