import "./crazySlider.css"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useEffect, useState } from "react";
import { items, reorganizarArray } from "./items";

export const CazySlider = () => {

    //este useEffect lo usamos para controlar los eventos al hacer click en el boton para cambiar de thumbnail 
    // eslint-disable-next-line no-unused-vars
    const [userInteracted, setUserInteracted] = useState(false);

    useEffect(() => {
        const nextBtn = document.getElementById('next');
        const prevBtn = document.getElementById('prev');
        const Carousel = document.querySelector('.Carousel');
        const listItem = document.querySelector('.Carousel .list');
        const thumbnail = document.querySelector('.Carousel .thumbnail');

        nextBtn.onclick = function () {
            showSlider('next');
        };

        prevBtn.onclick = function () {
            showSlider('prev');
        };

        let timeRunning = 2000;
        let runTimeOut;
        let timeAutoNext = 11000;
        let runAutoRun

        function showSlider(type) {
            const itemSlider = document.querySelectorAll('.Carousel .list .item');
            const itemThumbnail = document.querySelectorAll('.Carousel .thumbnail .item');

            if (type === 'next') {
                listItem.appendChild(itemSlider[0]);
                thumbnail.appendChild(itemThumbnail[0]);
                Carousel.classList.add('next');
            } else {
                let positionLastItem = itemSlider.length - 1;
                listItem.prepend(itemSlider[positionLastItem]);
                thumbnail.prepend(itemThumbnail[positionLastItem]);
                Carousel.classList.add('prev');
            }

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                Carousel.classList.remove('next');
                Carousel.classList.remove('prev');
                setUserInteracted(false);
            }, timeRunning);

            clearTimeout(runAutoRun)

            setUserInteracted(true);

            runAutoRun = setTimeout(() => {
                nextBtn.click();
            }, timeAutoNext);

        }


        return () => {
            clearTimeout(runTimeOut);
            clearTimeout(runAutoRun);
        };
    }, []);

    //a partir de la array de objetos que recibimos para listaremos en el Carousel, creamos una nueva con el orden modificado
    const nuevoArray = reorganizarArray(items)

    return (
        <>
            <div className="Carousel mb-10">
                <div className="list">
                    {items.map((item, index) => (
                        <div key={index} className="item absolute">
                            <img src={item.img} alt={item.title} className="w-full" />
                            <div className="content">
                                <div className="author">{item.author}</div>
                                <div className="title">{item.title}</div>
                                <div className="topic text-primary uppercase">{item.topic}</div>
                                <div className="des">{item.des}</div>
                                <div className="buttons">
                                    <button className="rounded-badge bg-base-100" onClick={() => alert(`Soy el botón ${index}`)}>Detalles</button>
                                    <button className="rounded-badge bg-primary bg-opacity-50">Agregar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*thumbnail*/}
                <div className="thumbnail">
                    {nuevoArray.map((item, index) => (
                        <div key={index} className="item rounded-xl overflow-hidden hover:scale-95 transition-transform duration-300 ease-in-out">
                            <img src={item.img} alt={item.title}/>
                            <div className="content w-full h-auto  flex justify-around absolute bg-base-100 bg-opacity-10 p-2" style={{ backdropFilter: 'blur(10px)' }}>
                                <div className="title text-primary">{item.author}</div>
                                <div className="des text-accent">{item.desSmall}</div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*arrows*/}
                <div className="arrows z-30 ">
                    <button id="prev" className="bg-base-300 text-primary rounded-badge flex justify-center items-center hover:scale-125 transition-transform duration-300 ease-in-out">
                        <SlArrowLeft />
                    </button>
                    <button id="next" className="bg-base-300 text-primary rounded-badge flex justify-center items-center hover:scale-125 transition-transform duration-300 ease-in-out">
                        <SlArrowRight />
                    </button>
                </div>
                <div className="time bg-primary"></div>
                <div className="Blur z-20 w-full absolute -bottom-2">
                    <div className="w-full h-full bg-gradient-to-t from-base-100 to-transparent blur-sm"></div>
                </div>

            </div>
        </>
    )
}
