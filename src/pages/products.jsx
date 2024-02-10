import { NavBar } from "../components/navBar/navBar";
import { Link } from "react-router-dom";
import { Card } from "../components/card/Card"
import { useState, useEffect } from 'react';
export const Products = () => {
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

    useEffect(() => {
        const handleScroll = () => {
            console.log("Valor del scroll vertical: " + window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 361) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <NavBar />
            <div className="relative w-full flex flex-col justify-center text-center items-center p-10" style={{ height: "430px", backgroundImage: "url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <h1 className="text-base-100 text-2xl uppercase mb-6" style={{ letterSpacing: "3px" }}>Bienvenido a la Tienda</h1>
                <p className="text-base-100 text-xs md:text-sm mb-2">En ReactMarket, te brindamos una amplia selección de nuestros mejores productos en diversas variedades, para satisfacer tus necesidades específicas con un rendimiento óptimo y garantizado.</p>
                <p className="text-base-100 text-xs md:text-sm mb-2">Nuestro compromiso con la atención al cliente y la calidad son nuestras máximas prioridades. Puedes confiar plenamente en nosotros para encontrar exactamente lo que buscas, con la máxima confianza y tranquilidad.</p>
            </div>
            <div className="relative w-full">
                <div className={`bg-base-100 w-full flex justify-end h-14 border-b${isFixed ? 'fixed' : 'static'}`} style={{ top: "70px" }}>
                    <div className="md:hidden dropdown dropdown-end">
                        <summary tabIndex={0} role="button" className="m-1 shadow-md btn uppercase font-light" style={{ letterSpacing: "2px" }}>Filtrar</summary>
                        <ul tabIndex="0" className="z-10 bg-base-200 dropdown-content menu p-2 shadow rounded-box w-52 m-2">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <div className="dropdown dropdown-end">
                        <summary tabIndex={0} role="button" className="m-1 shadow-md btn uppercase font-light" style={{ letterSpacing: "2px" }}>Ordenar</summary>
                        <ul tabIndex="0" className="z-10 bg-base-200 dropdown-content menu p-2 shadow rounded-box w-52 m-2">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
                {/* Contenedor de marcas */}
                <div className={`hidden w-1/5 h-full md:flex flex-col mx-10 mt-10 ${isFixed ? 'fixed left-0' : 'static'}`} style={{ top: "100px" }}>
                    <h1 className="uppercase mb-4" style={{ letterSpacing: "2px" }}>Todos los productos</h1>
                    <Link to="#" className="text-sm mb-3">Samsung</Link>
                    <Link to="#" className="text-sm mb-3">Apple</Link>
                    <Link to="#" className="text-sm mb-3">Huawei</Link>
                    <Link to="#" className="text-sm mb-3">Xiaomi</Link>
                    <Link to="#" className="text-sm mb-3">OnePlus</Link>
                    <Link to="#" className="text-sm mb-3">Google</Link>
                    <Link to="#" className="text-sm mb-3">Motorola</Link>
                    <Link to="#" className="text-sm mb-3">Reparados</Link>
                    <Link to="#" className="text-sm mb-3">Segunda mano</Link>
                </div>
                {/* Div donde se mapean los productos */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full xl:grid-cols-4 md:w-3/4 gap-10 lg:gap-2 h-full right-0 absolute px-10 " style={{ top: "70px" }}>
                    {products.map((product) => (
                        <Card key={product.id} product={product} />
                    ))}
                </div>
            </div>







        </div >
    )
}
