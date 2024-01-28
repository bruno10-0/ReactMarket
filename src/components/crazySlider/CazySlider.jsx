import "./crazySlider.css"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useEffect } from "react";
export const CazySlider = () => {
    useEffect(() => {
        const nexDom = document.getElementById('next');
        const prevDom = document.getElementById('prev');
        const carouselDom = document.querySelector('.carousel');
        const listItemDom = document.querySelector('.carousel .list');
        const thumbnailDom = document.querySelector('.carousel .thumbnail');

        nexDom.onclick = function () {
            showSlider('next');
        };

        prevDom.onclick = function () {
            showSlider('prev');
        };

        let timeAutoNext = 7000;
        let timeRunning = 2000;
        let runTimeOut;
        let runAutoRun;

        function startAutoAdvance() {
            runAutoRun = setTimeout(() => {
                nexDom.click();
            }, timeAutoNext);
        }

        function showSlider(type) {
            const itemSlider = document.querySelectorAll('.carousel .list .item');
            const itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

            if (type === 'next') {
                listItemDom.appendChild(itemSlider[0]);
                thumbnailDom.appendChild(itemThumbnail[0]);
                carouselDom.classList.add('next');
            } else {
                let positionLastItem = itemSlider.length - 1;
                listItemDom.prepend(itemSlider[positionLastItem]);
                thumbnailDom.prepend(itemThumbnail[positionLastItem]);
                carouselDom.classList.add('prev');
            }

            clearTimeout(runTimeOut);
            clearTimeout(runAutoRun);
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove('next');
                carouselDom.classList.remove('prev');
            }, timeRunning);

            startAutoAdvance();
        }

        startAutoAdvance(); // Iniciar avance automático al cargar el componente

        // Limpiar temporizadores al desmontar el componente
        return () => {
            clearTimeout(runTimeOut);
            clearTimeout(runAutoRun);
        };
    }, []);
    return (
        <>
            <div className="carousel prev">
                <div className="list">
                    <div className="item">
                        <img src="https://i.redd.it/fczz7oh6d0161.jpg" />
                        <div className="content">
                            <div className="author">LOREM</div>
                            <div className="title">LOREM</div>
                            <div className="topic">LOREM</div>
                            <div className="des">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, minima.
                            </div>
                            <div className="buttons">
                                <button>LOREM</button>
                                <button>LOREM</button>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src="https://static.vecteezy.com/system/resources/previews/016/417/032/original/cool-shoes-for-playing-basketball-vector.jpg" />
                        <div className="content">
                            <div className="author">LOREM</div>
                            <div className="title">LOREM</div>
                            <div className="topic">LOREM</div>
                            <div className="des">
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, voluptate.
                            </div>
                            <div className="buttons">
                                <button>LOREM</button>
                                <button>LOREM</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*thumbnail*/}
                <div className="thumbnail">
                    <div className="item">
                        <img src="https://static.vecteezy.com/system/resources/previews/016/417/032/original/cool-shoes-for-playing-basketball-vector.jpg" />
                        <div className="content">
                            <div className="title">
                                lorem
                            </div>
                            <div className="des">
                                lorem
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src="https://i.redd.it/fczz7oh6d0161.jpg" />
                        <div className="content">
                            <div className="title">
                                lorem
                            </div>
                            <div className="des">
                                lorem
                            </div>
                        </div>
                    </div>


                </div>
                {/*arrows*/}
                <div className="arrows">
                    <button id="prev" className="flex justify-center items-center">
                        <SlArrowLeft />
                    </button>
                    <button id="next" className="flex justify-center items-center">
                        <SlArrowRight />
                    </button>
                </div>
                <div className="time"></div>
            </div>
        </>
    )
}
