import { NavBar } from "../components/navBar/navBar";
import { Link } from "react-router-dom";
import { Card } from "../components/card/Card"
import { Footer } from "../components/footer/footer"
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
        }, {
            id: 42,
            name: "Galaxy S21",
            description: "Samsung Galaxy S21 Ultra 5G",
            price: "$839,410",
            image: "https://multipoint.com.ar/Image/0/750_750-SM-G998BZKMARO-5.jpg"
        },
        {
            id: 33,
            name: "Galaxy S21",
            description: "Samsung Galaxy S21 Ultra 5G",
            price: "$839,410",
            image: "https://multipoint.com.ar/Image/0/750_750-SM-G998BZKMARO-5.jpg"
        }, {
            id: 22,
            name: "Galaxy S21",
            description: "Samsung Galaxy S21 Ultra 5G",
            price: "$839,410",
            image: "https://multipoint.com.ar/Image/0/750_750-SM-G998BZKMARO-5.jpg"
        },
        {
            id: 13,
            name: "Galaxy S21",
            description: "Samsung Galaxy S21 Ultra 5G",
            price: "$839,410",
            image: "https://multipoint.com.ar/Image/0/750_750-SM-G998BZKMARO-5.jpg"
        }
    ];
    return (
        <div>
            <NavBar />
            <div className="relative w-full flex flex-col justify-center text-center items-center p-10" style={{ height: "430px", backgroundImage: "url('https://images.pexels.com/photos/814544/pexels-photo-814544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <h1 className="text-neutral text-2xl uppercase mb-6" style={{ letterSpacing: "3px" }}>Bienvenido a la Tienda</h1>
                <p className="text-neutral text-xs md:text-sm mb-2">En ReactMarket, te brindamos una amplia selección de nuestros mejores productos en diversas variedades, para satisfacer tus necesidades específicas con un rendimiento óptimo y garantizado.</p>
                <p className="text-neutral text-xs md:text-sm mb-2">Nuestro compromiso con la atención al cliente y la calidad son nuestras máximas prioridades. Puedes confiar plenamente en nosotros para encontrar exactamente lo que buscas, con la máxima confianza y tranquilidad.</p>
            </div>


            <div className="w-full h-auto">
                <div className="w-full bg-base-100 flex justify-end items-center border-b z-10 py-2 sticky top-16">

                    <div className="md:hidden dropdown dropdown-end ">
                        <summary tabIndex={0} role="button" className="m-1 shadow-md btn bg-primary text-base-100 uppercase font-light" style={{ letterSpacing: "2px" }}>Filtrar</summary>
                        <ul tabIndex="0" className="z-10 bg-base-200 dropdown-content menu p-2 shadow rounded-box w-52 m-2">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>

                    <div className="dropdown dropdown-end ">
                        <summary tabIndex={0} role="button" className="m-1 shadow-md btn bg-primary text-base-100 uppercase font-light mr-4" style={{ letterSpacing: "2px" }}>Ordenar</summary>
                        <ul tabIndex="0" className="z-10 bg-base-200 dropdown-content menu p-2 shadow rounded-box w-52 m-2">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>


                <div className="w-full h-auto flex justify-evenly">
                    <div className="hidden md:flex flex-col w-1/5 h-full m-4 sticky top-36">
                        <h1 className="uppercase mb-4" style={{ letterSpacing: "2px" }}>Todos los productos</h1>
                        <Link to="#" className="text-sm mb-3">Samsung</Link>
                        <Link to="#" className="text-sm mb-3">Apple</Link>
                        <Link to="#" className="text-sm mb-3">Huawei</Link>
                        <Link to="#" className="text-sm mb-3">Xiaomi</Link>
                        <Link to="#" className="text-sm mb-3">OnePlus</Link>
                        <Link to="#" className="text-sm mb-3">Google</Link>
                        <Link to="#" className="text-sm mb-3">Motorola</Link>
                        <Link to="#" className="text-sm mb-3">Reparados</Link>
                    </div>

                    <div className="h-auto w-full md:w-3/4 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-2 m-4">
                        {products.map((product) => (
                            <Card key={product.id} product={product} />
                        ))}
                        <div className="join">
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                            <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                        </div>
                    </div>

                </div>

            </div>

            <Footer />
        </div >
    )
}
