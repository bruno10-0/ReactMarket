import "./crazySlider.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useEffect, useState } from "react";
import { items, reorganizarArray } from "./items";

export const CazySlider = () => {
  //este useEffect lo usamos para controlar los eventos al hacer click en el boton para cambiar de thumbnail
  // eslint-disable-next-line no-unused-vars
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    const carousel = document.querySelector(".carousel");
    const listItem = document.querySelector(".carousel .list");
    const thumbnail = document.querySelector(".carousel .thumbnail");

    nextBtn.onclick = function () {
      showSlider("next");
    };

    prevBtn.onclick = function () {
      showSlider("prev");
    };

    let timeRunning = 2000;
    let runTimeOut;
    let timeAutoNext = 11000;
    let runAutoRun;

    function showSlider(type) {
      const itemSlider = document.querySelectorAll(".carousel .list .item");
      const itemThumbnail = document.querySelectorAll(
        ".carousel .thumbnail .item"
      );

      if (type === "next") {
        listItem.appendChild(itemSlider[0]);
        thumbnail.appendChild(itemThumbnail[0]);
        carousel.classList.add("next");
      } else {
        let positionLastItem = itemSlider.length - 1;
        listItem.prepend(itemSlider[positionLastItem]);
        thumbnail.prepend(itemThumbnail[positionLastItem]);
        carousel.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carousel.classList.remove("next");
        carousel.classList.remove("prev");
        setUserInteracted(false);
      }, timeRunning);

      clearTimeout(runAutoRun);

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
  const nuevoArray = reorganizarArray(items);

  return (
    <>
      <div className="carousel">
        <div className="list">
          {items.map((item, index) => (
            <div key={index} className="item">
              <img src={item.img} alt={item.title} className="w-full" />
              <div className="content">
                <div className="author">{item.author}</div>
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">{item.des}</div>
                <div className="buttons">
                  <button className="hover:scale-105 transition-transform duration-300 ease-in-out">
                    DETALLES
                  </button>
                  <button className="hover:scale-105 transition-transform duration-300 ease-in-out">
                    AGREGAR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*thumbnail*/}
        <div className="thumbnail">
          {nuevoArray.map((item, index) => (
            <div
              key={index}
              className="item hover:scale-105 transition-transform duration-300 ease-in-out"
            >
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
          <button
            id="prev"
            className="flex justify-center items-center hover:scale-125 transition-transform duration-300 ease-in-out"
          >
            <SlArrowLeft />
          </button>
          <button
            id="next"
            className="flex justify-center items-center hover:scale-125 transition-transform duration-300 ease-in-out"
          >
            <SlArrowRight />
          </button>
        </div>
        <div className="time"></div>
      </div>

      <div className="md:container md:mx-auto m-2">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-200 w-full
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          "
        >
          <div className="collapse-title text-xl font-medium text-center ">
            Zapatillas femeninas
          </div>

          <div className="collapse-content grid grid-cols-3 gap-0 ">


            <div className="card  bg-base-100 shadow-xl m-1 p-0 ">

              <figure className="px-1 pt-1">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl  "
                />
              </figure>
              <div className="card-body items-center
               text-center px-1 pt-1 m-0 h-min">

                <h2 className="card-title px-1 pt-1">Nike</h2>
                <h2 className="card-title px-1 pt-1">$ 60.000</h2>
                <p className="text-xs	">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="card-actions m-0">
                  <button className="btn text-xs bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 ">Comprar</button>
                </div>
              </div>
            
            
            </div>

            <div className="card  bg-base-100 shadow-xl m-1">
              <figure className="px-1 pt-1">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center px-1 pt-1 m-0">
                <h2 className="card-title px-1 pt-1">Nike</h2>
                <p className="text-xs	">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary ">Comprar</button>
                </div>
                <h2 className="card-title px-1 pt-1">$ 60.000</h2>
              </div>
            </div>

            <div className="card  bg-base-100 shadow-xl image- m-1">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Adidas!!</h2>
                <p> zapatillas para running</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Comprar</button>
                </div>
              </div>
            </div>

            <div className="card  bg-base-100 shadow-xl image-full m-1">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Adidas!!</h2>
                <p> zapatillas para running</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Comprar</button>
                </div>
              </div>
            </div>

            <div className="card  bg-base-100 shadow-xl image-full m-1">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Adidas!!</h2>
                <p> zapatillas para running</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="md:container md:mx-auto m-2">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-200 w-full
          bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
          "
        >
          <div className="collapse-title text-xl font-medium text-center ">
            Zapatillas Masculinas
          </div>

          <div className="collapse-content grid grid-cols-3 gap-1 ">


            <div className="card  bg-base-100 shadow-xl m-1">
              <figure className="px-1 pt-1">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center px-1 pt-1 m-0">
                <h2 className="card-title px-1 pt-1">Nike</h2>
                <p className="text-xs	">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="card-actions">
                  <button className="btn  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 ">Comprar</button>
                </div>
              </div>
            </div>

            <div className="card  bg-base-100 shadow-xl m-1">
              <figure className="px-1 pt-1">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center px-1 pt-1 m-0">
                <h2 className="card-title px-1 pt-1">Nike</h2>
                <p className="text-xs	">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary ">Comprar</button>
                </div>
              </div>
            </div>

            <div className="card  bg-base-100 shadow-xl m-1">
              <figure className="px-1 pt-1">
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center px-1 pt-1 m-0">
                <h2 className="card-title px-1 pt-1">Nike</h2>
                <p className="text-xs	">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary ">Comprar</button>
                </div>
              </div>
            </div>

            <div className="card  bg-base-100 shadow-xl image-full m-1">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Adidas!!</h2>
                <p> zapatillas para running</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Comprar</button>
                </div>
              </div>
            </div>

            <div className="card  bg-base-100 shadow-xl image-full m-1">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Adidas!!</h2>
                <p> zapatillas para running</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Comprar</button>
                </div>
              </div>
            </div>

            <div className="card  bg-base-100 shadow-xl image-full m-1">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Adidas!!</h2>
                <p> zapatillas para running</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Comprar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
