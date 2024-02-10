/* eslint-disable react/prop-types */
import { Card } from "../card/Card";
import { Link } from "react-router-dom";
export const Carousel = ({to}) => {
  const products = [
    {
      id: 1,
      name: "Galaxy S21",
      description: "Samsung Galaxy S21 Ultra 5G",
      price: "$839,410",
      image: "https://multipoint.com.ar/Image/0/750_750-SM-G998BZKMARO-5.jpg"
    },
    {
      id: 2,
      name: "Galaxy S21",
      description: "Samsung Galaxy S21 Ultra 5G",
      price: "$839,410",
      image: "https://multipoint.com.ar/Image/0/750_750-SM-G998BZKMARO-5.jpg"
    },
    {
      id: 3,
      name: "Galaxy S21",
      description: "Samsung Galaxy S21 Ultra 5G",
      price: "$839,410",
      image: "https://multipoint.com.ar/Image/0/750_750-SM-G998BZKMARO-5.jpg"
    },
    {
      id: 4,
      name: "Galaxy S21",
      description: "Samsung Galaxy S21 Ultra 5G",
      price: "$839,410",
      image: "https://http2.mlstatic.com/D_NQ_NP_678866-MLA48955366681_012022-O.webp"
    }
  ];
  return (
    <div className="mx-2 lg:mx-20">
      <h1 className="uppercase" style={{ letterSpacing: "8px" }}>Ultimos añadidos</h1>
      <div className="w-full">
        <div id="slide1" className="relative w-full">
          <div className="carousel-item grid grid-cols-2 lg:grid-cols-4 gap-2 items-center" >
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn-circle flex justify-center items-center bg-base-200 text-primary hover:scale-105 transition-transform duration-300 ease-in-out">❮</a>
            <a href="#slide2" className="btn-circle flex justify-center items-center bg-base-200 text-primary hover:scale-105 transition-transform duration-300 ease-in-out">❯</a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-start my-4">
        <button className="btn uppercase bg-base-200 text-primary font-normal text-sm shadow-md">
         <Link to={to} >Ver todos</Link>
        </button>
      </div>
    </div>
  )
}
