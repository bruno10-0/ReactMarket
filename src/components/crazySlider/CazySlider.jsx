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
            <div className="Carousel">
                <div className="list">
                    {items.map((item, index) => (
                        <div key={index} className="item">
                            <img src={item.img} alt={item.title} className="w-full" />
                            <div className="content">
                                <div className="author">{item.author}</div>
                                <div className="title">{item.title}</div>
                                <div className="topic text-primary">{item.topic}</div>
                                <div className="des">{item.des}</div>
                                <div className="buttons">
                                    <button className="btn bg-base-100 ">DETALLES</button>
                                    <button className="btn bg-primary bg-opacity-50">AGREGAR</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*thumbnail*/}
                <div className="thumbnail">
                    {nuevoArray.map((item, index) => (
                        <div key={index} className="border-2 border-primary item hover:scale-95 transition-transform duration-300 ease-in-out">
                            <img src={item.img} alt={item.title}/>
                            <div className="w-full h-auto content absolute bg-base-100 bg-opacity-10 p-2" style={{ backdropFilter: 'blur(10px)' }}>
                                <div className="title text-primary font-bold text">{item.author}</div>
                                <div className="hidden md:block des text-accent text-sm">{item.desSmall}</div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*arrows*/}
                <div className="arrows">
                    <button id="prev" className="text-primary flex justify-center items-center hover:scale-95 transition-transform duration-300 ease-in-out">
                        <SlArrowLeft />
                    </button>
                    <button id="next" className="text-primary flex justify-center items-center hover:scale-95 transition-transform duration-300 ease-in-out">
                        <SlArrowRight />
                    </button>
                </div>
                <div className="time bg-primary"></div>
            </div>
        </>
    )
}
