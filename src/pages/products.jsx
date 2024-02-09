import { NavBar } from "../components/navBar/navBar";
import { Card } from "../components/card/Card"
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
    return (
        <div>
            <NavBar />
            <div className="relative w-full flex flex-col justify-center text-center items-center p-10" style={{ height: "430px", backgroundImage: "url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <h1 className="text-base-100 text-2xl uppercase mb-6" style={{ letterSpacing: "3px" }}>Bienvenido a la Tienda</h1>
                <p className="text-base-100 text-xs md:text-sm mb-2">En ReactMarket, te brindamos una amplia selección de nuestros mejores productos en diversas variedades, para satisfacer tus necesidades específicas con un rendimiento óptimo y garantizado.</p>
                <p className="text-base-100 text-xs md:text-sm mb-2">Nuestro compromiso con la atención al cliente y la calidad son nuestras máximas prioridades. Puedes confiar plenamente en nosotros para encontrar exactamente lo que buscas, con la máxima confianza y tranquilidad.</p>
            </div>
            <div className="w-full flex justify-end h-14 border-b dropdown dropdown-top ">
                <button tabIndex="0" role="button" className="btn h-full flex justify-center items-center px-16 border-l uppercase font-thin" style={{ letterSpacing: "2px" }}>
                    Filtros
                    <ul tabIndex="0" className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mr-6 mb-2">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </button>
            </div>
            {products.map((product) => (
                <Card key={product.id} product={product} />
            ))}


        </div>
    )
}
