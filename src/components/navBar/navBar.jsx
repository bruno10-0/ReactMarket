import { CiSearch, CiInstagram  } from "react-icons/ci";
import { FaWhatsapp, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

import "./navBar.css"
export const NavBar2 = () => {
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
        top: visible ? "0" : "-60px",
    };
    return (
        <div>
            <header className="headerNav" style={navStyle}>
                <input type="checkbox" name="" id="chk1" />
                <div className="logo">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 76 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
                    </svg>
                </div>
                <div className="search-box">
                    <form action="">
                        <input type="text" name="search" placeholder="Buscar" id="srch" />
                        <button type="submit"><CiSearch className="text-white" /></button>
                    </form>
                </div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Producto</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li>
                        <a href="#"><CiInstagram className="text-2xl"/></a>
                        <a href="#"><FaWhatsapp className="text-2xl"/></a>
                    </li>
                </ul>
                <div className="menu">
                    <label htmlFor="chk1">
                        <i><FaBars /></i>
                    </label>
                </div>
            </header>
        </div>
    )
}
