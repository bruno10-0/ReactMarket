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
        const carousel = document.querySelector('.carousel');
        const listItem = document.querySelector('.carousel .list');
        const thumbnail = document.querySelector('.carousel .thumbnail');

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
            const itemSlider = document.querySelectorAll('.carousel .list .item');
            const itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

            if (type === 'next') {
                listItem.appendChild(itemSlider[0]);
                thumbnail.appendChild(itemThumbnail[0]);
                carousel.classList.add('next');
            } else {
                let positionLastItem = itemSlider.length - 1;
                listItem.prepend(itemSlider[positionLastItem]);
                thumbnail.prepend(itemThumbnail[positionLastItem]);
                carousel.classList.add('prev');
            }

            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carousel.classList.remove('next');
                carousel.classList.remove('prev');
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

    //a partir de la array de objetos que recibimos para listaremos en el carousel, creamos una nueva con el orden modificado
    const nuevoArray = reorganizarArray(items)
    
    return (
        <>
            <div className="carousel">
                <div className="list">
                    {items.map((item, index) => (
                        <div key={index} className="item">
                            <img src={item.img} alt={item.title} className="w-full"/>
                            <div className="content">
                                <div className="author">{item.author}</div>
                                <div className="title">{item.title}</div>
                                <div className="topic">{item.topic}</div>
                                <div className="des">{item.des}</div>
                                <div className="buttons">
                                    <button className="hover:scale-105 transition-transform duration-300 ease-in-out">VER</button>
                                    <button className="hover:scale-105 transition-transform duration-300 ease-in-out">AGREGAR</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*thumbnail*/}
                <div className="thumbnail">
                    {nuevoArray.map((item, index) => (
                        <div key={index} className="item hover:scale-105 transition-transform duration-300 ease-in-out">
                            <img src={item.img} alt={item.title} />
                            <div className="content">
                                <div className="title">{item.author}</div>
                                <div className="des">{item.desSmall}</div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*arrows*/}
                <div className="arrows">
                    <button id="prev" className="flex justify-center items-center hover:scale-125 transition-transform duration-300 ease-in-out">
                        <SlArrowLeft />
                    </button>
                    <button id="next" className="flex justify-center items-center hover:scale-125 transition-transform duration-300 ease-in-out">
                        <SlArrowRight />
                    </button>
                </div>
                <div className="time"></div>
            </div>
        </>
    )
}
