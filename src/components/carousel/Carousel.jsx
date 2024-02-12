/* eslint-disable react/prop-types */
import { Card } from "../card/Card";
import { Link } from "react-router-dom";
import  img1  from "./img/1.png"
import  img2  from "./img/2.webp"
import img3 from "./img/3.png"
import img4 from "./img/4.png"
 export const Carousel = ({ to }) => {
  const products = [
    {
      id: 1,
      name: "Galaxy S21",
      description: "Samsung Galaxy S21 Ultra 5G",
      price: "$839,410",
      image: img1
    },
    {
      id: 2,
      name: "Galaxy S21",
      description: "Samsung Galaxy S21 Ultra 5G",
      price: "$839,410",
      image: img2
    },
    {
      id: 3,
      name: "Galaxy S21",
      description: "Samsung Galaxy S21 Ultra 5G",
      price: "$839,410",
      image: img3
    },
    {
      id: 4,
      name: "Galaxy S21",
      description: "Samsung Galaxy S21 Ultra 5G",
      price: "$839,410",
      image: img4
    }
  ];
  return (
    <div className="mx-2 lg:mx-20">
      <h1 className="uppercase my-4" style={{ letterSpacing: "8px" }}>Ultimos añadidos</h1>
      <div className="w-full">
        <div id="slide1" className="relative w-full">
          <div className="carousel-item grid grid-cols-2 lg:grid-cols-4 gap-2 items-center" >
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn-circle flex justify-center items-center bg-base-100 text-primary hover:scale-105 transition-transform duration-300 ease-in-out">❮</a>
            <a href="#slide2" className="btn-circle flex justify-center items-center bg-base-100 text-primary hover:scale-105 transition-transform duration-300 ease-in-out">❯</a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-start my-4">
        <button className="btn rounded-badge uppercase bg-primary text-base-100 font-normal text-sm shadow-md">
          <Link to={to} >Ver todos</Link>
        </button>
      </div>
    </div>
  )
}
