import { CiSearch, CiInstagram, CiShoppingCart } from "react-icons/ci";
import { FaWhatsapp, FaBars } from "react-icons/fa";
import { TbColorSwatch } from "react-icons/tb";
import { useState, useEffect } from "react";
import "./navBar.css"
export const NavBar2 = () => {
    const [animate, setAnimate] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    const navStyle = {
        top: visible ? "0" : "-70px",
    };

    useEffect(() => {
        if (animate) {
            const timeoutId = setTimeout(() => {
                setAnimate(false);
            }, 500); // Tiempo de la animación en milisegundos

            return () => clearTimeout(timeoutId);
        }
    }, [animate]);

    return (
        <div>
            <header className="headerNav" style={navStyle}>
                <input type="checkbox" name="" id="chk1" />
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

                <div className="search-box">
                    <form action="">
                        <input type="text" name="search" placeholder="Buscar..." id="srch" />
                        <button type="submit"><CiSearch className="text-2xl text-white" /></button>
                    </form>
                </div>

                <ul className="mx-12">
                    <li><a href="#">INICIO</a></li>
                    <li><a href="#">PRODUCTOS</a></li>
                    <li><a href="#">BLOG</a></li>
                    <div className="items-center justify-evenly gap-10 flex lg:hidden">
                        <FaWhatsapp className="text-2xl text-white" />
                        <CiInstagram className="text-2xl text-white" />
                    </div>
                </ul>


                <div className="cart-theme gap-4 flex justify-center items-center lg:mr-12">

                    <div className={`cart relative  cursor-pointer  ${animate ? 'animate' : ''}`}>
                        <CiShoppingCart className="text-2xl text-white " />
                        <i className="flex items-center justify-center w-4 h-4 absolute top-0 -right-2 rounded-full bg-red-400">
                            <p className="text-sm font-extralight">10</p>
                        </i>
                    </div>
                    {/* <div className="dropdown dropdown-end">
                        <TbColorSwatch tabIndex={0} role="button" className="text-2xl text-white" />
                        <div tabIndex={0} className="rounded-lg dropdown-content w-52 bg-primary flex flex-col justify-start gap-2 p-2">

                            <button className="p-2 outline-offset-4 flex justify-evenly items-center rounded-md bg-base-100">
                                <p className="text-sm">
                                    Light
                                </p>
                                <div className="flex h-full gap-1">
                                    <span className="bg-primary rounded-badge w-2 text-primary">1</span>
                                    <span className="bg-secondary rounded-badge w-2 text-secondary">2</span>
                                    <span className="bg-accent rounded-badge w-2 text-accent">3</span>
                                    <span className="bg-neutral rounded-badge w-2 text-neutral">4</span>
                                </div>
                            </button>
                        </div>
                    </div> */}

                </div>


                <div className="Menu">
                    <label htmlFor="chk1">
                        <i><FaBars className="text-2xl" /></i>
                    </label>
                </div>
            </header>

        </div>
    )
}
