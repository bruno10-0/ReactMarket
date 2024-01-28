export const items = [
    {
        "author": "lorem 1",
        "title": "lorem 1",
        "topic": "lorem 1",
        "des": "lorem 1 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        "desSmall": "Lorem 1 is dolor",
        "img": "https://i.redd.it/fczz7oh6d0161.jpg"
    },
    {
        "author": "lorem 2",
        "title": "lorem 2",
        "topic": "lorem 2",
        "des": "lorem 2 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        "desSmall": "Lorem 2 is dolor",
        "img": "https://static.vecteezy.com/system/resources/previews/016/417/032/original/cool-shoes-for-playing-basketball-vector.jpg"
    },
    {
        "author": "lorem 3",
        "title": "lorem 3",
        "topic": "lorem 3",
        "des": "lorem 3 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        "desSmall": "Lorem 3 is dolor",
        "img": "https://preview.redd.it/jhsyocxt45691.png?width=842&format=png&auto=webp&s=dc8ef3a246f7da888ce408a9e069a7e1637271cb"
    },
    {
        "author": "lorem 4",
        "title": "lorem 4",
        "topic": "lorem 4",
        "des": "lorem 4 lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
        "desSmall": "Lorem 4 is dolor",
        "img": "https://th.bing.com/th/id/R.d03efadf6ffa58d05e88dd54dc87e15f?rik=koKz3GO4qZkwUg&riu=http%3a%2f%2fclipartmag.com%2fimage%2fnike-air-force-1-drawing-27.png&ehk=boA6Npnq%2b377Ls3KlD3icDb2F0tiSp1itWkKuo1kNYc%3d&risl=&pid=ImgRaw&r=0"
    }
];

export function reorganizarArray(array) {
    if (array.length < 2) {
        return array;
    }

    const primerElemento = array.slice(0, 1);
    const restoElementos = array.slice(1);

    return [...restoElementos, ...primerElemento];
}

export const items2 = reorganizarArray(items);


