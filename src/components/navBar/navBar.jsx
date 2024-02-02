import { CiSearch, CiInstagram, CiShoppingCart } from "react-icons/ci";
import { FaWhatsapp, FaBars } from "react-icons/fa";
import { TbColorSwatch } from "react-icons/tb";
import { useState, useEffect } from "react";
import "./navBar.css"

export const NavBar2 = () => {
    const [animate, setAnimate] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    //escucha los eventos del scroll, sirve para ainmar la subida y bajada del navBar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);
    //define la altura a la que se desplazara hacia el top(arriba) el nav bar al hacer scroll hacia abajo
    const navStyle = {
        top: visible ? "0" : "-70px",
    };
    // sirve para animar al icono de el carrito, al usuario cargar un item en el mismo este realizara una animacion
    useEffect(() => {
        if (animate) {
            const timeoutId = setTimeout(() => {
                setAnimate(false);
            }, 500); // Tiempo de la animación en milisegundos

            return () => clearTimeout(timeoutId);
        }
    }, [animate]);
    //lista de themas, nos ayudara a listar los botones para cambiar de tema
    const themes = [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset",
    ];
    return (
        <div>
            <header className="headerNav" style={navStyle}>
                <input type="checkbox" name="" id="chk1" />
                {/*Logo y nombre de la pagina*/}
                <div className="logo cursor-pointer">
                    <div className="nav-logo">
                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 76 65"

                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
                        </svg>
                    </div>

                    <div className="flex items-center justify-between">
                        <h1>
                            <span className="text-lg font-bold">React</span>Market
                        </h1>

                        {/* <button className="bg-white rounded-2xl text-black p-2" onClick={() => setAnimate(true)}>animacion?</button> */}
                    </div>


                </div>
                {/*barra de busqueda*/}
                <div className="search-box">
                    <form action="">
                        <input type="text" name="search" placeholder="Buscar..." id="srch" />
                        <button type="submit"><CiSearch className="text-2xl text-white" /></button>
                    </form>
                </div>
                {/*lista de secciones de la pagina, ejemplo: Inicio. 
                Incluye las redes solicales(visible en pantallas menores a 1000px) */}
                <ul className="mx-12">
                    <li><a href="#">INICIO</a></li>
                    <li><a href="#">PRODUCTOS</a></li>
                    <li><a href="#">BLOG</a></li>
                    <div className="items-center justify-evenly gap-10 flex lg:hidden">
                        <FaWhatsapp className="text-2xl text-white" />
                        <CiInstagram className="text-2xl text-white" />
                    </div>
                </ul>
                {/*contenedor de iconos de tema y carrito*/}
                <div className="gap-4 flex justify-center items-center lg:mr-12">

                    <div className={`cart relative  cursor-pointer  ${animate ? 'animate' : ''}`}>
                        <CiShoppingCart className="text-2xl text-white " />
                        <i className="flex items-center justify-center w-4 h-4 absolute top-0 -right-2 rounded-full bg-red-400">
                            <p className="text-sm font-extralight">10</p>
                        </i>
                    </div>
                    <div tabIndex={0} className="dropdown dropdown-end max-h-[calc(100vh-300px)]">
                        <TbColorSwatch tabIndex={0} role="button" className="text-2xl text-white" />
                        <div
                            tabIndex={0}
                            className=" shadow-2xl mt-8 rounded-badge dropdown-content max-h-[calc(100vh-20rem)] md:max-h-[calc(100vh-10rem)] w-48 md:w-56 overflow-y-auto bg-primary flex flex-col gap-2 p-4"
                        >

                            {themes.map((theme, index) => (
                                <button data-theme={theme} key={index} className="px-4 py-3 gap-2 outline-offset-4 flex justify-evenly items-center rounded-badge  bg-base-100">
                                    <p data-theme={theme} className="flex-grow text-sm">{theme}</p>
                                    <div className="flex h-full gap-1">
                                        <span data-theme={theme} className="bg-primary rounded-badge w-2 text-primary">1</span>
                                        <span data-theme={theme} className="bg-secondary rounded-badge w-2 text-secondary">2</span>
                                        <span data-theme={theme} className="bg-accent rounded-badge w-2 text-accent">3</span>
                                        <span data-theme={theme} className="bg-neutral rounded-badge w-2 text-neutral">1</span>
                                    </div>
                                </button>
                            ))}

                        </div>
                    </div>

                </div>
                {/*icono de despliegue lateral del menu (visible en pantallas menores a 1000px)*/}
                <label htmlFor="chk1" className="Menu">
                    <FaBars className="text-2xl text-white" />
                </label>



            </header>

        </div>
    )
}
