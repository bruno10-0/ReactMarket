import "./crazySlider.css"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useEffect, useState } from "react";

export const CazySlider = () => {
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

            setUserInteracted(true);
        }

        return () => {
            clearTimeout(runTimeOut);
        };
    }, []);

    return (
        <>
            <div className="carousel">
                <div className="list">
                    <div className="item">
                        <img src="https://i.redd.it/fczz7oh6d0161.jpg" />
                        <div className="content">
                            <div className="author">LOREM</div>
                            <div className="title">LOREM</div>
                            <div className="topic">LOREM</div>
                            <div className="des">
                                Lorem1 ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse beatae aspernatur. Numquam, officiis minima.
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
                                Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse beatae aspernatur. Numquam, officiis minima.
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
